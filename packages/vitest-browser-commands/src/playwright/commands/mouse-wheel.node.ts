import type { BrowserCommand } from 'vitest/node'

import { getPage } from '../context.ts'
import type { Mouse } from '../types.ts'

export type PlaywrightMouseWheel = Mouse['wheel']

export const playwrightMouseWheel: BrowserCommand<
  Parameters<PlaywrightMouseWheel>,
  ReturnType<PlaywrightMouseWheel>
> = (ctx, ...args) => {
  return getPage(ctx).mouse.wheel(...args)
}
