# vitest-browser-commands

[![NPM version](https://img.shields.io/npm/v/vitest-browser-commands?color=a1b858&label=)](https://www.npmjs.com/package/vitest-browser-commands)

[Vitest](https://vitest.dev/) is a test runner for JavaScript and TypeScript. [Vitest browser mode](https://vitest.dev/guide/browser/) allows you to run your tests in the browser natively, and it provides an unified API for different underlying end-to-end providers like [Playwright](https://playwright.dev/) and [WebdriverIO](https://webdriver.io/).

However, sometimes you want to invoke the underlying provider's API directly, for example, you want to invoke the Playwright API directly to interact with mouse, which is not supported yet by Vitest browser mode.

This packages provides a set of [custom commands](https://vitest.dev/guide/browser/commands.html) for Vitest browser mode that allows you to invoke the underlying provider's API directly. Currently, it only supports the Playwright provider, but it can be easily extended to support other providers. Welcome contributions!

## Usage

In your vitest config file, you need to import the `playwrightCommands` plugin from `vitest-browser-commands` and configure the browser provider to use the `playwright` provider.

```ts
// vitest.config.ts

import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import { playwrightCommands } from 'vitest-browser-commands'

export default defineConfig({
  plugins: [playwrightCommands()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
})
```

In your test code, you can import various objects from `vitest-browser-commands/playwright` to interact with the browser.
For example, you can import the `mouse` object to interact with the mouse. See the API section below for more details.

```ts
// tests/mouse.test.ts
import { it } from 'vitest'
import { mouse } from 'vitest-browser-commands/playwright'
import { render } from './my-render-function.js'

it('should be able to interact with the mouse', async () => {
  // mount DOM elements
  render()

  // interact with the mouse to trace a 100x100 square
  await mouse.move(0, 0)
  await mouse.down()
  await mouse.move(0, 100)
  await mouse.move(100, 100)
  await mouse.move(100, 0)
  await mouse.move(0, 0)
  await mouse.up()
})
```

## API

_At the moment, only the Mouse API from Playwright is supported, as that's the one I required for testing drag-and-drop functionality. Please let me know if you need support for other APIs, such as Keyboard for WebdriverIO._

### Playwright

#### `mouse`

The `mouse` object is a wrapper around the Playwright [Mouse API](https://playwright.dev/docs/api/class-mouse). It has the identical API as the Playwright Mouse API, but it is wrapped in a way that it can be run in the browser.

```ts
import { mouse } from 'vitest-browser-commands/playwright'
```

## License

MIT
