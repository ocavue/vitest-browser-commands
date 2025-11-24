import type { BrowserCommand } from 'vitest/node'

import type { Keyboard } from '../types'

export type PlaywrightKeyboardUp = Keyboard['up']

export const playwrightKeyboardUp: BrowserCommand<
  Parameters<PlaywrightKeyboardUp>,
  ReturnType<PlaywrightKeyboardUp>
> = (ctx, ...args) => {
  return ctx.page.keyboard.up(...args)
}
