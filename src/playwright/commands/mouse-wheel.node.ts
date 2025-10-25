import type { BrowserCommand } from 'vitest/node'

import type { Mouse } from '../types'

export type PlaywrightMouseWheel = Mouse['wheel']

export const playwrightMouseWheel: BrowserCommand<
  Parameters<PlaywrightMouseWheel>,
  ReturnType<PlaywrightMouseWheel>
> = (ctx, ...args) => {
  return ctx.page.mouse.wheel(...args)
}
