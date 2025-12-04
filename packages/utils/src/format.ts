/**
 * Format currency values for financial displays.
 *
 * @param value - The numeric value to format
 * @param currency - Currency code (default: 'USD')
 * @param options - Additional Intl.NumberFormat options
 * @returns Formatted currency string
 *
 * @example
 * ```ts
 * formatCurrency(1234.56)           // '$1,234.56'
 * formatCurrency(1234.56, 'EUR')    // '€1,234.56'
 * formatCurrency(1234.567, 'USD', { maximumFractionDigits: 3 }) // '$1,234.567'
 * ```
 */
export function formatCurrency(
  value: number,
  currency: string = "USD",
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(value);
}

/**
 * Format percentage values for financial displays.
 *
 * @param value - The percentage value (e.g., 5.5 for 5.5%)
 * @param options - Additional Intl.NumberFormat options
 * @returns Formatted percentage string
 *
 * @example
 * ```ts
 * formatPercentage(5.5)    // '5.50%'
 * formatPercentage(-2.34)  // '-2.34%'
 * formatPercentage(0.123, { minimumFractionDigits: 3 }) // '0.123%'
 * ```
 */
export function formatPercentage(
  value: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(value / 100);
}

/**
 * Format large numbers with abbreviations (K, M, B, T).
 * Useful for market caps, volumes, and large financial values.
 *
 * @param value - The numeric value to format
 * @returns Abbreviated number string
 *
 * @example
 * ```ts
 * formatLargeNumber(1234)          // '1.2K'
 * formatLargeNumber(1234567)       // '1.2M'
 * formatLargeNumber(1234567890)    // '1.2B'
 * formatLargeNumber(1234567890123) // '1.2T'
 * ```
 */
export function formatLargeNumber(value: number): string {
  if (value >= 1e12) return `${(value / 1e12).toFixed(1)}T`;
  if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
  return value.toFixed(0);
}

/**
 * Format price changes with + or - prefix.
 *
 * @param value - The price change value
 * @param options - Configuration options
 * @returns Formatted price change string
 *
 * @example
 * ```ts
 * formatPriceChange(5.25)                    // '+$5.25'
 * formatPriceChange(-3.50)                   // '-$3.50'
 * formatPriceChange(5.25, { showSign: false }) // '$5.25'
 * ```
 */
export function formatPriceChange(
  value: number,
  options?: { currency?: string; showSign?: boolean }
): string {
  const { currency = "USD", showSign = true } = options || {};
  const formatted = formatCurrency(Math.abs(value), currency);

  if (!showSign) return formatted;
  return value >= 0 ? `+${formatted}` : `-${formatted}`;
}

/**
 * Format market cap or large financial values with appropriate units.
 * Automatically adds currency symbol.
 *
 * @param value - The market value to format
 * @returns Formatted market value string with units
 *
 * @example
 * ```ts
 * formatMarketValue(1234567890)     // '$1.23B'
 * formatMarketValue(5600000000000)  // '$5.60T'
 * formatMarketValue(45000000)       // '$45.00M'
 * ```
 */
export function formatMarketValue(value: number): string {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
  return formatCurrency(value);
}
