import { describe, expect, it } from 'vitest'
import { requestGC } from 'vitest-browser-commands/playwright'

describe('requestGC', () => {
  it('should collect an unreachable object', async () => {
    const global = globalThis as typeof globalThis & {
      suspect?: { hello: string } | null
      suspectWeakRef?: WeakRef<{ hello: string }>
    }
    global.suspect = { hello: 'world' }
    global.suspectWeakRef = new WeakRef(global.suspect)

    await requestGC()
    expect(global.suspectWeakRef.deref()).toEqual({ hello: 'world' })

    global.suspect = null
    await requestGC()
    expect(global.suspectWeakRef.deref()).toBeUndefined()
  })
})
