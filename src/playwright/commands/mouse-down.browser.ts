import { commands } from 'vitest/browser'

import type { PlaywrightMouseDown } from './mouse-down.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseDown: PlaywrightMouseDown
  }
}

export const playwrightMouseDown: PlaywrightMouseDown = (options) => {
  return commands.playwrightMouseDown(options)
}
