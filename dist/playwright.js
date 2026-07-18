import { commands } from "vitest/browser";
//#region src/playwright/commands/keyboard-down.browser.ts
const playwrightKeyboardDown = (key) => {
	return commands.playwrightKeyboardDown(key);
};
//#endregion
//#region src/playwright/commands/keyboard-insert-text.browser.ts
const playwrightKeyboardInsertText = (text) => {
	return commands.playwrightKeyboardInsertText(text);
};
//#endregion
//#region src/playwright/commands/keyboard-press.browser.ts
const playwrightKeyboardPress = (key, options) => {
	return commands.playwrightKeyboardPress(key, options);
};
//#endregion
//#region src/playwright/commands/keyboard-type.browser.ts
const playwrightKeyboardType = (text, options) => {
	return commands.playwrightKeyboardType(text, options);
};
//#endregion
//#region src/playwright/commands/keyboard-up.browser.ts
const playwrightKeyboardUp = (key) => {
	return commands.playwrightKeyboardUp(key);
};
//#endregion
//#region src/playwright/helpers.ts
/**
* A helper class to transform positions between the page and the iframe.
*/
var IframeTransform = class {
	constructor() {
		const iframe = window.parent.document.querySelector(`iframe[data-vitest]`);
		if (!iframe) throw new Error(`Cannot find iframe element. This is a bug in vitest-browser-commands. Please, open a new issue with reproduction.`);
		const testerUi = iframe.parentElement;
		if (!testerUi) throw new Error(`Cannot find Tester element. This is a bug in vitest-browser-commands. Please, open a new issue with reproduction.`);
		const scaleAttribute = testerUi.getAttribute("data-scale");
		const scale = Number(scaleAttribute);
		if (Number.isNaN(scale)) throw new TypeError(`Cannot parse scale value from Tester element (${scaleAttribute}). This is a bug in vitest-browser-commands. Please, open a new issue with reproduction.`);
		const rect = iframe.getBoundingClientRect();
		this.iframeX = rect.x;
		this.iframeY = rect.y;
		this.iframeScale = scale;
	}
	/**
	* Given a position on the page, return the position on the iframe.
	*/
	fromPageToIframe(x, y) {
		return [(x - this.iframeX) / this.iframeScale, (y - this.iframeY) / this.iframeScale];
	}
	/**
	* Given a position on the iframe, return the position on the page.
	*/
	fromIframeToPage(x, y) {
		return [x * this.iframeScale + this.iframeX, y * this.iframeScale + this.iframeY];
	}
};
//#endregion
//#region src/playwright/commands/mouse-click.browser.ts
const playwrightMouseClick = (x, y, options) => {
	const [processedX, processedY] = new IframeTransform().fromIframeToPage(x, y);
	return commands.playwrightMouseClick(processedX, processedY, options);
};
//#endregion
//#region src/playwright/commands/mouse-dblclick.browser.ts
const playwrightMouseDblclick = (x, y, options) => {
	const [processedX, processedY] = new IframeTransform().fromIframeToPage(x, y);
	return commands.playwrightMouseDblclick(processedX, processedY, options);
};
//#endregion
//#region src/playwright/commands/mouse-down.browser.ts
const playwrightMouseDown = (options) => {
	return commands.playwrightMouseDown(options);
};
//#endregion
//#region src/playwright/commands/mouse-move.browser.ts
const playwrightMouseMove = (x, y, options) => {
	const [processedX, processedY] = new IframeTransform().fromIframeToPage(x, y);
	return commands.playwrightMouseMove(processedX, processedY, options);
};
//#endregion
//#region src/playwright/commands/mouse-up.browser.ts
const playwrightMouseUp = (options) => {
	return commands.playwrightMouseUp(options);
};
//#endregion
//#region src/playwright/commands/mouse-wheel.browser.ts
const playwrightMouseWheel = (deltaX, deltaY) => {
	return commands.playwrightMouseWheel(deltaX, deltaY);
};
//#endregion
//#region src/playwright/browser.ts
/**
* A wrapper around the Playwright [Mouse API](https://playwright.dev/docs/api/class-mouse).
*
* In your vitest test code running on the browser, you can use this object to
* interact with the mouse. It will call the appropriate Playwright API under
* the hood.
*/
const mouse = {
	click: playwrightMouseClick,
	dblclick: playwrightMouseDblclick,
	down: playwrightMouseDown,
	move: playwrightMouseMove,
	up: playwrightMouseUp,
	wheel: playwrightMouseWheel
};
/**
* A wrapper around the Playwright [Keyboard API](https://playwright.dev/docs/api/class-keyboard).
*
* In your vitest test code running on the browser, you can use this object to
* interact with the keyboard. It will call the appropriate Playwright API under
* the hood.
*/
const keyboard = {
	down: playwrightKeyboardDown,
	insertText: playwrightKeyboardInsertText,
	press: playwrightKeyboardPress,
	type: playwrightKeyboardType,
	up: playwrightKeyboardUp
};
//#endregion
export { keyboard, mouse };
