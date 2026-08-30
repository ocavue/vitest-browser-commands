import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Page } from '../types.ts'

export type PlaywrightPageRequestGC = Page['requestGC']

export const playwrightPageRequestGC: BrowserCommand<
  Parameters<PlaywrightPageRequestGC>,
  ReturnType<PlaywrightPageRequestGC>
> = (ctx, ...args) => {
  return getPage(ctx).requestGC(...args)
}
