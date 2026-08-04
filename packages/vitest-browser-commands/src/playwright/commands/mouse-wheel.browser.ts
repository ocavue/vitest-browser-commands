import { commands } from 'vitest/browser'

import type { PlaywrightMouseWheel } from './mouse-wheel.node.ts'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightMouseWheel: PlaywrightMouseWheel
  }
}

export const playwrightMouseWheel: PlaywrightMouseWheel = (deltaX, deltaY) => {
  return commands.playwrightMouseWheel(deltaX, deltaY)
}
