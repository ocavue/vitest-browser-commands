import type { BrowserCommand } from 'vitest/node'

import type { Mouse } from '../types'

export type PlaywrightMouseMove = Mouse['move']

export const playwrightMouseMove: BrowserCommand<
  Parameters<PlaywrightMouseMove>,
  ReturnType<PlaywrightMouseMove>
> = (ctx, ...args) => {
  return ctx.page.mouse.move(...args)
}
