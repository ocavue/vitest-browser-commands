import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    playwright: 'src/playwright/browser.ts',
  },
  format: ['esm'],
  dts: { build: true },
  fixedExtension: false,
})
