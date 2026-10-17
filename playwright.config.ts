import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  workers: 3,
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://127.0.0.1:3000",
    headless: true,
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH,
      args: ["--no-sandbox"],
    },
  },
  webServer: {
    command: "npm start -- --hostname 127.0.0.1",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 60000,
  },
  reporter: "list",
});
