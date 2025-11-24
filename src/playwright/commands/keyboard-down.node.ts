import type { BrowserCommand } from 'vitest/node'

import type { Keyboard } from '../types'

export type PlaywrightKeyboardDown = Keyboard['down']

export const playwrightKeyboardDown: BrowserCommand<
  Parameters<PlaywrightKeyboardDown>,
  ReturnType<PlaywrightKeyboardDown>
> = (ctx, ...args) => {
  return ctx.page.keyboard.down(...args)
}
