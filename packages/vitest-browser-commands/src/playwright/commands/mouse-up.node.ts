import type { BrowserCommand } from 'vitest/node'

import type { Mouse } from '../types'

export type PlaywrightMouseUp = Mouse['up']

export const playwrightMouseUp: BrowserCommand<
  Parameters<PlaywrightMouseUp>,
  ReturnType<PlaywrightMouseUp>
> = (ctx, ...args) => {
  return ctx.page.mouse.up(...args)
}
