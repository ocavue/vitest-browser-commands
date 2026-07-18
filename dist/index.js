//#region src/playwright/commands/keyboard-down.node.ts
const playwrightKeyboardDown = (ctx, ...args) => {
	return ctx.page.keyboard.down(...args);
};
//#endregion
//#region src/playwright/commands/keyboard-insert-text.node.ts
const playwrightKeyboardInsertText = (ctx, ...args) => {
	return ctx.page.keyboard.insertText(...args);
};
//#endregion
//#region src/playwright/commands/keyboard-press.node.ts
const playwrightKeyboardPress = (ctx, ...args) => {
	return ctx.page.keyboard.press(...args);
};
//#endregion
//#region src/playwright/commands/keyboard-type.node.ts
const playwrightKeyboardType = (ctx, ...args) => {
	return ctx.page.keyboard.type(...args);
};
//#endregion
//#region src/playwright/commands/keyboard-up.node.ts
const playwrightKeyboardUp = (ctx, ...args) => {
	return ctx.page.keyboard.up(...args);
};
//#endregion
//#region src/playwright/commands/mouse-click.node.ts
const playwrightMouseClick = (ctx, ...args) => {
	return ctx.page.mouse.click(...args);
};
//#endregion
//#region src/playwright/commands/mouse-dblclick.node.ts
const playwrightMouseDblclick = (ctx, ...args) => {
	return ctx.page.mouse.dblclick(...args);
};
//#endregion
//#region src/playwright/commands/mouse-down.node.ts
const playwrightMouseDown = (ctx, ...args) => {
	return ctx.page.mouse.down(...args);
};
//#endregion
//#region src/playwright/commands/mouse-move.node.ts
const playwrightMouseMove = (ctx, ...args) => {
	return ctx.page.mouse.move(...args);
};
//#endregion
//#region src/playwright/commands/mouse-up.node.ts
const playwrightMouseUp = (ctx, ...args) => {
	return ctx.page.mouse.up(...args);
};
//#endregion
//#region src/playwright/commands/mouse-wheel.node.ts
const playwrightMouseWheel = (ctx, ...args) => {
	return ctx.page.mouse.wheel(...args);
};
//#endregion
//#region src/playwright/node.ts
/**
* Returns a vite plugin that adds some useful playwright commands to the vitest browser commands context
*/
function playwrightCommands() {
	return {
		name: "vitest-browser-commands:playwright",
		config() {
			return { test: { browser: { commands: {
				playwrightKeyboardDown,
				playwrightKeyboardInsertText,
				playwrightKeyboardPress,
				playwrightKeyboardType,
				playwrightKeyboardUp,
				playwrightMouseClick,
				playwrightMouseDblclick,
				playwrightMouseDown,
				playwrightMouseMove,
				playwrightMouseUp,
				playwrightMouseWheel
			} } } };
		}
	};
}
//#endregion
export { playwrightCommands };
