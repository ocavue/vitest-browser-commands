import { commands } from 'vitest/browser'

import { IframeTransform } from '../helpers'

import type { PlaywrightMouseMove } from './mouse-move.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseMove: PlaywrightMouseMove
  }
}

export const playwrightMouseMove: PlaywrightMouseMove = (x, y, options) => {
  const transform = new IframeTransform()
  const [processedX, processedY] = transform.fromIframeToPage(x, y)
  return commands.playwrightMouseMove(processedX, processedY, options)
}
