import { commands } from 'vitest/browser'

import { processPlaywrightPosition } from '../helpers'

import type { PlaywrightMouseClick } from './mouse-click.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseClick: PlaywrightMouseClick
  }
}

export const playwrightMouseClick: PlaywrightMouseClick = (x, y, options) => {
  const [processedX, processedY] = processPlaywrightPosition(x, y)
  return commands.playwrightMouseClick(processedX, processedY, options)
}
