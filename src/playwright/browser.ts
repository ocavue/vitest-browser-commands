import { playwrightMouseClick } from './commands/mouse-click.browser'
import { playwrightMouseDblclick } from './commands/mouse-dblclick.browser'
import { playwrightMouseDown } from './commands/mouse-down.browser'
import { playwrightMouseMove } from './commands/mouse-move.browser'
import { playwrightMouseUp } from './commands/mouse-up.browser'
import { playwrightMouseWheel } from './commands/mouse-wheel.browser'
import type { Mouse } from './types'

/**
 * A wrapper around the Playwright [Mouse API](https://playwright.dev/docs/api/class-mouse).
 *
 * In your vitest test code running on the browser, you can use this object to
 * interact with the mouse. It will call the appropriate Playwright API under
 * the hood.
 */
export const mouse: Mouse = {
  click: playwrightMouseClick,
  dblclick: playwrightMouseDblclick,
  down: playwrightMouseDown,
  move: playwrightMouseMove,
  up: playwrightMouseUp,
  wheel: playwrightMouseWheel,
}

export { type Mouse }
