import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Keyboard } from '../types.ts'

export type PlaywrightKeyboardPress = Keyboard['press']

export const playwrightKeyboardPress: BrowserCommand<
  Parameters<PlaywrightKeyboardPress>,
  ReturnType<PlaywrightKeyboardPress>
> = (ctx, ...args) => {
  return getPage(ctx).keyboard.press(...args)
}
