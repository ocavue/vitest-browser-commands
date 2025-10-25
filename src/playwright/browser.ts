import { playwrightMouseClick } from './commands/mouse-click.browser'
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
  dblclick: {} as any,
  down: {} as any,
  move: {} as any,
  up: {} as any,
  wheel: {} as any,
}

export { type Mouse }
