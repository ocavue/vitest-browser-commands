import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Keyboard } from '../types.ts'

export type PlaywrightKeyboardUp = Keyboard['up']

export const playwrightKeyboardUp: BrowserCommand<
  Parameters<PlaywrightKeyboardUp>,
  ReturnType<PlaywrightKeyboardUp>
> = (ctx, ...args) => {
  return getPage(ctx).keyboard.up(...args)
}
