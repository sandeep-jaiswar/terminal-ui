/**
 * Financial-specific utility types
 */

/**
 * Price direction for displaying changes
 */
export type PriceDirection = 'up' | 'down' | 'neutral'

/**
 * Common financial value types
 */
export type FinancialValueType = 'price' | 'value' | 'volume' | 'change'

/**
 * Supported currency codes (extend as needed)
 */
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY'

/**
 * Order types for trading
 */
export type OrderType = 'market' | 'limit' | 'stop' | 'stop-limit'

/**
 * Order side (buy/sell)
 */
export type OrderSide = 'buy' | 'sell'

/**
 * Market status
 */
export type MarketStatus = 'pre-market' | 'open' | 'closed' | 'after-hours'

/**
 * Generic financial data point
 */
export interface FinancialDataPoint {
  timestamp: number
  value: number
  volume?: number
}

/**
 * Price change information
 */
export interface PriceChange {
  current: number
  previous: number
  change: number
  changePercent: number
  direction: PriceDirection
}
