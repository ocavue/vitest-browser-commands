import { commands } from 'vitest/browser'

import type { PlaywrightKeyboardUp } from './keyboard-up.node.ts'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightKeyboardUp: PlaywrightKeyboardUp
  }
}

export const playwrightKeyboardUp: PlaywrightKeyboardUp = (key) => {
  return commands.playwrightKeyboardUp(key)
}
