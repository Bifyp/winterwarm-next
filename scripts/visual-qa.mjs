import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
const routes = [
  "index",
  "rozwiazania",
  "hvac",
  "drzwi-bramy",
  "oswietlenie",
  "produkty",
  "xr-plus",
  "skyline",
  "bramy-doki",
  "obiekty",
  "o-nas",
  "realizacje",
  "kontakt",
  "projekt",
  "prywatnosc",
  "404",
];
const report = [];
await mkdir("qa", { recursive: true });
for (const width of [1440, 390])
  for (const route of routes) {
    await page.setViewportSize({ width, height: 960 });
    await page.goto(
      (process.env.VISUAL_BASE_URL || "http://127.0.0.1:3100") +
        "/" +
        (route === "index" ? "" : route === "404" ? "missing-page" : route),
    );
    await page.waitForLoadState("networkidle");
    await page.evaluate(async () => {
      for (const img of document.images) img.loading = "eager";
      await document.fonts.ready;
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("in-view"));
    });
    await page.waitForFunction(() =>
      [...document.images].every((i) => i.complete && i.naturalWidth > 0),
    );
    await page.evaluate(async () => {
      await Promise.all(
        [...document.images].map((i) => i.decode().catch(() => {})),
      );
    });
    await page.waitForTimeout(900);
    await page.addStyleTag({
      content:
        "*,*::before,*::after{animation:none!important;transition:none!important}",
    });
    await page.screenshot({ path: `qa/${route}-${width}.png`, fullPage: true });
    const info = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      images: [...document.images].every(
        (i) => i.complete && i.naturalWidth > 0,
      ),
      headings: [...document.querySelectorAll("h1,h2,h3")]
        .filter((e) => {
          const s = getComputedStyle(e);
          return (
            e.getBoundingClientRect().height > parseFloat(s.lineHeight) * 2.2
          );
        })
        .map((e) => e.textContent),
    }));
    report.push({ route, width, ...info });
  }
await page.setViewportSize({ width: 390, height: 960 });
await page.goto("http://127.0.0.1:3100/projekt?obszar=LED");
await page.getByRole("button", { name: "Przygotuj wiadomość" }).click();
await page.waitForTimeout(900);
await page.screenshot({ path: "qa/brief-mobile.png", fullPage: true });
await page.goto("http://127.0.0.1:3100/produkty");
await page.fill("#catalog-search", "nonexistent");
await page.screenshot({ path: "qa/catalog-empty-mobile.png", fullPage: true });
await page.getByRole("button", { name: "Szukaj w serwisie" }).click();
await page.fill("#site-query", "Skyline");
await page.screenshot({ path: "qa/search-mobile.png" });
await page.locator("#site-search").evaluate((d) => d.close());
await page.getByRole("button", { name: "Menu +" }).click();
await page.screenshot({ path: "qa/menu-mobile.png" });
await writeFile("qa/report.json", JSON.stringify(report, null, 2));
console.log(
  JSON.stringify({
    screenshots: 36,
    issues: report.filter((r) => r.overflow || !r.images || r.headings.length),
  }),
);
await browser.close();
