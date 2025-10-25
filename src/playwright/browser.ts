import { commands } from 'vitest/browser'

import type { PlaywrightMouseUp } from './commands/mouse-up'
import type { Mouse } from './types'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseUp: PlaywrightMouseUp
  }
}

/**
 * A wrapper around the Playwright [Mouse API](https://playwright.dev/docs/api/class-mouse).
 *
 * In your vitest test code running on the browser, you can use this object to
 * interact with the mouse. It will call the appropriate Playwright API under
 * the hood.
 */
export const mouse: Partial<Mouse> = {
  up: commands.playwrightMouseUp,
}

export { type Mouse }
