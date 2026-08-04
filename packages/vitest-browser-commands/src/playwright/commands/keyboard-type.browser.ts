import { commands } from 'vitest/browser'

import type { PlaywrightKeyboardType } from './keyboard-type.node.ts'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightKeyboardType: PlaywrightKeyboardType
  }
}

export const playwrightKeyboardType: PlaywrightKeyboardType = (
  text,
  options,
) => {
  return commands.playwrightKeyboardType(text, options)
}
