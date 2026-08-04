import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Mouse } from '../types.ts'

export type PlaywrightMouseUp = Mouse['up']

export const playwrightMouseUp: BrowserCommand<
  Parameters<PlaywrightMouseUp>,
  ReturnType<PlaywrightMouseUp>
> = (ctx, ...args) => {
  return getPage(ctx).mouse.up(...args)
}
