import { commands } from 'vitest/browser'

import { IframeTransform } from '../helpers'

import type { PlaywrightMouseDblclick } from './mouse-dblclick.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseDblclick: PlaywrightMouseDblclick
  }
}

export const playwrightMouseDblclick: PlaywrightMouseDblclick = (x, y, options) => {
  const transform = new IframeTransform()
  const [processedX, processedY] = transform.fromIframeToPage(x, y)
  return commands.playwrightMouseDblclick(processedX, processedY, options)
}
