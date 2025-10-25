import type { PlaywrightBrowserProvider } from '@vitest/browser-playwright'

export type Page = ReturnType<
  PlaywrightBrowserProvider['getCommandsContext']
>['page']

export type Mouse = Page['mouse']
