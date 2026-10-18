import { test } from "node:test";
import assert from "node:assert/strict";
import { handleContact } from "../lib/contact-handler";
import { contactSchema, recipientFor, briefText } from "../lib/contact-schema";
const valid = {
  needs: ["HVAC"],
  object: "Hala magazynowa",
  stage: "Modernizacja",
  area: "1500",
  location: "Poznań",
  details: "Dane testowe",
  name: "Test Example",
  email: "test@example.com",
  consent: true,
  website: "",
  token: "test-token",
  requestId: "9bbbc284-c762-4a91-9ed4-55dde8bcc919",
};
const req = (
  body: unknown = valid,
  origin = "https://example.com",
  type = "application/json",
) =>
  new Request("https://example.com/api/contact", {
    method: "POST",
    headers: { origin, "Content-Type": type, "x-forwarded-for": "192.0.2.1" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
Object.assign(process.env, {
  CONTACT_TO: "inbox@example.com",
  CONTACT_FROM: "Website <site@example.com>",
  CONTACT_TO_HVAC: "hvac@example.com",
  UPSTASH_REDIS_REST_URL: "https://rate.example.com",
  UPSTASH_REDIS_REST_TOKEN: "test",
  RATE_LIMIT_SALT: "test-salt",
  TURNSTILE_SECRET_KEY: "test",
  RESEND_API_KEY: "test",
});
function mock(
  opts: {
    limit?: number;
    captcha?: boolean;
    mail?: boolean;
    hostname?: string;
    action?: string;
  } = {},
) {
  const sent: { url: string; options?: RequestInit }[] = [];
  const fetchMock: typeof fetch = async (input, options) => {
    const url = String(input);
    sent.push({ url, options });
    if (url.includes("rate.example"))
      return json({ result: [opts.limit || 1, 600] });
    if (url.includes("turnstile"))
      return json({
        success: opts.captcha !== false,
        hostname: opts.hostname || "example.com",
        action: opts.action || "contact",
      });
    return opts.mail === false
      ? json({ error: "unavailable" }, 503)
      : json({ id: "mock-message-id" });
  };
  return { fetch: fetchMock, configured: () => true, sent };
}
test("validates and normalizes fields", () => {
  const v = contactSchema.parse({ ...valid, name: "  Test Example  " });
  assert.equal(v.area, 1500);
  assert.equal(v.name, "Test Example");
  assert.match(briefText(v), /Poznań/);
});
test("rejects missing consent, invalid email, unknown enum, duplicate needs and bad area", () => {
  for (const x of [
    { consent: false },
    { email: "a\r\nb@example.com" },
    { needs: ["Invalid"] },
    { needs: ["HVAC", "HVAC"] },
    { area: "-10" },
    { details: "a".repeat(3001) },
  ])
    assert.equal(contactSchema.safeParse({ ...valid, ...x }).success, false);
});
test("routes recipients only through server configuration", () => {
  assert.equal(recipientFor(["HVAC"]), "hvac@example.com");
  assert.equal(recipientFor(["HVAC", "LED"]), "inbox@example.com");
});
test("rejects cross-origin, absent origin and non-json", async () => {
  const d = mock();
  assert.equal(
    (await handleContact(req(valid, "https://evil.example"), d)).status,
    403,
  );
  const noOrigin = req();
  noOrigin.headers.delete("origin");
  assert.equal((await handleContact(noOrigin, d)).status, 403);
  assert.equal(
    (await handleContact(req(valid, "https://example.com", "text/plain"), d))
      .status,
    415,
  );
  assert.equal(d.sent.length, 0);
});
test("rejects malformed, oversized and invalid payloads", async () => {
  const d = mock();
  assert.equal((await handleContact(req("{"), d)).status, 400);
  assert.equal((await handleContact(req("x".repeat(17000)), d)).status, 413);
  assert.equal(
    (await handleContact(req({ ...valid, email: "bad" }), d)).status,
    422,
  );
  assert.equal(d.sent.length, 0);
});
test("honeypot never sends", async () => {
  const d = mock();
  assert.equal(
    (await handleContact(req({ ...valid, website: "spam" }), d)).status,
    400,
  );
  assert.equal(d.sent.length, 0);
});
test("unconfigured form fails closed", async () => {
  const d = mock();
  assert.equal(
    (await handleContact(req(), { ...d, configured: () => false })).status,
    503,
  );
  assert.equal(d.sent.length, 0);
});
test("persistent limit blocks after five attempts", async () => {
  const d = mock({ limit: 6 });
  const r = await handleContact(req(), d);
  assert.equal(r.status, 429);
  assert.equal(r.headers.get("Retry-After"), "600");
  assert.equal(d.sent.length, 1);
  assert.ok(!String(d.sent[0].options?.body).includes("192.0.2.1"));
});
test("rejects captcha token failure, wrong hostname and wrong action", async () => {
  for (const opts of [
    { captcha: false },
    { hostname: "evil.example" },
    { action: "wrong" },
  ]) {
    const d = mock(opts);
    assert.equal((await handleContact(req(), d)).status, 422);
    assert.equal(d.sent.length, 2);
  }
});
test("rejects missing captcha without sending mail", async () => {
  const d = mock();
  assert.equal(
    (await handleContact(req({ ...valid, token: "" }), d)).status,
    422,
  );
  assert.equal(d.sent.length, 1);
});
test("provider errors and network errors never return success", async () => {
  const d = mock({ mail: false });
  assert.equal((await handleContact(req(), d)).status, 503);
  assert.equal(
    (
      await handleContact(req(), {
        configured: () => true,
        fetch: async () => {
          throw Error("network");
        },
      })
    ).status,
    503,
  );
});
test("accepted mail uses fixed subject, safe reply-to and idempotency key", async () => {
  const d = mock();
  const r = await handleContact(req(), d);
  assert.equal(r.status, 200);
  assert.equal(r.headers.get("Cache-Control"), "no-store");
  const mail = d.sent[2];
  const body = JSON.parse(String(mail.options?.body));
  assert.deepEqual(body.to, ["hvac@example.com"]);
  assert.equal(body.reply_to, "test@example.com");
  assert.equal(body.subject, "Zapytanie o inwestycję | ЛОГО");
  assert.equal(
    (mail.options?.headers as Record<string, string>)["Idempotency-Key"],
    "winterwarm-contact/" + valid.requestId,
  );
  assert.ok(body.text.includes("1500 m²"));
});
