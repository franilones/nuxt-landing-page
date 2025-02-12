import { defineConfig } from '@playwright/test'

export default defineConfig({
  retries: 1,
  testDir: './test/playwright',
  reporter: 'html',
  workers: '50%',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
  webServer: {
    command: 'pnpm start',
    url: 'http://localhost:3000',
    stdout: 'ignore',
    stderr: 'pipe',
  },
})
