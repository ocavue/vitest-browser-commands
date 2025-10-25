import { describe, expect, it } from 'vitest'

import { mouse } from '../../src/playwright/browser'

describe('mouse', () => {
  describe('move', () => {
    it('should trigger pointermove when moving inside the container', async () => {
      const container = createTestContainer()
      let moveCount = 0
      container.addEventListener('pointermove', () => moveCount++)

      await mouse.move(50, 50, { steps: 10 })

      expect(moveCount).toBeGreaterThan(0)
    })

    it('should not trigger pointermove when already positioned outside', async () => {
      const container = createTestContainer()
      let moveCount = 0

      // Position mouse outside first (without listening yet to avoid intermediate moves)
      await mouse.move(150, 150)

      // Now add listener and move to another outside position
      container.addEventListener('pointermove', () => moveCount++)
      await mouse.move(200, 200, { steps: 10 })

      expect(moveCount).toBe(0)
    })
  })

  describe('down', () => {
    it('should trigger pointerdown when pressing inside the container', async () => {
      const container = createTestContainer()
      let downTriggered = false
      container.addEventListener('pointerdown', () => {
        downTriggered = true
      })

      await mouse.move(50, 50, { steps: 10 })
      await mouse.down()

      expect(downTriggered).toBe(true)
    })

    it('should not trigger pointerdown when pressing outside the container', async () => {
      const container = createTestContainer()
      let downTriggered = false
      container.addEventListener('pointerdown', () => {
        downTriggered = true
      })

      await mouse.move(200, 200, { steps: 10 })
      await mouse.down()
      await mouse.up() // Clean up

      expect(downTriggered).toBe(false)
    })
  })

  describe('up', () => {
    it('should trigger pointerup when releasing inside the container', async () => {
      const container = createTestContainer()
      let upTriggered = false
      container.addEventListener('pointerup', () => {
        upTriggered = true
      })

      await mouse.move(50, 50, { steps: 10 })
      await mouse.down()
      await mouse.up()

      expect(upTriggered).toBe(true)
    })

    it('should not trigger pointerup when releasing outside the container', async () => {
      const container = createTestContainer()
      let upTriggered = false
      container.addEventListener('pointerup', () => {
        upTriggered = true
      })

      await mouse.move(200, 200, { steps: 10 })
      await mouse.down()
      await mouse.up()

      expect(upTriggered).toBe(false)
    })
  })

  describe('click', () => {
    it('should trigger click event at specified position', async () => {
      const container = createTestContainer()
      let clickTriggered = false
      container.addEventListener('click', () => {
        clickTriggered = true
      })

      await mouse.click(50, 50)

      expect(clickTriggered).toBe(true)
    })

    it('should not trigger click outside the container', async () => {
      const container = createTestContainer()
      let clickTriggered = false
      container.addEventListener('click', () => {
        clickTriggered = true
      })

      await mouse.click(200, 200)

      expect(clickTriggered).toBe(false)
    })

    it('should respect edge boundaries', async () => {
      const container = createTestContainer()
      const positions: Array<{ x: number; y: number; shouldClick: boolean }> = [
        { x: 95, y: 95, shouldClick: true }, // Inside
        { x: 105, y: 50, shouldClick: false }, // Outside
      ]

      for (const { x, y, shouldClick } of positions) {
        let clicked = false
        const handler = () => {
          clicked = true
        }
        container.addEventListener('click', handler)

        await mouse.click(x, y)

        expect(clicked).toBe(shouldClick)
        container.removeEventListener('click', handler)
      }
    })
  })

  describe('dblclick', () => {
    it('should trigger dblclick event at specified position', async () => {
      const container = createTestContainer()
      let dblclickTriggered = false
      container.addEventListener('dblclick', () => {
        dblclickTriggered = true
      })

      await mouse.dblclick(50, 50)

      expect(dblclickTriggered).toBe(true)
    })

    it('should not trigger dblclick outside the container', async () => {
      const container = createTestContainer()
      let dblclickTriggered = false
      container.addEventListener('dblclick', () => {
        dblclickTriggered = true
      })

      await mouse.dblclick(200, 200)

      expect(dblclickTriggered).toBe(false)
    })
  })

  describe('wheel', () => {
    it('should trigger wheel event when scrolling', async () => {
      const container = createTestContainer()
      let wheelTriggered = false
      let wheelDeltaX = 0
      let wheelDeltaY = 0

      container.addEventListener('wheel', (e) => {
        wheelTriggered = true
        wheelDeltaX = e.deltaX
        wheelDeltaY = e.deltaY
      })

      await mouse.move(50, 50, { steps: 10 })
      await mouse.wheel(10, 20)

      expect(wheelTriggered).toBe(true)
      expect(wheelDeltaX).toBe(10)
      expect(wheelDeltaY).toBe(20)
    })

    it('should handle negative delta values', async () => {
      const container = createTestContainer()
      let wheelDeltaX = 0
      let wheelDeltaY = 0

      container.addEventListener('wheel', (e) => {
        wheelDeltaX = e.deltaX
        wheelDeltaY = e.deltaY
      })

      await mouse.move(50, 50, { steps: 10 })
      await mouse.wheel(-15, -25)

      expect(wheelDeltaX).toBe(-15)
      expect(wheelDeltaY).toBe(-25)
    })
  })
})

function createTestContainer(): HTMLElement {
  const existingContainer = document.getElementById('test-container')
  existingContainer?.remove()

  const container = document.createElement('div')
  container.id = 'test-container'
  container.style.width = '100px'
  container.style.height = '100px'
  container.style.backgroundColor = 'lightblue'
  container.style.position = 'absolute'
  container.style.top = '0'
  container.style.left = '0'
  container.style.zIndex = '1000'

  document.body.appendChild(container)
  return container
}
