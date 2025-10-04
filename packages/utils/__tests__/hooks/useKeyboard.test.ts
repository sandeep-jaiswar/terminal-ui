import { renderHook } from '@testing-library/react'
import { useKeyboard } from '../../src/hooks/useKeyboard'

describe('useKeyboard', () => {
  it('calls callback when key is pressed', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('Enter', callback))
    
    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    window.dispatchEvent(event)
    
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith(event)
  })

  it('is case-insensitive', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('b', callback))
    
    const eventLower = new KeyboardEvent('keydown', { key: 'b' })
    const eventUpper = new KeyboardEvent('keydown', { key: 'B' })
    
    window.dispatchEvent(eventLower)
    window.dispatchEvent(eventUpper)
    
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('respects ctrl modifier', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('b', callback, { ctrl: true }))
    
    // Without ctrl
    const event1 = new KeyboardEvent('keydown', { key: 'b' })
    window.dispatchEvent(event1)
    expect(callback).not.toHaveBeenCalled()
    
    // With ctrl
    const event2 = new KeyboardEvent('keydown', { key: 'b', ctrlKey: true })
    window.dispatchEvent(event2)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('respects shift modifier', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('s', callback, { shift: true }))
    
    const event1 = new KeyboardEvent('keydown', { key: 's' })
    window.dispatchEvent(event1)
    expect(callback).not.toHaveBeenCalled()
    
    const event2 = new KeyboardEvent('keydown', { key: 's', shiftKey: true })
    window.dispatchEvent(event2)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('respects alt modifier', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('a', callback, { alt: true }))
    
    const event1 = new KeyboardEvent('keydown', { key: 'a' })
    window.dispatchEvent(event1)
    expect(callback).not.toHaveBeenCalled()
    
    const event2 = new KeyboardEvent('keydown', { key: 'a', altKey: true })
    window.dispatchEvent(event2)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('respects meta modifier', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('k', callback, { meta: true }))
    
    const event1 = new KeyboardEvent('keydown', { key: 'k' })
    window.dispatchEvent(event1)
    expect(callback).not.toHaveBeenCalled()
    
    const event2 = new KeyboardEvent('keydown', { key: 'k', metaKey: true })
    window.dispatchEvent(event2)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('handles multiple modifiers', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('s', callback, { ctrl: true, shift: true }))
    
    const event1 = new KeyboardEvent('keydown', { key: 's', ctrlKey: true })
    window.dispatchEvent(event1)
    expect(callback).not.toHaveBeenCalled()
    
    const event2 = new KeyboardEvent('keydown', { key: 's', ctrlKey: true, shiftKey: true })
    window.dispatchEvent(event2)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('prevents default when preventDefault is true', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('Enter', callback, { preventDefault: true }))
    
    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault')
    
    window.dispatchEvent(event)
    
    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('does not prevent default when preventDefault is false', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('Enter', callback, { preventDefault: false }))
    
    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault')
    
    window.dispatchEvent(event)
    
    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  it('cleans up event listener on unmount', () => {
    const callback = jest.fn()
    const { unmount } = renderHook(() => useKeyboard('Enter', callback))
    
    unmount()
    
    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    window.dispatchEvent(event)
    
    expect(callback).not.toHaveBeenCalled()
  })

  it('works with special keys', () => {
    const callback = jest.fn()
    renderHook(() => useKeyboard('Escape', callback))
    
    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    window.dispatchEvent(event)
    
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
