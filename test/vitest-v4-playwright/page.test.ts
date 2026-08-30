import { describe, expect, it } from 'vitest'
import { page } from 'vitest-browser-commands/playwright'

describe('page', () => {
  describe('requestGC', () => {
    it('should collect an unreachable object', async () => {
      const global = globalThis as typeof globalThis & {
        suspect?: { hello: string } | null
        suspectWeakRef?: WeakRef<{ hello: string }>
      }
      global.suspect = { hello: 'world' }
      global.suspectWeakRef = new WeakRef(global.suspect)

      await page.requestGC()
      expect(global.suspectWeakRef.deref()).toEqual({ hello: 'world' })

      global.suspect = null
      await page.requestGC()
      expect(global.suspectWeakRef.deref()).toBeUndefined()
    })
  })
})
