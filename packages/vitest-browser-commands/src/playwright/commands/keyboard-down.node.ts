import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Keyboard } from '../types.ts'

export type PlaywrightKeyboardDown = Keyboard['down']

export const playwrightKeyboardDown: BrowserCommand<
  Parameters<PlaywrightKeyboardDown>,
  ReturnType<PlaywrightKeyboardDown>
> = (ctx, ...args) => {
  return getPage(ctx).keyboard.down(...args)
}
