import { Plugin } from "vitest/config";
//#region src/playwright/node.d.ts
/**
 * Returns a vite plugin that adds some useful playwright commands to the vitest browser commands context
 */
declare function playwrightCommands(): Plugin;
//#endregion
export { playwrightCommands };