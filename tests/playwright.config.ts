import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    browserName: 'chromium',
    headless: false,
    baseURL: 'http://localhost:3000', // Update with your actual URL
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
