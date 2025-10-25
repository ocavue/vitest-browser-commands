import { commands } from 'vitest/browser'

import type { PlaywrightMouseUp } from './mouse-up.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseUp: PlaywrightMouseUp
  }
}

export const playwrightMouseUp: PlaywrightMouseUp = (options) => {
  return commands.playwrightMouseUp(options)
}
