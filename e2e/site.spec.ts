import { test, expect, type Page } from "@playwright/test";

async function openDemo(page: Page, path: string) {
  const response = await page.goto(path);
  await expect(page.locator("#demo-gate")).toBeVisible();
  await page
    .getByRole("button", { name: "Rozumiem — przejdź do demonstracji" })
    .click();
  await expect(page.locator("#demo-gate")).not.toBeVisible();
  return response;
}
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
      const r = await openDemo(page, path);
      await page.waitForLoadState("networkidle");
      expect(r?.status()).toBe(200);
      expect(await page.locator("h1").count()).toBe(1);
      await expect(page.locator("header .demo-notice")).toBeVisible();
      await expect(page.locator("header .demo-notice")).toContainText(
        "Bohdan Mykytenko i Marian Poliakov",
      );
      await expect(page.locator(".footer-bottom")).toContainText(
        "Ilustracje wygenerowane przy użyciu AI",
      );
      await expect(page.locator(".footer-bottom")).toContainText(
        "Nie przedstawiają rzeczywistych produktów",
      );
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
  await openDemo(page, "/produkty?obszar=LED");
  await expect(page.locator(".catalog-item")).toHaveCount(7);
  await page.fill("#catalog-search", "Skyline");
  await expect(page.locator(".catalog-item")).toHaveCount(2);
  await page.fill("#catalog-search", "not-a-product");
  await expect(page.locator("#catalog-empty")).toBeVisible();
  await page.getByRole("button", { name: "Pokaż wszystko" }).click();
  await expect(page.locator(".catalog-item")).toHaveCount(22);
});
test("solution tabs support keyboard", async ({ page }) => {
  await openDemo(page, "/");
  await page.locator("#tab-climate").focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#tab-access")).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(page.locator("#solution-title")).toContainText("Swobodny ruch.");
});
test("search dialog opens and escapes to trigger", async ({ page }) => {
  await openDemo(page, "/");
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
  await openDemo(page, "/");
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
  await openDemo(page, "/projekt?obszar=LED");
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
  const r = await openDemo(page, "/does-not-exist");
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

test("catalog shows one representative AI illustration per area", async ({
  page,
}) => {
  await openDemo(page, "/produkty");
  for (const id of ["xr", "gates", "sky"])
    await expect(page.locator("#" + id + " .catalog-picture")).toBeVisible();
  expect(await page.locator(".catalog-picture:visible").count()).toBe(3);
});

test("demo attribution and clear AI illustration disclosure", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 960 });
    await openDemo(page, "/");
    await expect(page.locator(".caption-ai")).toHaveCount(0);
    await expect(page.locator(".footer-bottom")).toContainText(
      "Ilustracje wygenerowane przy użyciu AI",
    );
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
    await openDemo(page, "/");
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

test("demo warning is shown again on every route visit and reload", async ({
  page,
}) => {
  for (const path of ["/", "/produkty", "/projekt", "/does-not-exist"]) {
    await page.goto(path);
    const gate = page.getByRole("dialog", {
      name: "To jest wersja demonstracyjna.",
    });
    await expect(gate).toBeVisible();
    await expect(gate).toContainText("Bohdan Mykytenko");
    await expect(gate).toContainText("Marian Poliakov");
    await expect(gate).toContainText("Nie wpisuj prawdziwych danych osobowych");
    await page
      .getByRole("button", { name: "Rozumiem — przejdź do demonstracji" })
      .click();
    await expect(gate).not.toBeVisible();
    await page.reload();
    await expect(gate).toBeVisible();
    await page
      .getByRole("button", { name: "Rozumiem — przejdź do demonstracji" })
      .click();
  }
});

test("demo warning requires acknowledgement and restores keyboard access", async ({
  page,
}) => {
  await page.goto("/");
  const gate = page.locator("#demo-gate");
  await expect(gate).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(gate).toBeVisible();
  expect(await gate.evaluate((el) => el.matches(":modal"))).toBe(true);
  await page.keyboard.press("Tab");
  expect(await gate.evaluate((el) => el.contains(document.activeElement))).toBe(
    true,
  );
  await page
    .getByRole("button", { name: "Rozumiem — przejdź do demonstracji" })
    .click();
  await expect(gate).not.toBeVisible();
  await expect(page.locator("main")).toBeFocused();
  expect(
    await page.evaluate(() => document.documentElement.style.overflow),
  ).toBe("");
  await page.getByRole("button", { name: "Szukaj w serwisie" }).click();
  await expect(page.locator("#site-search")).toBeVisible();
});

test("demo warning is readable and scrollable on every screen size", async ({
  page,
}) => {
  for (const [width, height] of [
    [1440, 960],
    [768, 960],
    [390, 960],
    [320, 640],
  ]) {
    await page.setViewportSize({ width, height });
    await page.goto("/");
    const gate = page.locator("#demo-gate");
    await expect(gate).toBeVisible();
    await expect(page.locator("#demo-gate-title")).toBeInViewport();
    expect(
      await page
        .locator("#demo-gate-title")
        .evaluate((el) => getComputedStyle(el).outlineStyle),
    ).toBe("none");
    await page.screenshot({ path: `qa/demo-gate-${width}.png` });
    expect(
      await gate.evaluate((el) => el.scrollWidth <= el.clientWidth + 1),
    ).toBe(true);
    const button = page.getByRole("button", {
      name: "Rozumiem — przejdź do demonstracji",
    });
    await button.scrollIntoViewIfNeeded();
    await page.screenshot({ path: `qa/demo-gate-${width}-action.png` });
    await button.click();
    await expect(gate).not.toBeVisible();
  }
});

test("visible AI illustrations have clickable links to their actual files", async ({
  page,
}) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 960 });
    for (const [path, src, href] of [
      ["/", "/assets/ai-hero-v1.webp", "/assets/ai-hero-v1.webp"],
      ["/hvac", "/assets/ai-workshop-v1.webp", "/assets/ai-workshop-v1.webp"],
      ["/produkty", "/assets/ai-heater-v1.webp", "/assets/ai-heater-v1.webp"],
      [
        "/realizacje",
        "/assets/ai-warehouse-v1.webp",
        "/assets/ai-warehouse-v1.webp",
      ],
    ]) {
      await openDemo(page, path);
      await page.emulateMedia({ reducedMotion: "reduce" });
      const image = page.locator(`main img[src="${src}"]`).first();
      await image.scrollIntoViewIfNeeded();
      const link = page
        .locator(`.photo-source-link[data-photo-src="${src}"]`)
        .first();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", href);
      await expect(link).toHaveAttribute("target", "_blank");
      expect(
        await link.evaluate((el) => {
          const box = el.getBoundingClientRect();
          return (
            document.elementFromPoint(
              box.x + box.width / 2,
              box.y + box.height / 2,
            ) === el
          );
        }),
      ).toBe(true);
      expect(await page.locator("a a").count()).toBe(0);
      await page.screenshot({
        path: `qa/photo-sources-${path.replaceAll("/", "") || "home"}-${width}.png`,
      });
    }
  }
});

test("photo source links follow changing solution photographs and hide behind notices", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("#demo-gate")).toBeVisible();
  await expect(page.locator(".photo-source-link")).toHaveCount(0);
  await page
    .getByRole("button", { name: "Rozumiem — przejdź do demonstracji" })
    .click();
  await page.locator("#tab-access").click();
  await page.locator("#solution-photo").scrollIntoViewIfNeeded();
  await expect(
    page
      .locator('.photo-source-link[data-photo-src="/assets/ai-doors-v1.webp"]')
      .first(),
  ).toHaveAttribute("href", "/assets/ai-doors-v1.webp");
  await page.locator("#tab-light").click();
  await page.locator("#solution-photo").scrollIntoViewIfNeeded();
  await expect(
    page
      .locator(
        '.photo-source-link[data-photo-src="/assets/ai-lighting-v1.webp"]',
      )
      .first(),
  ).toHaveAttribute("href", "/assets/ai-lighting-v1.webp");
});
