# @sandeep-jaiswar/tokens

Design tokens for the Bloomberg Terminal-inspired UI component library. This package provides a comprehensive set of design tokens including colors, typography, spacing, shadows, and more.

## 📦 Installation

```bash
# Using pnpm (recommended)
pnpm add @sandeep-jaiswar/tokens

# Using npm
npm install @sandeep-jaiswar/tokens

# Using yarn
yarn add @sandeep-jaiswar/tokens
```

## 🎨 Features

- **Complete Token System** - Colors, typography, spacing, shadows, radius, and z-index
- **Tree-Shakeable** - Import only what you need for optimal bundle size
- **Type-Safe** - Full TypeScript support with const assertions
- **Multiple Formats** - JavaScript/TypeScript, CSS variables, Tailwind preset
- **Well Documented** - Comprehensive JSDoc comments for all tokens

## 🚀 Usage

### Basic Import

```typescript
// Import all tokens (larger bundle)
import { colors, typography, spacing } from "@sandeep-jaiswar/tokens";

// Use the tokens
const primaryColor = colors.primary[500]; // '#0068ff'
const baseFont = typography.fontSize.base; // ['14px', { lineHeight: '20px', ... }]
const padding = spacing[4]; // '16px'
```

### Tree-Shakeable Imports (Recommended)

```typescript
// Import specific token categories for smaller bundle
import { colors } from "@sandeep-jaiswar/tokens/colors";
import { typography } from "@sandeep-jaiswar/tokens/typography";
import { spacing } from "@sandeep-jaiswar/tokens/spacing";
```

## 🎨 Token Categories

### Colors

Complete color palette with terminal colors and financial semantic colors:

```typescript
import { colors, semanticColors } from "@sandeep-jaiswar/tokens/colors";

// Terminal base colors
colors.terminal.black; // '#000000'
colors.terminal["dark-gray"]; // '#1a1a1a'
colors.terminal.white; // '#ffffff'

// Financial semantic colors with shade scales
colors.primary[500]; // '#0068ff' - Blue
colors.success[500]; // '#4af6c3' - Green
colors.danger[300]; // '#ff433d' - Red
colors.warning[500]; // '#fb8b1e' - Orange

// Semantic color mappings
semanticColors.background.primary; // '#000000'
semanticColors.text.primary; // '#ffffff'
semanticColors.state.success; // '#4af6c3'
```

### Typography

Font families, sizes, weights, and spacing optimized for financial data:

```typescript
import { typography } from "@sandeep-jaiswar/tokens/typography";

// Font families
typography.fontFamily["terminal-mono"]; // ['SF Mono', 'Monaco', ...]
typography.fontFamily["terminal-sans"]; // ['Inter', 'SF Pro Display', ...]

// Font sizes with line heights
typography.fontSize.xs; // ['10px', { lineHeight: '14px', ... }]
typography.fontSize.base; // ['14px', { lineHeight: '20px', ... }]

// Font weights
typography.fontWeight.normal; // '400'
typography.fontWeight.semibold; // '600'
```

### Spacing

4px base scale for consistent layouts:

```typescript
import { spacing } from "@sandeep-jaiswar/tokens/spacing";

spacing[1]; // '4px'   - 1 * 4px
spacing[2]; // '8px'   - 2 * 4px
spacing[4]; // '16px'  - 4 * 4px
spacing[8]; // '32px'  - 8 * 4px
spacing[0.5]; // '2px'   - 0.5 * 4px
```

### Shadows

Elevation shadows and terminal-specific glow effects:

```typescript
import { shadows } from "@sandeep-jaiswar/tokens/shadows";

// Standard elevation
shadows.sm; // Subtle elevation
shadows.md; // Moderate elevation
shadows.xl; // High elevation

// Terminal-specific
shadows.terminal.card; // Card shadow for dark backgrounds
shadows.terminal.modal; // Modal overlay shadow

// Glow effects for focus states
shadows.glow.blue; // Primary focus glow
shadows.glow.green; // Success state glow
```

