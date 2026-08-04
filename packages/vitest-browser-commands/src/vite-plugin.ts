import type { Plugin } from 'vitest/config'
import type { BrowserCommand } from 'vitest/node'

const myCustomCommand: BrowserCommand<[arg1: string, arg2: string]> = (
  { testPath, provider },
  arg1,
  arg2,
) => {
  if (provider.name === 'playwright') {
    console.log(testPath, arg1, arg2)
    return { someValue: true }
  }

  throw new Error(`provider ${provider.name} is not supported`)
}

export default function browserCommands(): Plugin {
  return {
    name: 'vitest-browser-commands',
    config() {
      return {
        test: {
          browser: {
            commands: {
              myCustomCommand,
            },
          },
        },
      }
    },
  }
}
