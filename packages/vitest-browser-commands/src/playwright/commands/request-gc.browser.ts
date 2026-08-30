import { commands } from 'vitest/browser'

import type { PlaywrightRequestGC } from './request-gc.node.ts'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightRequestGC: PlaywrightRequestGC
  }
}

export const playwrightRequestGC: PlaywrightRequestGC = () => {
  return commands.playwrightRequestGC()
}
