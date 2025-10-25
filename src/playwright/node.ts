import type { Plugin } from 'vitest/config'

import { playwrightMouseClick } from './commands/mouse-click'
import { playwrightMouseDblclick } from './commands/mouse-dblclick'
import { playwrightMouseDown } from './commands/mouse-down'
import { playwrightMouseMove } from './commands/mouse-move'
import { playwrightMouseUp } from './commands/mouse-up'
import { playwrightMouseWheel } from './commands/mouse-wheel'

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
              playwrightMouseClick,
              playwrightMouseDblclick,
              playwrightMouseDown,
              playwrightMouseMove,
              playwrightMouseUp,
              playwrightMouseWheel,
            },
          },
        },
      }
    },
  }
}
