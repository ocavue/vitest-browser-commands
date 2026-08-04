import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Mouse } from '../types.ts'

export type PlaywrightMouseMove = Mouse['move']

export const playwrightMouseMove: BrowserCommand<
  Parameters<PlaywrightMouseMove>,
  ReturnType<PlaywrightMouseMove>
> = (ctx, ...args) => {
  return getPage(ctx).mouse.move(...args)
}
