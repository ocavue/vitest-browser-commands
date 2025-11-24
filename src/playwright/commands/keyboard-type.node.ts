import type { BrowserCommand } from 'vitest/node'

import type { Keyboard } from '../types'

export type PlaywrightKeyboardType = Keyboard['type']

export const playwrightKeyboardType: BrowserCommand<
  Parameters<PlaywrightKeyboardType>,
  ReturnType<PlaywrightKeyboardType>
> = (ctx, ...args) => {
  return ctx.page.keyboard.type(...args)
}
