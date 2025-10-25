import type { BrowserCommand } from 'vitest/node'

import type { Mouse } from '../types'

export type PlaywrightMouseClick = Mouse['click']

export const playwrightMouseClick: BrowserCommand<
  Parameters<PlaywrightMouseClick>,
  ReturnType<PlaywrightMouseClick>
> = (ctx, ...args) => {
  return ctx.page.mouse.click(...args)
}
