import type { Plugin } from 'vitest/config'

import { playwrightMouseClick } from './commands/mouse-click.node'
import { playwrightMouseDblclick } from './commands/mouse-dblclick.node'
import { playwrightMouseDown } from './commands/mouse-down.node'
import { playwrightMouseMove } from './commands/mouse-move.node'
import { playwrightMouseUp } from './commands/mouse-up.node'
import { playwrightMouseWheel } from './commands/mouse-wheel.node'

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
