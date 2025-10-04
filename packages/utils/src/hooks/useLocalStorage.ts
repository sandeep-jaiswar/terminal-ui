import { useState } from 'react'

/**
 * Custom hook for managing state in localStorage with automatic synchronization.
 * Perfect for persisting user preferences in trading applications.
 * 
 * @param key - The localStorage key
 * @param initialValue - Default value if key doesn't exist
 * @returns Tuple of [storedValue, setValue] similar to useState
 * 
 * @example
 * ```tsx
 * const [theme, setTheme] = useLocalStorage('terminal-theme', 'dark')
 * const [watchlist, setWatchlist] = useLocalStorage<string[]>('watchlist', ['AAPL', 'GOOGL'])
 * ```
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}
