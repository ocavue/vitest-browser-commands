import type { Plugin } from 'vitest/config'

import { playwrightMouseDown } from './commands/mouse-down'
import { playwrightMouseUp } from './commands/mouse-up'

/**
 * Returns a vite plugin that adds some useful playwright commands to the vitest browser commands context
 */
export function playwrightCommands(): Plugin {
  return {
    name: 'vitest-browser-commands:playwright',
    config() {
      return {
        test: {
          browser: {
            commands: {
              playwrightMouseDown,
              playwrightMouseUp,
            },
          },
        },
      }
    },
  }
}
