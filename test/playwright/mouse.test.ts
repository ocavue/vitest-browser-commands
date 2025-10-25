import { describe, it, expect } from 'vitest'

import { mouse } from '../../src/playwright/browser'

describe('mouse', () => {
  it('should be able to interact with the mouse', async () => {
    const container = prepareElement('test-container')
    container.style.width = '100px'
    container.style.height = '100px'
    container.style.backgroundColor = 'red'
    container.style.position = 'absolute'
    container.style.top = '0'
    container.style.left = '0'
    container.style.zIndex = '1000'

    let isMouseDown = false
    let isMouseUp = false

    container.addEventListener('mousedown', () => {
      isMouseDown = true
    })
    container.addEventListener('mouseup', () => {
      isMouseUp = true
    })

    
    await mouse.move(200, 200)
    await mouse.down()
    await mouse.up()
    expect(isMouseDown).toBe(false)
    expect(isMouseUp).toBe(false)

    await mouse.move(50, 50)
    await mouse.down()
    expect(isMouseDown).toBe(true)
    expect(isMouseUp).toBe(false)

    await mouse.up()
    expect(isMouseDown).toBe(true)
    expect(isMouseUp).toBe(true)

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
