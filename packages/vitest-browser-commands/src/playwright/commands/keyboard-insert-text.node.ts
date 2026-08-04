import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Keyboard } from '../types.ts'

export type PlaywrightKeyboardInsertText = Keyboard['insertText']

export const playwrightKeyboardInsertText: BrowserCommand<
  Parameters<PlaywrightKeyboardInsertText>,
  ReturnType<PlaywrightKeyboardInsertText>
> = (ctx, ...args) => {
  return getPage(ctx).keyboard.insertText(...args)
}
