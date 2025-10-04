/**
 * Shadow tokens for Bloomberg Terminal-inspired UI
 * 
 * Provides elevation shadows, terminal-specific shadows, and glow effects
 * Optimized for dark backgrounds with appropriate opacity values
 * 
 * @example
 * ```typescript
 * import { shadows } from '@sandeep-jaiswar/tokens/shadows'
 * 
 * // Standard elevation
 * const cardShadow = shadows.md
 * 
 * // Terminal glow effects
 * const focusGlow = shadows.glow.blue
 * ```
 */

export const shadows = {
  // Standard elevation shadows
  /** Small shadow for subtle elevation */
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  /** Base shadow for standard elevation */
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  /** Medium shadow for moderate elevation */
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  /** Large shadow for significant elevation */
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  /** Extra large shadow for high elevation */
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  /** 2x extra large shadow for maximum elevation */
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  
  // Terminal-specific shadows
  terminal: {
    /** Card shadow optimized for terminal black background */
    card: '0 4px 6px -2px rgba(0, 0, 0, 0.4)',
    /** Modal shadow for overlays */
    modal: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
  },
  
  // Terminal glow effects for focus states
  glow: {
    /** Blue glow for primary focus states */
    blue: '0 0 0 3px rgba(0, 104, 255, 0.2)',
    /** Green glow for success states */
    green: '0 0 0 3px rgba(74, 246, 195, 0.2)',
    /** Red glow for danger states */
    red: '0 0 0 3px rgba(255, 67, 61, 0.2)',
    /** Orange glow for warning states */
    orange: '0 0 0 3px rgba(251, 139, 30, 0.2)',
  },
  
  // Inner shadows for inputs and inset elements
  inner: {
    /** Small inner shadow */
    sm: 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
    /** Base inner shadow */
    base: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
  },
} as const
