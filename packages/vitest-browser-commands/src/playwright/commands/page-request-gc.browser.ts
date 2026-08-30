import { commands } from 'vitest/browser'

import type { PlaywrightPageRequestGC } from './page-request-gc.node.ts'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightPageRequestGC: PlaywrightPageRequestGC
  }
}

export const playwrightPageRequestGC: PlaywrightPageRequestGC = () => {
  return commands.playwrightPageRequestGC()
}
