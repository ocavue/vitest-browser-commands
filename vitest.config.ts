
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

import { playwrightCommands } from 'vitest-browser-commands'

export default defineConfig({
  plugins: [playwrightCommands()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
})
