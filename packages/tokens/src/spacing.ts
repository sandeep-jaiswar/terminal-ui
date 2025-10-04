/**
 * Spacing tokens for Bloomberg Terminal-inspired UI
 * 
 * 4px base scale for precise layouts and consistent spacing
 * Used for margins, paddings, gaps, and positioning
 * 
 * @example
 * ```typescript
 * import { spacing } from '@sandeep-jaiswar/tokens/spacing'
 * 
 * // Using spacing values
 * const padding = spacing[4]  // '16px'
 * const margin = spacing[8]   // '32px'
 * ```
 */

export const spacing = {
  /** 1px - hairline spacing */
  px: '1px',
  /** 0px - no spacing */
  0: '0px',
  /** 2px - 0.5 * 4px */
  0.5: '2px',
  /** 4px - 1 * 4px */
  1: '4px',
  /** 6px - 1.5 * 4px */
  1.5: '6px',
  /** 8px - 2 * 4px */
  2: '8px',
  /** 10px - 2.5 * 4px */
  2.5: '10px',
  /** 12px - 3 * 4px */
  3: '12px',
  /** 14px - 3.5 * 4px */
  3.5: '14px',
  /** 16px - 4 * 4px */
  4: '16px',
  /** 20px - 5 * 4px */
  5: '20px',
  /** 24px - 6 * 4px */
  6: '24px',
  /** 28px - 7 * 4px */
  7: '28px',
  /** 32px - 8 * 4px */
  8: '32px',
  /** 36px - 9 * 4px */
  9: '36px',
  /** 40px - 10 * 4px */
  10: '40px',
  /** 44px - 11 * 4px */
  11: '44px',
  /** 48px - 12 * 4px */
  12: '48px',
  /** 56px - 14 * 4px */
  14: '56px',
  /** 64px - 16 * 4px */
  16: '64px',
  /** 80px - 20 * 4px */
  20: '80px',
  /** 96px - 24 * 4px */
  24: '96px',
  /** 112px - 28 * 4px */
  28: '112px',
  /** 128px - 32 * 4px */
  32: '128px',
} as const
