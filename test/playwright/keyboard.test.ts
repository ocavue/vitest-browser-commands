import { describe, expect, it } from 'vitest'

import { keyboard } from '../../src/playwright/browser'

describe('keyboard', () => {
  describe('type', () => {
    it('should type text into a focused input', async () => {
      const input = createTestInput()
      input.focus()

      await keyboard.type('Hello World')

      expect(input.value).toBe('Hello World')
    })

    it('should not type into unfocused input', async () => {
      const input = createTestInput()

      await keyboard.type('Hello World')

      expect(input.value).toBe('')
    })

    it('should type with delay option', async () => {
      const input = createTestInput()
      input.focus()

      await keyboard.type('Test', { delay: 10 })

      expect(input.value).toBe('Test')
    })
  })

  describe('press', () => {
    it('should press a single key', async () => {
      const input = createTestInput()
      input.focus()
      input.value = 'Hello'

      await keyboard.press('Backspace')

      expect(input.value).toBe('Hell')
    })

    it('should press Enter key', async () => {
      const form = createTestForm()
      const input = form.querySelector('input')!
      let formSubmitted = false
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        formSubmitted = true
      })
      input.focus()

      await keyboard.press('Enter')

      expect(formSubmitted).toBe(true)
    })

    it('should press key combinations with modifiers', async () => {
      const input = createTestInput()
      input.focus()

      await keyboard.press('Shift+KeyA')

      expect(input.value).toBe('A')
    })
  })

  describe('down and up', () => {
    it('should trigger keydown event', async () => {
      const input = createTestInput()
      input.focus()
      let keyDownTriggered = false
      let keyPressed = ''

      input.addEventListener('keydown', (e) => {
        keyDownTriggered = true
        keyPressed = e.key
      })

      await keyboard.down('a')

      expect(keyDownTriggered).toBe(true)
      expect(keyPressed).toBe('a')
    })

    it('should trigger keyup event', async () => {
      const input = createTestInput()
      input.focus()
      let keyUpTriggered = false
      let keyPressed = ''

      input.addEventListener('keyup', (e) => {
        keyUpTriggered = true
        keyPressed = e.key
      })

      await keyboard.down('b')
      await keyboard.up('b')

      expect(keyUpTriggered).toBe(true)
      expect(keyPressed).toBe('b')
    })

    it('should handle modifier keys', async () => {
      const input = createTestInput()
      input.focus()
      let shiftPressed = false

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Shift') {
          shiftPressed = true
        }
      })

      await keyboard.down('Shift')
      expect(shiftPressed).toBe(true)

      await keyboard.up('Shift')
    })
  })

  describe('insertText', () => {
    it('should insert text without triggering keyboard events', async () => {
      const input = createTestInput()
      input.focus()
      let keydownTriggered = false

      input.addEventListener('keydown', () => {
        keydownTriggered = true
      })

      await keyboard.insertText('Inserted')

      expect(input.value).toBe('Inserted')
      expect(keydownTriggered).toBe(false)
    })

    it('should insert text at cursor position', async () => {
      const input = createTestInput()
      input.focus()
      input.value = 'Hello World'
      input.setSelectionRange(5, 5)

      await keyboard.insertText(' Beautiful')

      expect(input.value).toBe('Hello Beautiful World')
    })
  })
})

function createTestInput(): HTMLInputElement {
  const existingInput = document.getElementById('test-input')
  existingInput?.remove()

  const input = document.createElement('input')
  input.id = 'test-input'
  input.type = 'text'
  input.style.position = 'absolute'
  input.style.top = '50px'
  input.style.left = '50px'

  document.body.appendChild(input)
  return input
}

function createTestForm(): HTMLFormElement {
  const existingForm = document.getElementById('test-form')
  existingForm?.remove()

  const form = document.createElement('form')
  form.id = 'test-form'
  const input = document.createElement('input')
  input.type = 'text'
  form.appendChild(input)

  document.body.appendChild(form)
  return form
}
