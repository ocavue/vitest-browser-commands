import { commands } from 'vitest/browser'

import type { PlaywrightEmulateMedia } from './emulate-media.node.ts'

declare module 'vitest/browser' {
  interface BrowserCommands {
    playwrightEmulateMedia: PlaywrightEmulateMedia
  }
}

export const playwrightEmulateMedia: PlaywrightEmulateMedia = (options) => {
  return commands.playwrightEmulateMedia(options)
}
