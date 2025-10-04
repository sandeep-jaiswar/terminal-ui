import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from '../../src/hooks/useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('returns initial value when key does not exist', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))
    
    expect(result.current[0]).toBe('initial')
  })

  it('stores value in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))
    
    act(() => {
      result.current[1]('new value')
    })
    
    expect(result.current[0]).toBe('new value')
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('new value'))
  })

  it('reads existing value from localStorage', () => {
    localStorage.setItem('test-key', JSON.stringify('stored value'))
    
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))
    
    expect(result.current[0]).toBe('stored value')
  })

  it('handles complex objects', () => {
    const { result } = renderHook(() => 
      useLocalStorage<{ name: string; age: number }>('user', { name: 'John', age: 30 })
    )
    
    act(() => {
      result.current[1]({ name: 'Jane', age: 25 })
    })
    
    expect(result.current[0]).toEqual({ name: 'Jane', age: 25 })
  })

  it('handles arrays', () => {
    const { result } = renderHook(() => useLocalStorage<string[]>('list', []))
    
    act(() => {
      result.current[1](['a', 'b', 'c'])
    })
    
    expect(result.current[0]).toEqual(['a', 'b', 'c'])
  })

  it('handles invalid JSON gracefully', () => {
    localStorage.setItem('test-key', 'invalid json')
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()
    
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))
    
    expect(result.current[0]).toBe('initial')
    expect(consoleWarnSpy).toHaveBeenCalled()
    
    consoleWarnSpy.mockRestore()
  })

  it('handles localStorage errors gracefully', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {
        throw new Error('Storage full')
      })
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()
    
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))
    
    act(() => {
      result.current[1]('new value')
    })
    
    expect(consoleWarnSpy).toHaveBeenCalled()
    
    setItemSpy.mockRestore()
    consoleWarnSpy.mockRestore()
  })
})
