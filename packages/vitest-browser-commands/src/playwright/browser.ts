import { playwrightKeyboardDown } from './commands/keyboard-down.browser.ts'
import { playwrightKeyboardInsertText } from './commands/keyboard-insert-text.browser.ts'
import { playwrightKeyboardPress } from './commands/keyboard-press.browser.ts'
import { playwrightKeyboardType } from './commands/keyboard-type.browser.ts'
import { playwrightKeyboardUp } from './commands/keyboard-up.browser.ts'
import { playwrightMouseClick } from './commands/mouse-click.browser.ts'
import { playwrightMouseDblclick } from './commands/mouse-dblclick.browser.ts'
import { playwrightMouseDown } from './commands/mouse-down.browser.ts'
import { playwrightMouseMove } from './commands/mouse-move.browser.ts'
import { playwrightMouseUp } from './commands/mouse-up.browser.ts'
import { playwrightMouseWheel } from './commands/mouse-wheel.browser.ts'
import { playwrightPageRequestGC } from './commands/page-request-gc.browser.ts'
import type { Keyboard, Mouse, Page } from './types.ts'

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

/**
 * A wrapper around the Playwright [Keyboard API](https://playwright.dev/docs/api/class-keyboard).
 *
 * In your vitest test code running on the browser, you can use this object to
 * interact with the keyboard. It will call the appropriate Playwright API under
 * the hood.
 */
export const keyboard: Keyboard = {
  down: playwrightKeyboardDown,
  insertText: playwrightKeyboardInsertText,
  press: playwrightKeyboardPress,
  type: playwrightKeyboardType,
  up: playwrightKeyboardUp,
}

/**
 * A wrapper around the Playwright [`page.requestGC()`](https://playwright.dev/docs/api/class-page#page-request-gc) API.
 *
 * In your vitest test code running on the browser, you can call this function
 * to request the browser to perform garbage collection. It will call the
 * appropriate Playwright API under the hood.
 */
export const requestGC: Page['requestGC'] = playwrightPageRequestGC

export { type Mouse, type Keyboard }
