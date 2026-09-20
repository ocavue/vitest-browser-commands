import { afterEach, describe, expect, it } from 'vitest'
import { emulateMedia } from 'vitest-browser-commands/playwright'

describe('emulateMedia', () => {
  afterEach(async () => {
    await emulateMedia({ colorScheme: null, reducedMotion: null, media: null })
  })

  it('should emulate `prefers-color-scheme`', async () => {
    await emulateMedia({ colorScheme: 'dark' })
    expect(matchMedia('(prefers-color-scheme: dark)').matches).toBe(true)
    expect(matchMedia('(prefers-color-scheme: light)').matches).toBe(false)

    await emulateMedia({ colorScheme: 'light' })
    expect(matchMedia('(prefers-color-scheme: dark)').matches).toBe(false)
    expect(matchMedia('(prefers-color-scheme: light)').matches).toBe(true)
  })

  it('should emulate `prefers-reduced-motion`', async () => {
    await emulateMedia({ reducedMotion: 'reduce' })
    expect(matchMedia('(prefers-reduced-motion: reduce)').matches).toBe(true)

    await emulateMedia({ reducedMotion: 'no-preference' })
    expect(matchMedia('(prefers-reduced-motion: reduce)').matches).toBe(false)
  })

  it('should emulate the media type', async () => {
    await emulateMedia({ media: 'print' })
    expect(matchMedia('print').matches).toBe(true)
    expect(matchMedia('screen').matches).toBe(false)

    await emulateMedia({ media: null })
    expect(matchMedia('print').matches).toBe(false)
    expect(matchMedia('screen').matches).toBe(true)
  })
})
