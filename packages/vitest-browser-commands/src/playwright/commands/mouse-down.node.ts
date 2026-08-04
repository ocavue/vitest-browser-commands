import type { BrowserCommand } from 'vitest/node'

import type { Mouse } from '../types'

export type PlaywrightMouseDown = Mouse['down']

export const playwrightMouseDown: BrowserCommand<
  Parameters<PlaywrightMouseDown>,
  ReturnType<PlaywrightMouseDown>
> = (ctx, ...args) => {
  return ctx.page.mouse.down(...args)
}