### Border Radius

Consistent corner rounding:

```typescript
import { radius } from "@sandeep-jaiswar/tokens/radius";

radius.sm; // '2px'  - Subtle corners
radius.base; // '4px'  - Standard components
radius.md; // '6px'  - Cards and containers
radius.full; // '9999px' - Circular elements
```

### Z-Index

Layering system for overlays:

```typescript
import { zIndex } from "@sandeep-jaiswar/tokens/z-index";

zIndex.dropdown; // 1000 - Dropdown menus
zIndex.modal; // 1050 - Modal dialogs
zIndex.tooltip; // 1090 - Tooltips (highest)
```

## 🎨 CSS Variables

Generate CSS custom properties from tokens:

```typescript
import { generateCSSVariables } from '@sandeep-jaiswar/tokens/css-variables'

// Generate CSS variables
const cssVars = generateCSSVariables()
// Returns: `:root { --color-terminal-black: #000000; ... }`

// Inject into document
const style = document.createElement('style')
style.textContent = cssVars
document.head.appendChild(style)

// Use in CSS
.my-component {
  background: var(--color-terminal-black);
  color: var(--color-terminal-white);
  padding: var(--spacing-4);
}
```

## 🎨 Tailwind CSS Integration

Use the Tailwind preset to integrate all tokens:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require("@sandeep-jaiswar/tokens/tailwind-preset")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // ... other config
};
```

Then use tokens in your components:

```tsx
<div className="bg-terminal-black text-terminal-white p-4">
  <h1 className="text-lg font-semibold text-primary-500">Trading Dashboard</h1>
  <p className="text-sm text-secondary">Real-time market data</p>
</div>
```

## 📚 Token Structure

All tokens use TypeScript's `as const` assertion for:

- **Type Safety** - Exact literal types instead of general string types
- **Autocomplete** - Better IDE support with precise values
- **Immutability** - Tokens cannot be accidentally modified

```typescript
// Token values are exact literal types
const color: "#0068ff" = colors.primary[500]; // ✅ Type-safe
const color2: string = colors.primary[500]; // ✅ Also works
```

## 🔧 Development

```bash
# Build the package
pnpm build

# Watch mode for development
pnpm dev

# Type checking
pnpm type-check

# Linting
pnpm lint

# Clean build artifacts
pnpm clean
```

## 📦 Package Exports

The package provides multiple export paths for optimal tree-shaking:

- `@sandeep-jaiswar/tokens` - Main entry (all tokens)
- `@sandeep-jaiswar/tokens/colors` - Color tokens only
- `@sandeep-jaiswar/tokens/typography` - Typography tokens only
- `@sandeep-jaiswar/tokens/spacing` - Spacing tokens only
- `@sandeep-jaiswar/tokens/shadows` - Shadow tokens only
- `@sandeep-jaiswar/tokens/radius` - Radius tokens only
- `@sandeep-jaiswar/tokens/z-index` - Z-index tokens only
- `@sandeep-jaiswar/tokens/css-variables` - CSS variable generator
- `@sandeep-jaiswar/tokens/tailwind-preset` - Tailwind preset

## 🎯 Design Philosophy

This token system follows Bloomberg Terminal design principles:

- **Dark-First** - Optimized for terminal black backgrounds
- **High Contrast** - Ensures readability in trading environments
- **Professional** - Sharp, precise, enterprise-ready aesthetics
- **Financial Focus** - Semantic colors for gains, losses, and alerts
- **Dense Layouts** - 4px spacing scale for data-rich interfaces

## 📄 License

MIT © Sandeep Jaiswar

## 🔗 Links

- [Repository](https://github.com/sandeep-jaiswar/terminal-ui)
- [Documentation](https://terminal-ui-docs.vercel.app)
- [Component Library](https://www.npmjs.com/package/@sandeep-jaiswar/ui)
