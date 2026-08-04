import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Mouse } from '../types.ts'

export type PlaywrightMouseDblclick = Mouse['dblclick']

export const playwrightMouseDblclick: BrowserCommand<
  Parameters<PlaywrightMouseDblclick>,
  ReturnType<PlaywrightMouseDblclick>
> = (ctx, ...args) => {
  return getPage(ctx).mouse.dblclick(...args)
}
