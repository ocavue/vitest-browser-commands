import { PlaywrightBrowserProvider } from "@vitest/browser-playwright";

//#region src/playwright/types.d.ts
type Page = ReturnType<PlaywrightBrowserProvider['getCommandsContext']>['page'];
type Mouse = Page['mouse'];
type Keyboard = Page['keyboard'];
//#endregion
//#region src/playwright/browser.d.ts
/**
 * A wrapper around the Playwright [Mouse API](https://playwright.dev/docs/api/class-mouse).
 *
 * In your vitest test code running on the browser, you can use this object to
 * interact with the mouse. It will call the appropriate Playwright API under
 * the hood.
 */
declare const mouse: Mouse;
/**
 * A wrapper around the Playwright [Keyboard API](https://playwright.dev/docs/api/class-keyboard).
 *
 * In your vitest test code running on the browser, you can use this object to
 * interact with the keyboard. It will call the appropriate Playwright API under
 * the hood.
 */
declare const keyboard: Keyboard;
//#endregion
export { type Keyboard, type Mouse, keyboard, mouse };