import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Keyboard } from '../types.ts'

export type PlaywrightKeyboardType = Keyboard['type']

export const playwrightKeyboardType: BrowserCommand<
  Parameters<PlaywrightKeyboardType>,
  ReturnType<PlaywrightKeyboardType>
> = (ctx, ...args) => {
  return getPage(ctx).keyboard.type(...args)
}
