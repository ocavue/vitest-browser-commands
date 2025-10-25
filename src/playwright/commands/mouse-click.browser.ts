import { commands } from 'vitest/browser'

import { IframeTransform } from '../helpers'

import type { PlaywrightMouseClick } from './mouse-click.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseClick: PlaywrightMouseClick
  }
}

export const playwrightMouseClick: PlaywrightMouseClick = (x, y, options) => {
  const transform = new IframeTransform()
  const [processedX, processedY] = transform.fromIframeToPage(x, y)
  return commands.playwrightMouseClick(processedX, processedY, options)
}
