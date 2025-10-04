/**
 * Typography tokens for Bloomberg Terminal-inspired UI
 * 
 * Provides font families, sizes, weights, and spacing optimized for:
 * - Dense financial data display
 * - High readability in terminal environments
 * - Consistent text alignment for numerical data
 * 
 * @example
 * ```typescript
 * import { typography } from '@sandeep-jaiswar/tokens/typography'
 * 
 * // Using font families
 * const monoFont = typography.fontFamily['terminal-mono']
 * 
 * // Using font sizes with line heights
 * const [fontSize, config] = typography.fontSize.base
 * ```
 */

export const typography = {
  /**
   * Font family stacks optimized for terminal aesthetics
   */
  fontFamily: {
    'terminal-mono': [
      'SF Mono',
      'Monaco',
      'Inconsolata',
      'Consolas',
      'monospace',
    ],
    'terminal-sans': [
      'Inter',
      'SF Pro Display',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ],
  },
  
  /**
   * Font sizes with associated line heights and letter spacing
   * Optimized for dense financial data layouts
   */
  fontSize: {
    xs: ['10px', { lineHeight: '14px', letterSpacing: '0.025em' }],
    sm: ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
    base: ['14px', { lineHeight: '20px', letterSpacing: '0.025em' }],
    lg: ['16px', { lineHeight: '22px', letterSpacing: '0.025em' }],
    xl: ['18px', { lineHeight: '26px', letterSpacing: '0.025em' }],
    '2xl': ['20px', { lineHeight: '28px', letterSpacing: '0.025em' }],
    '3xl': ['24px', { lineHeight: '32px', letterSpacing: '0.025em' }],
  },
  
  /**
   * Font weights for hierarchy and emphasis
   */
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  /**
   * Line height scale for text density control
   */
  lineHeight: {
    tight: '1.25',
    normal: '1.4',
    relaxed: '1.6',
  },
  
  /**
   * Letter spacing for readability and style
   */
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
} as const
