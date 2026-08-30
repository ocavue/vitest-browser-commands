import type { Plugin } from 'vite'

import { playwrightKeyboardDown } from './commands/keyboard-down.node.ts'
import { playwrightKeyboardInsertText } from './commands/keyboard-insert-text.node.ts'
import { playwrightKeyboardPress } from './commands/keyboard-press.node.ts'
import { playwrightKeyboardType } from './commands/keyboard-type.node.ts'
import { playwrightKeyboardUp } from './commands/keyboard-up.node.ts'
import { playwrightMouseClick } from './commands/mouse-click.node.ts'
import { playwrightMouseDblclick } from './commands/mouse-dblclick.node.ts'
import { playwrightMouseDown } from './commands/mouse-down.node.ts'
import { playwrightMouseMove } from './commands/mouse-move.node.ts'
import { playwrightMouseUp } from './commands/mouse-up.node.ts'
import { playwrightMouseWheel } from './commands/mouse-wheel.node.ts'
import { playwrightRequestGC } from './commands/request-gc.node.ts'

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
              playwrightKeyboardDown,
              playwrightKeyboardInsertText,
              playwrightKeyboardPress,
              playwrightKeyboardType,
              playwrightKeyboardUp,
              playwrightMouseClick,
              playwrightMouseDblclick,
              playwrightMouseDown,
              playwrightMouseMove,
              playwrightMouseUp,
              playwrightMouseWheel,
              playwrightRequestGC,
            },
          },
        },
      }
    },
  }
}
