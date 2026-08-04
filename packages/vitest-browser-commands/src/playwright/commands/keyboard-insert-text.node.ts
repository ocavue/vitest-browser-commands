import type { BrowserCommand } from 'vitest/node'

import type { Keyboard } from '../types.ts'

export type PlaywrightKeyboardInsertText = Keyboard['insertText']

export const playwrightKeyboardInsertText: BrowserCommand<
  Parameters<PlaywrightKeyboardInsertText>,
  ReturnType<PlaywrightKeyboardInsertText>
> = (ctx, ...args) => {
  return ctx.page.keyboard.insertText(...args)
}
