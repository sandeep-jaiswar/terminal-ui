/**
 * Tailwind CSS preset for @sandeep-jaiswar/tokens
 * 
 * Extends Tailwind's default theme with Bloomberg Terminal design tokens
 * Provides consistent styling across all components
 * 
 * @example
 * ```javascript
 * // tailwind.config.js
 * module.exports = {
 *   presets: [require('@sandeep-jaiswar/tokens/tailwind-preset')],
 *   // ... other config
 * }
 * ```
 */

// Import token modules (using require for CommonJS compatibility)
const colors = require('./colors')
const typography = require('./typography')
const spacing = require('./spacing')
const shadows = require('./shadows')
const radius = require('./radius')
const zIndex = require('./z-index')

/**
 * Tailwind preset configuration
 * Extends the default theme with our design tokens
 */
module.exports = {
  theme: {
    extend: {
      // Color system
      colors: {
        ...colors.colors,
        // Add semantic colors at root level for convenience
        background: colors.semanticColors.background,
        text: colors.semanticColors.text,
        border: colors.semanticColors.border,
        state: colors.semanticColors.state,
      },
      
      // Typography
      fontFamily: typography.typography.fontFamily,
      fontSize: typography.typography.fontSize,
      fontWeight: typography.typography.fontWeight,
      lineHeight: typography.typography.lineHeight,
      letterSpacing: typography.typography.letterSpacing,
      
      // Spacing
      spacing: spacing.spacing,
      
      // Shadows
      boxShadow: {
        ...shadows.shadows,
        // Flatten nested shadow objects for easier access
        'terminal-card': shadows.shadows.terminal.card,
        'terminal-modal': shadows.shadows.terminal.modal,
        'glow-blue': shadows.shadows.glow.blue,
        'glow-green': shadows.shadows.glow.green,
        'glow-red': shadows.shadows.glow.red,
        'glow-orange': shadows.shadows.glow.orange,
        'inner-sm': shadows.shadows.inner.sm,
        'inner-base': shadows.shadows.inner.base,
      },
      
      // Border radius
      borderRadius: radius.radius,
      
      // Z-index
      zIndex: zIndex.zIndex,
    },
  },
}
