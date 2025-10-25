import type { BrowserCommand } from 'vitest/node'

import type { Mouse } from '../types'

export type PlaywrightMouseDblclick = Mouse['dblclick']

export const playwrightMouseDblclick: BrowserCommand<
  Parameters<PlaywrightMouseDblclick>,
  ReturnType<PlaywrightMouseDblclick>
> = (ctx, ...args) => {
  return ctx.page.mouse.dblclick(...args)
}
