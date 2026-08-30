import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Page } from '../types.ts'

export type PlaywrightRequestGC = Page['requestGC']

export const playwrightRequestGC: BrowserCommand<
  Parameters<PlaywrightRequestGC>,
  ReturnType<PlaywrightRequestGC>
> = (ctx, ...args) => {
  return getPage(ctx).requestGC(...args)
}
