import { useEffect } from 'react'

/**
 * Custom hook for handling keyboard shortcuts in trading applications.
 * Supports modifier keys and prevents default browser behavior.
 * 
 * @param key - The key to listen for (e.g., 'Enter', 'Escape', 'b')
 * @param callback - Function to call when key is pressed
 * @param options - Configuration options
 * 
 * @example
 * ```tsx
 * // Buy shortcut: Ctrl+B
 * useKeyboard('b', handleBuy, { ctrl: true })
 * 
 * // Sell shortcut: Ctrl+S
 * useKeyboard('s', handleSell, { ctrl: true })
 * 
 * // Close modal: Escape
 * useKeyboard('Escape', handleClose)
 * ```
 */
export function useKeyboard(
  key: string,
  callback: (event: KeyboardEvent) => void,
  options?: {
    ctrl?: boolean
    shift?: boolean
    alt?: boolean
    meta?: boolean
    preventDefault?: boolean
  }
): void {
  useEffect(() => {
    const {
      ctrl = false,
      shift = false,
      alt = false,
      meta = false,
      preventDefault = true
    } = options || {}

    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if all modifier requirements are met
      const ctrlMatch = !ctrl || event.ctrlKey
      const shiftMatch = !shift || event.shiftKey
      const altMatch = !alt || event.altKey
      const metaMatch = !meta || event.metaKey

      // Check if the key matches (case-insensitive)
      const keyMatch = event.key.toLowerCase() === key.toLowerCase()

      if (keyMatch && ctrlMatch && shiftMatch && altMatch && metaMatch) {
        if (preventDefault) {
          event.preventDefault()
        }
        callback(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback, options])
}
