import { test, expect } from "@playwright/test";
const paths = [
  "/",
  "/rozwiazania",
  "/hvac",
  "/drzwi-bramy",
  "/oswietlenie",
  "/produkty",
  "/xr-plus",
  "/skyline",
  "/bramy-doki",
  "/obiekty",
  "/o-nas",
  "/realizacje",
  "/kontakt",
  "/projekt",
  "/prywatnosc",
];
for (const width of [1440, 768, 390])
  for (const path of paths) {
    test(`${path} at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 960 });
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      const r = await page.goto(path);
      await page.waitForLoadState("networkidle");
      expect(r?.status()).toBe(200);
      expect(await page.locator("h1").count()).toBe(1);
      await expect(page.locator("header .demo-notice")).toBeVisible();
      await expect(page.locator("header .demo-notice")).toContainText(
        "Bohdan Mykytenko i Marian Poliakov",
      );
      await expect(page.locator(".footer-bottom")).toContainText(
        "Zdjęcia produktów i realizacji: materiały ze strony",
      );
      await expect(page.locator(".footer-bottom")).not.toContainText("AI");
      await expect(page.locator("html")).toHaveAttribute("lang", "pl");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      ).toBeTruthy();
      await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.forEach((i) => ((i as HTMLImageElement).loading = "eager")),
        );
      await page.waitForFunction(() =>
        [...document.images].every((i) => i.complete && i.naturalWidth > 0),
      );
      expect(errors).toEqual([]);
    });
  }
test("catalog filters, empty state and URL", async ({ page }) => {
  await page.goto("/produkty?obszar=LED");
  await expect(page.locator(".catalog-item")).toHaveCount(7);
  await page.fill("#catalog-search", "Skyline");
  await expect(page.locator(".catalog-item")).toHaveCount(2);
  await page.fill("#catalog-search", "not-a-product");
  await expect(page.locator("#catalog-empty")).toBeVisible();
  await page.getByRole("button", { name: "Pokaż wszystko" }).click();
  await expect(page.locator(".catalog-item")).toHaveCount(22);
});
test("solution tabs support keyboard", async ({ page }) => {
  await page.goto("/");
  await page.locator("#tab-climate").focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#tab-access")).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(page.locator("#solution-title")).toContainText("Swobodny ruch.");
});
test("search dialog opens and escapes to trigger", async ({ page }) => {
  await page.goto("/");
  const button = page.getByRole("button", { name: "Szukaj w serwisie" });
  await button.click();
  await page.fill("#site-query", "Skyline");
  await expect(page.locator("#search-results")).toContainText("Skyline");
  await page.keyboard.press("Escape");
  await expect(page.locator("#site-search")).not.toBeVisible();
  await expect(button).toBeFocused();
});
test("mobile menu sets inert and Escape restores", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu +" }).click();
  await expect(page.locator("#navigation")).toBeVisible();
  expect(
    await page.locator("main").evaluate((e) => (e as HTMLElement).inert),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Menu +" })).toBeFocused();
  expect(
    await page.locator("main").evaluate((e) => (e as HTMLElement).inert),
  ).toBe(false);
});
test("brief prefill and honest mail fallback", async ({ page }) => {
  await page.goto("/projekt?obszar=LED");
  await expect(page.locator("input[name=need][value=LED]")).toBeChecked();
  await page.getByRole("button", { name: "Przygotuj wiadomość" }).click();
  await expect(page.locator("#project-summary")).toContainText("LED");
  await expect(page.locator("#project-send")).toHaveAttribute(
    "href",
    /^mailto:winled@winterwarm.pl/,
  );
  await expect(page.locator("#project-result")).toContainText("nie wysyła");
});
test("404 and legacy redirects", async ({ page, request }) => {
  const r = await page.goto("/does-not-exist");
  expect(r?.status()).toBe(404);
  await expect(page.locator("h1")).toContainText("nie istnieje");
  const old = await request.get("/hvac.html", { maxRedirects: 0 });
  expect(old.status()).toBe(308);
  expect(old.headers().location).toBe("/hvac");
});
test("server API fails closed before setup", async ({ request, baseURL }) => {
  const r = await request.post("/api/contact", {
    headers: { Origin: new URL(baseURL!).origin },
    data: {
      needs: ["HVAC"],
      object: "Hala magazynowa",
      stage: "Modernizacja",
      area: "",
      location: "",
      details: "",
      name: "Test Example",
      email: "test@example.com",
      consent: true,
      requestId: "9bbbc284-c762-4a91-9ed4-55dde8bcc919",
    },
  });
  expect(r.status()).toBe(503);
});
test("preview is noindex and security headers exist", async ({ request }) => {
  const r = await request.get("/");
  expect(r.headers()["content-security-policy"]).toContain("object-src 'none'");
  expect(r.headers()["x-content-type-options"]).toBe("nosniff");
  expect(await r.text()).toContain("noindex");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
});

test("catalog shows one honest photograph per area", async ({ page }) => {
  await page.goto("/produkty");
  for (const id of ["xr", "gates", "sky"])
    await expect(page.locator("#" + id + " .catalog-picture")).toBeVisible();
  expect(await page.locator(".catalog-picture:visible").count()).toBe(3);
});

test("demo attribution, accurate photo credit and home caption cleanup", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto("/");
    await expect(page.locator(".caption-ai")).toHaveCount(0);
    await expect(
      page.locator(".footer-bottom a[href='https://winterwarm.pl/']"),
    ).toBeVisible();
    const geometry = await page.evaluate(() => {
      const notice = document
        .querySelector(".demo-notice")!
        .getBoundingClientRect();
      const nav = document.querySelector(".header")!.getBoundingClientRect();
      return (
        notice.bottom <= nav.top + 1 &&
        document.documentElement.scrollWidth <= innerWidth + 1
      );
    });
    expect(geometry).toBeTruthy();
    await page.screenshot({
      path: `qa/demo-live-home-${width}.png`,
      fullPage: true,
    });
  }
});

test("hero title does not overlap its description during entrance animation", async ({
  page,
}) => {
  for (const width of [768, 390]) {
    await page.setViewportSize({ width, height: 960 });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    for (let i = 0; i < 5; i++) {
      const separated = await page.evaluate(() => {
        const title = document
          .querySelector(".hero-title-line:nth-child(2) > span")!
          .getBoundingClientRect();
        const description = document
          .querySelector(".hero-description")!
          .getBoundingClientRect();
        return title.bottom <= description.top + 1;
      });
      expect(separated).toBeTruthy();
      await page.waitForTimeout(100);
    }
  }
});
