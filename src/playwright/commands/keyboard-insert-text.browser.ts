import { commands } from 'vitest/browser'

import type { PlaywrightKeyboardInsertText } from './keyboard-insert-text.node'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightKeyboardInsertText: PlaywrightKeyboardInsertText
  }
}

export const playwrightKeyboardInsertText: PlaywrightKeyboardInsertText = (
  text,
) => {
  return commands.playwrightKeyboardInsertText(text)
}
