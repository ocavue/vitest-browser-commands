import { commands } from 'vitest/browser'

import type { PlaywrightKeyboardDown } from './keyboard-down.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightKeyboardDown: PlaywrightKeyboardDown
  }
}

export const playwrightKeyboardDown: PlaywrightKeyboardDown = (key) => {
  return commands.playwrightKeyboardDown(key)
}
