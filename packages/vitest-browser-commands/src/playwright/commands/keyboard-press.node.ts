import type { BrowserCommand } from 'vitest/node'

import type { Keyboard } from '../types'

export type PlaywrightKeyboardPress = Keyboard['press']

export const playwrightKeyboardPress: BrowserCommand<
  Parameters<PlaywrightKeyboardPress>,
  ReturnType<PlaywrightKeyboardPress>
> = (ctx, ...args) => {
  return ctx.page.keyboard.press(...args)
}
