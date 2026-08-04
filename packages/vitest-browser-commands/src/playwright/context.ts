import type { BrowserCommandContext } from 'vitest/node'

import type { Page } from './types.ts'

// The `page` property is added to `BrowserCommandContext` by the playwright
// provider's module augmentation. We cast instead of importing
// `@vitest/browser-playwright`, so that the emitted d.ts files don't reference
// a specific vitest major version.
export function getPage(context: BrowserCommandContext): Page {
  return (context as BrowserCommandContext & { page: Page }).page
}
