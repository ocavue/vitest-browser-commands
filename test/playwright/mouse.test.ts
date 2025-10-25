import { describe, it, expect } from 'vitest'

import { mouse } from '../../src/playwright/browser'

describe('mouse', () => {
  it('should be able to interact with the mouse', async () => {
    const container = prepareElement('test-container')
    container.style.width = '100px'
    container.style.height = '100px'
    container.style.backgroundColor = 'lightblue'
    container.style.position = 'absolute'
    container.style.top = '0'
    container.style.left = '0'
    container.style.zIndex = '1000'

    let isPointerDown = false
    let isPointerUp = false
    let isPointerMove = false

    container.addEventListener('pointerdown', () => {
      isPointerDown = true
    })
    container.addEventListener('pointerup', () => {
      isPointerUp = true
    })
    container.addEventListener('pointermove', () => {
      isPointerMove = true
    })

    // Clicking the mouse outside the container should not trigger a mouse down or up event
    await mouse.move(200, 200, { steps: 10 })
    await mouse.down()
    await mouse.up()
    expect(isPointerDown).toBe(false)
    expect(isPointerUp).toBe(false)

    // Pressing down the mouse should trigger a mouse down event
    await mouse.move(50, 50, { steps: 10 })
    await mouse.down()
    expect(isPointerDown).toBe(true)
    expect(isPointerUp).toBe(false)

    // Releasing the mouse should trigger a mouse up event
    await mouse.up()
    expect(isPointerUp).toBe(true)

    // Moving inside the container should trigger a mouse move event
    isPointerMove = false
    await mouse.move(20, 20, { steps: 10 })
    expect(isPointerMove).toBe(true)

    // Moving outside the container should not trigger a mouse move event
    await mouse.move(150, 150, { steps: 10 })
    isPointerMove = false
    await mouse.move(200, 200, { steps: 10 })
    expect(isPointerMove).toBe(false)
  })
})

function prepareElement(id: string): HTMLElement {
  let element = document.getElementById(id)
  if (element) {
    element.remove()
  }

  element = document.createElement('div')
  element.id = id
  document.body.appendChild(element)
  return element
}
