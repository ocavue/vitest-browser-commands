import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Mouse } from '../types.ts'

export type PlaywrightMouseDown = Mouse['down']

export const playwrightMouseDown: BrowserCommand<
  Parameters<PlaywrightMouseDown>,
  ReturnType<PlaywrightMouseDown>
> = (ctx, ...args) => {
  return getPage(ctx).mouse.down(...args)
}
