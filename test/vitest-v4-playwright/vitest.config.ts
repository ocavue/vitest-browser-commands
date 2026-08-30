import { playwright } from '@vitest/browser-playwright'
import { playwrightCommands } from 'vitest-browser-commands'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [playwrightCommands()],
  test: {
    retry: process.env.CI ? 3 : 0,
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
        { browser: 'firefox' },
        { browser: 'webkit' },
      ],
    },
  },
})
