import { createHmac } from "node:crypto";
import { contactSchema, briefText, recipientFor } from "./contact-schema";
import { isContactConfigured } from "./contact-config";
type Dependencies = { fetch: typeof fetch; configured: () => boolean };
const headers = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
};
const response = (
  status: number,
  message: string,
  extra: Record<string, string> = {},
) =>
  new Response(JSON.stringify({ message }), {
    status,
    headers: { ...headers, ...extra },
  });
async function readLimited(request: Request) {
  if (Number(request.headers.get("content-length")) > 16384)
    throw Error("size");
  const reader = request.body?.getReader();
  if (!reader) throw Error("body");
  let total = 0;
  const chunks: Uint8Array[] = [];
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > 16384) {
        await reader.cancel();
        throw Error("size");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}
export async function handleContact(
  request: Request,
  deps: Dependencies = { fetch, configured: isContactConfigured },
) {
  const origin = request.headers.get("origin");
  const publicUrl = new URL(request.url);
  // Next's local adapter can expose localhost internally while the public Host is 127.0.0.1.
  const host = request.headers.get("host");
  if (host) publicUrl.host = host;
  if (request.headers.get("x-forwarded-proto") === "https")
    publicUrl.protocol = "https:";
  const allowed = new Set([publicUrl.origin]);
  if (process.env.SITE_URL) allowed.add(new URL(process.env.SITE_URL).origin);
  if (!origin || !allowed.has(origin))
    return response(403, "Odśwież stronę i spróbuj ponownie.");
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return response(415, "Nieprawidłowy format zapytania.");
  let raw: unknown;
  try {
    raw = await readLimited(request);
  } catch (e) {
    return response(
      e instanceof Error && e.message === "size" ? 413 : 400,
      "Nieprawidłowe dane formularza.",
    );
  }
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success)
    return response(
      422,
      "Sprawdź wymagane pola, adres e-mail i zgodę na kontakt.",
    );
  const v = parsed.data;
  if (v.website) return response(400, "Nieprawidłowe zapytanie.");
  if (!deps.configured())
    return response(
      503,
      "Wysyłka z formularza jest chwilowo niedostępna. Skorzystaj z e-maila lub telefonu.",
    );
  try {
    // Vercel overwrites x-forwarded-for at its trusted proxy. No raw IP is stored.
    const ip = (request.headers.get("x-forwarded-for") || "unknown")
      .split(",")[0]
      .trim();
    const key =
      "winterwarm:contact:" +
      createHmac("sha256", process.env.RATE_LIMIT_SALT!)
        .update(ip)
        .digest("hex");
    const limit = await deps.fetch(process.env.UPSTASH_REDIS_REST_URL!, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        "EVAL",
        "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return {n,redis.call('TTL',KEYS[1])}",
        "1",
        key,
      ]),
      signal: AbortSignal.timeout(4000),
      cache: "no-store",
    });
    if (!limit.ok) throw Error("rate");
    const lr = await limit.json();
    if (
      lr.error ||
      !Array.isArray(lr.result) ||
      !Number.isInteger(lr.result[0])
    )
      throw Error("rate");
    if (lr.result[0] > 5)
      return response(
        429,
        "Zbyt wiele prób. Spróbuj ponownie za kilka minut.",
        { "Retry-After": String(Math.max(1, Number(lr.result[1]) || 600)) },
      );
    if (!v.token) return response(422, "Potwierdź weryfikację antyspamową.");
    const verify = await deps.fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: v.token,
        }),
        signal: AbortSignal.timeout(5000),
        cache: "no-store",
      },
    );
    if (!verify.ok) throw Error("captcha");
    const captcha = await verify.json();
    if (
      !captcha.success ||
      captcha.action !== "contact" ||
      (!allowed.has("https://" + captcha.hostname) &&
        !allowed.has("http://" + captcha.hostname))
    )
      return response(422, "Weryfikacja wygasła. Spróbuj ponownie.");
    const to = recipientFor(v.needs);
    if (!to) throw Error("recipient");
    const mail = await deps.fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": "winterwarm-contact/" + v.requestId,
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM,
        to: [to],
        reply_to: v.email,
        subject: "Zapytanie o inwestycję | ЛОГО",
        text: briefText(v),
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!mail.ok) throw Error("mail");
    const accepted = await mail.json();
    if (!accepted.id) throw Error("mail");
    return response(
      200,
      "Zapytanie przyjęte przez serwer pocztowy. Dziękujemy za kontakt.",
    );
  } catch {
    return response(
      503,
      "Nie udało się potwierdzić wysyłki. Spróbuj ponownie lub skorzystaj z e-maila.",
    );
  }
}
