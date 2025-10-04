import {
  formatCurrency,
  formatPercentage,
  formatLargeNumber,
  formatPriceChange,
  formatMarketValue
} from '../src/format'

describe('formatCurrency', () => {
  it('formats USD currency correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56')
    expect(formatCurrency(0)).toBe('$0.00')
    expect(formatCurrency(1000000)).toBe('$1,000,000.00')
  })

  it('formats different currencies', () => {
    expect(formatCurrency(1234.56, 'EUR')).toContain('1,234.56')
    expect(formatCurrency(1234.56, 'GBP')).toContain('1,234.56')
  })

  it('handles negative values', () => {
    expect(formatCurrency(-1234.56)).toContain('-')
    expect(formatCurrency(-1234.56)).toContain('1,234.56')
  })

  it('respects custom options', () => {
    const result = formatCurrency(1234.567, 'USD', { maximumFractionDigits: 3 })
    expect(result).toBe('$1,234.567')
  })

  it('handles very large numbers', () => {
    const result = formatCurrency(999999999.99)
    expect(result).toBe('$999,999,999.99')
  })
})

describe('formatPercentage', () => {
  it('formats positive percentages', () => {
    expect(formatPercentage(5.5)).toBe('5.50%')
    expect(formatPercentage(100)).toBe('100.00%')
    expect(formatPercentage(0.123)).toBe('0.12%')
  })

  it('formats negative percentages', () => {
    expect(formatPercentage(-2.34)).toBe('-2.34%')
    expect(formatPercentage(-50)).toBe('-50.00%')
  })

  it('handles zero', () => {
    expect(formatPercentage(0)).toBe('0.00%')
  })

  it('respects custom options', () => {
    const result = formatPercentage(5.123, { minimumFractionDigits: 3, maximumFractionDigits: 3 })
    expect(result).toBe('5.123%')
  })
})

describe('formatLargeNumber', () => {
  it('formats thousands with K', () => {
    expect(formatLargeNumber(1234)).toBe('1.2K')
    expect(formatLargeNumber(9999)).toBe('10.0K')
    expect(formatLargeNumber(500000)).toBe('500.0K')
  })

  it('formats millions with M', () => {
    expect(formatLargeNumber(1234567)).toBe('1.2M')
    expect(formatLargeNumber(999999999)).toBe('1000.0M')
  })

  it('formats billions with B', () => {
    expect(formatLargeNumber(1234567890)).toBe('1.2B')
    expect(formatLargeNumber(50000000000)).toBe('50.0B')
  })

  it('formats trillions with T', () => {
    expect(formatLargeNumber(1234567890123)).toBe('1.2T')
    expect(formatLargeNumber(5000000000000)).toBe('5.0T')
  })

  it('formats small numbers without suffix', () => {
    expect(formatLargeNumber(999)).toBe('999')
    expect(formatLargeNumber(500)).toBe('500')
    expect(formatLargeNumber(0)).toBe('0')
  })
})

describe('formatPriceChange', () => {
  it('formats positive changes with + sign', () => {
    expect(formatPriceChange(5.25)).toBe('+$5.25')
    expect(formatPriceChange(100)).toBe('+$100.00')
  })

  it('formats negative changes with - sign', () => {
    expect(formatPriceChange(-3.50)).toBe('-$3.50')
    expect(formatPriceChange(-100)).toBe('-$100.00')
  })

  it('formats zero correctly', () => {
    expect(formatPriceChange(0)).toBe('+$0.00')
  })

  it('hides sign when showSign is false', () => {
    expect(formatPriceChange(5.25, { showSign: false })).toBe('$5.25')
    expect(formatPriceChange(-5.25, { showSign: false })).toBe('$5.25')
  })

  it('supports different currencies', () => {
    const result = formatPriceChange(5.25, { currency: 'EUR' })
    expect(result).toContain('+')
    expect(result).toContain('5.25')
  })
})

describe('formatMarketValue', () => {
  it('formats trillions', () => {
    expect(formatMarketValue(5600000000000)).toBe('$5.60T')
    expect(formatMarketValue(1234567890123)).toBe('$1.23T')
  })

  it('formats billions', () => {
    expect(formatMarketValue(1234567890)).toBe('$1.23B')
    expect(formatMarketValue(50000000000)).toBe('$50.00B')
  })

  it('formats millions', () => {
    expect(formatMarketValue(45000000)).toBe('$45.00M')
    expect(formatMarketValue(1500000)).toBe('$1.50M')
  })

  it('formats thousands', () => {
    expect(formatMarketValue(5000)).toBe('$5.00K')
    expect(formatMarketValue(123456)).toBe('$123.46K')
  })

  it('formats small values as currency', () => {
    expect(formatMarketValue(999)).toBe('$999.00')
    expect(formatMarketValue(500)).toBe('$500.00')
  })

  it('handles zero', () => {
    expect(formatMarketValue(0)).toBe('$0.00')
  })
})
