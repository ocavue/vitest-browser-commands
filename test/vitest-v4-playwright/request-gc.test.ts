import { describe, expect, it } from 'vitest'
import { requestGC } from 'vitest-browser-commands/playwright'

describe('requestGC', () => {
  it('should collect an unreachable object', async () => {
    const fixture = createSuspect()
    expect(fixture.hasSuspect()).toBe(true)

    await requestGC()
    expect(fixture.hasSuspect()).toBe(true)

    fixture.reset1()
    await requestGC()
    expect(fixture.hasSuspect()).toBe(true)

    fixture.reset2()
    await requestGC()
    expect(fixture.hasSuspect()).toBe(false)
  })
})

function createSuspect() {
  const global = globalThis as typeof globalThis & {
    suspect1?: { hello: string } | null
    suspect2?: { hello: string } | null
    suspectWeakRef?: WeakRef<{ hello: string }>
  }
  const suspect = { hello: 'world' }
  global.suspect1 = suspect
  global.suspect2 = suspect
  global.suspectWeakRef = new WeakRef(global.suspect1)

  return {
    hasSuspect: () => !!global.suspectWeakRef?.deref(),
    reset1: () => (global.suspect1 = null),
    reset2: () => (global.suspect2 = null),
  }
}
