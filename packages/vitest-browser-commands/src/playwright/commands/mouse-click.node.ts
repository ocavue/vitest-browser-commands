import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Mouse } from '../types.ts'

export type PlaywrightMouseClick = Mouse['click']

export const playwrightMouseClick: BrowserCommand<
  Parameters<PlaywrightMouseClick>,
  ReturnType<PlaywrightMouseClick>
> = (ctx, ...args) => {
  return getPage(ctx).mouse.click(...args)
}
