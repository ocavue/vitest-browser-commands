import { commands } from 'vitest/browser'

import type { PlaywrightMouseDown } from './commands/mouse-down'
import type { PlaywrightMouseUp } from './commands/mouse-up'
import type { Mouse } from './types'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseDown: PlaywrightMouseDown
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
  down: commands.playwrightMouseDown,
  up: commands.playwrightMouseUp,
}

export { type Mouse }
