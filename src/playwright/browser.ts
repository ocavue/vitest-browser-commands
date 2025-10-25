import { commands } from 'vitest/browser'

import type { PlaywrightMouseClick } from './commands/mouse-click'
import type { PlaywrightMouseDblclick } from './commands/mouse-dblclick'
import type { PlaywrightMouseDown } from './commands/mouse-down'
import type { PlaywrightMouseMove } from './commands/mouse-move'
import type { PlaywrightMouseUp } from './commands/mouse-up'
import type { PlaywrightMouseWheel } from './commands/mouse-wheel'
import type { Mouse } from './types'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseClick: PlaywrightMouseClick
    playwrightMouseDblclick: PlaywrightMouseDblclick
    playwrightMouseDown: PlaywrightMouseDown
    playwrightMouseMove: PlaywrightMouseMove
    playwrightMouseUp: PlaywrightMouseUp
    playwrightMouseWheel: PlaywrightMouseWheel
  }
}

/**
 * A wrapper around the Playwright [Mouse API](https://playwright.dev/docs/api/class-mouse).
 *
 * In your vitest test code running on the browser, you can use this object to
 * interact with the mouse. It will call the appropriate Playwright API under
 * the hood.
 */
export const mouse: Mouse = {
  click: commands.playwrightMouseClick,
  dblclick: commands.playwrightMouseDblclick,
  down: commands.playwrightMouseDown,
  move: commands.playwrightMouseMove,
  up: commands.playwrightMouseUp,
  wheel: commands.playwrightMouseWheel,
}

export { type Mouse }
