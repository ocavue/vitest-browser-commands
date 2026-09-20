import { afterEach, describe, expect, it } from 'vitest'
import { emulateMedia } from 'vitest-browser-commands/playwright'

describe('emulateMedia', () => {
  afterEach(async () => {
    await emulateMedia({ colorScheme: null, reducedMotion: null, media: null })
  })

  it('should emulate `prefers-color-scheme`', async () => {
    await emulateMedia({ colorScheme: 'dark' })
    await expect
      .poll(() => matchMedia('(prefers-color-scheme: dark)').matches)
      .toBe(true)
    await expect
      .poll(() => matchMedia('(prefers-color-scheme: light)').matches)
      .toBe(false)

    await emulateMedia({ colorScheme: 'light' })
    await expect
      .poll(() => matchMedia('(prefers-color-scheme: dark)').matches)
      .toBe(false)
    await expect
      .poll(() => matchMedia('(prefers-color-scheme: light)').matches)
      .toBe(true)
  })

  it('should emulate `prefers-reduced-motion`', async () => {
    await emulateMedia({ reducedMotion: 'reduce' })
    await expect
      .poll(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
      .toBe(true)

    await emulateMedia({ reducedMotion: 'no-preference' })
    await expect
      .poll(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
      .toBe(false)
  })

  it('should emulate the media type', async () => {
    await emulateMedia({ media: 'print' })
    await expect.poll(() => matchMedia('print').matches).toBe(true)
    await expect.poll(() => matchMedia('screen').matches).toBe(false)

    await emulateMedia({ media: null })
    await expect.poll(() => matchMedia('print').matches).toBe(false)
    await expect.poll(() => matchMedia('screen').matches).toBe(true)
  })
})
