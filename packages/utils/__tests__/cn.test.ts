import { cn, cnVariants, cnFinancial } from '../src/cn'

describe('cn utility', () => {
  it('combines class names correctly', () => {
    expect(cn('px-4', 'py-2', 'bg-blue-500')).toBe('px-4 py-2 bg-blue-500')
  })

  it('handles Tailwind conflicts', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6')
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500')
  })

  it('handles conditional classes', () => {
    expect(cn('btn', true && 'btn-active', false && 'btn-disabled')).toBe('btn btn-active')
  })

  it('handles undefined and null values', () => {
    expect(cn('btn', undefined, null, 'btn-primary')).toBe('btn btn-primary')
  })

  it('handles arrays of classes', () => {
    expect(cn(['btn', 'btn-large'], 'btn-primary')).toBe('btn btn-large btn-primary')
  })

  it('handles objects with boolean values', () => {
    expect(cn({ 'btn': true, 'btn-active': true, 'btn-disabled': false })).toBe('btn btn-active')
  })
})

describe('cnVariants utility', () => {
  const variants = {
    size: {
      sm: 'text-sm px-2',
      md: 'text-base px-4',
      lg: 'text-lg px-6'
    },
    color: {
      primary: 'bg-blue-500',
      danger: 'bg-red-500'
    }
  }

  it('applies variant classes correctly', () => {
    const result = cnVariants('btn', variants, { size: 'md', color: 'primary' })
    expect(result).toContain('btn')
    expect(result).toContain('text-base')
    expect(result).toContain('px-4')
    expect(result).toContain('bg-blue-500')
  })

  it('handles partial variant selection', () => {
    const result = cnVariants('btn', variants, { size: 'sm' })
    expect(result).toContain('btn')
    expect(result).toContain('text-sm')
    expect(result).not.toContain('bg-')
  })

  it('includes custom className', () => {
    const result = cnVariants('btn', variants, { size: 'md' }, 'custom-class')
    expect(result).toContain('btn')
    expect(result).toContain('custom-class')
  })

  it('handles invalid variant keys', () => {
    const result = cnVariants('btn', variants, { size: 'xl' as any })
    expect(result).toBe('btn')
  })
})

describe('cnFinancial utility', () => {
  it('applies positive price styling', () => {
    const classes = cnFinancial({ base: 'font-mono', positive: true })
    expect(classes).toContain('font-mono')
    expect(classes).toContain('text-success-500')
  })

  it('applies negative price styling', () => {
    const classes = cnFinancial({ base: 'font-mono', negative: true })
    expect(classes).toContain('font-mono')
    expect(classes).toContain('text-danger-300')
  })

  it('applies neutral styling', () => {
    const classes = cnFinancial({ neutral: true })
    expect(classes).toContain('text-terminal-white')
  })

  it('applies large font styling', () => {
    const classes = cnFinancial({ large: true })
    expect(classes).toContain('font-bold')
  })

  it('applies critical styling with animation', () => {
    const classes = cnFinancial({ critical: true })
    expect(classes).toContain('animate-pulse')
  })

  it('combines multiple flags', () => {
    const classes = cnFinancial({ positive: true, large: true, critical: true })
    expect(classes).toContain('text-success-500')
    expect(classes).toContain('font-bold')
    expect(classes).toContain('animate-pulse')
  })

  it('includes custom className', () => {
    const classes = cnFinancial({ positive: true, className: 'custom' })
    expect(classes).toContain('text-success-500')
    expect(classes).toContain('custom')
  })
})
