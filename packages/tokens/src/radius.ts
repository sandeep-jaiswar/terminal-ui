/**
 * Border radius tokens for Bloomberg Terminal-inspired UI
 *
 * Provides consistent corner rounding values for components
 * Optimized for sharp, professional terminal aesthetics
 *
 * @example
 * ```typescript
 * import { radius } from '@sandeep-jaiswar/tokens/radius'
 *
 * // Using radius values
 * const cardRadius = radius.md   // '6px'
 * const buttonRadius = radius.sm // '2px'
 * ```
 */

export const radius = {
  /** No rounding - sharp corners */
  none: "0px",
  /** Small rounding - subtle corners */
  sm: "2px",
  /** Base rounding - standard components */
  base: "4px",
  /** Medium rounding - cards and containers */
  md: "6px",
  /** Large rounding - prominent elements */
  lg: "8px",
  /** Extra large rounding - modals and overlays */
  xl: "12px",
  /** 2x extra large rounding */
  "2xl": "16px",
  /** 3x extra large rounding */
  "3xl": "24px",
  /** Full rounding - circular elements */
  full: "9999px",
} as const;
