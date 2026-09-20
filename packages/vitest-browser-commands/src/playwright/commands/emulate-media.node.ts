import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Page } from '../types.ts'

export type PlaywrightEmulateMedia = Page['emulateMedia']

export const playwrightEmulateMedia: BrowserCommand<
  Parameters<PlaywrightEmulateMedia>,
  ReturnType<PlaywrightEmulateMedia>
> = (ctx, ...args) => {
  return getPage(ctx).emulateMedia(...args)
}
