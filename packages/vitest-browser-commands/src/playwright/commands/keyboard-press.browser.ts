import { commands } from 'vitest/browser'

import type { PlaywrightKeyboardPress } from './keyboard-press.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightKeyboardPress: PlaywrightKeyboardPress
  }
}

export const playwrightKeyboardPress: PlaywrightKeyboardPress = (
  key,
  options,
) => {
  return commands.playwrightKeyboardPress(key, options)
}
