import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: './e2e/tests',
  timeout: 30 * 1000, // 30 sec timeout
  expect: { timeout: 5000 }, // Assertion timeout
  reporter: 'html', // Generates HTML reports
  use: {
    baseURL: 'http://localhost:3000', // Next.js dev server
    headless: true, // Set false to see UI during test
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: true,
  },
});
