# @sandeep-jaiswar/ui - Bloomberg Terminal-Inspired UI Component Library

A professional, Bloomberg Terminal-inspired React UI component library built with TypeScript, Tailwind CSS, and Turborepo. Optimized for financial trading applications with dark-first design, accessibility compliance, and enterprise-ready features.

## 🚀 Features

- 🏦 **Bloomberg Terminal Aesthetic** - Dark-first design with high contrast colors
- ♿ **Accessibility First** - WCAG 2.1 AA compliant with financial-specific a11y features
- 📦 **Monorepo Architecture** - Turborepo for optimized builds and caching
- 🎨 **Design Tokens** - Consistent theming across all components
- 🔥 **Performance Optimized** - Tree-shakeable exports and minimal bundle size
- 📚 **Comprehensive Documentation** - Storybook with financial use case examples

## 🏗️ Monorepo Structure

This Turborepo includes the following packages and applications with **component-per-package architecture** for optimal tree-shaking and granular versioning:

### Apps

- `apps/docs` - Storybook documentation and component showcase

### Foundation Packages

- `packages/tokens` - Design tokens (colors, spacing, typography)
- `packages/theme` - Theme provider and context
- `packages/utils` - Shared utility functions (formatCurrency, cn, a11y helpers)
- `packages/icons` - Icon library

### Component Packages

- `packages/button` - Button component
- `packages/input` - Input, NumberInput, SearchInput components
- `packages/badge` - Badge component
- `packages/card` - Card component
- `packages/modal` - Modal component
- `packages/navigation` - Sidebar, Tabs, Breadcrumb components
- `packages/data-grid` - DataGrid component
- `packages/charts` - Sparkline, LineChart, CandlestickChart components
- `packages/trading` - Watchlist, Portfolio, OrderBook components
- `packages/dashboard` - Dashboard, Widget components

### Meta Package

- `packages/ui` - Re-exports all components for convenience imports

### Tools

- `tools/eslint-config` - Shared ESLint configuration
- `tools/tsconfig` - Shared TypeScript configurations

## 🛠️ Tech Stack

- **Framework**: React 18+ with TypeScript 5+
- **Styling**: Tailwind CSS with component classes
- **Build Tool**: Tsup for fast builds
- **Monorepo**: Turborepo for optimized builds
- **Documentation**: Storybook 7+
- **Package Manager**: pnpm (required)

## 📦 Installation

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm@8.15.0

# Install all dependencies
pnpm install
```

## 🔧 Development Commands

```bash
# Build all packages
pnpm build

# Start development mode (with hot reload)
pnpm dev

# Run linting across monorepo
pnpm lint

# Type check all packages
pnpm type-check

# Clean all build outputs
pnpm clean

# Format all files
pnpm format

# Check formatting
pnpm format:check
```

## 📖 Using the Library

### Option 1: Granular Imports (Recommended for Optimal Bundle Size)

Import individual components for the best tree-shaking and smallest bundle size:

```tsx
// Import only what you need from individual packages
import { Button } from "@sandeep-jaiswar/button";
import { Input, NumberInput } from "@sandeep-jaiswar/input";
import { DataGrid } from "@sandeep-jaiswar/data-grid";
import { ThemeProvider } from "@sandeep-jaiswar/theme";
import { formatCurrency } from "@sandeep-jaiswar/utils";

function TradingInterface() {
  return (
    <ThemeProvider theme="dark">
      <DataGrid data={stocks} />
      <Input placeholder="Enter symbol" />
      <Button onClick={() => console.log("Buy order placed!")}>
        Buy 100 AAPL @ {formatCurrency(150.25)}
      </Button>
    </ThemeProvider>
  );
}
```

### Option 2: Convenience Imports (Full Library)

Import everything from the meta package for quick prototyping:

```tsx
// Import from meta package
import {
  Button,
  Input,
  DataGrid,
  ThemeProvider,
  formatCurrency,
} from "@sandeep-jaiswar/ui";

function TradingInterface() {
  return (
    <ThemeProvider theme="dark">
      <DataGrid data={stocks} />
      <Input placeholder="Enter symbol" />
      <Button onClick={() => console.log("Buy order placed!")}>
        Buy 100 AAPL @ {formatCurrency(150.25)}
      </Button>
    </ThemeProvider>
  );
}
```

### Available Component Packages

- `@sandeep-jaiswar/button` - Button component
- `@sandeep-jaiswar/input` - Input components
- `@sandeep-jaiswar/badge` - Badge component
- `@sandeep-jaiswar/card` - Card component
- `@sandeep-jaiswar/modal` - Modal component
- `@sandeep-jaiswar/navigation` - Navigation components
- `@sandeep-jaiswar/data-grid` - DataGrid component
- `@sandeep-jaiswar/charts` - Chart components
- `@sandeep-jaiswar/trading` - Trading-specific components
- `@sandeep-jaiswar/dashboard` - Dashboard components
- `@sandeep-jaiswar/theme` - Theme provider
- `@sandeep-jaiswar/tokens` - Design tokens
- `@sandeep-jaiswar/utils` - Utility functions
- `@sandeep-jaiswar/icons` - Icon library

## 🏗️ Turborepo

[Turborepo](https://turborepo.com) is a high-performance build system for JavaScript and TypeScript codebases. It provides fast, incremental builds with zero-configuration caching.

### Build Caching

Turborepo caches the output of all tasks, meaning:

- Unchanged packages are never rebuilt
- Full turbo mode achieves subsecond builds
- Local caching works out of the box

Example cache performance:

```bash
# First build
pnpm build
# Time: ~30s

# Second build (with cache)
pnpm build
# Time: ~120ms >>> FULL TURBO
```

## 📦 Package Architecture

### Compilation

All packages use `tsup` for fast TypeScript compilation with `esbuild`. Each package exports:

- **CommonJS** (`dist/index.js`) - for Node.js environments
- **ESM** (`dist/index.mjs`) - for modern bundlers
- **TypeScript Definitions** (`dist/index.d.ts`) - for type safety

### Exports Configuration

Packages use conditional exports for optimal tree-shaking:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  }
}
```

## 🎨 Design System

### Color Palette

- `terminal-black` - Primary background (#000000)
- `terminal-blue` - Primary actions (#0068ff)
- `terminal-green` - Success/gains (#4af6c3)
- `terminal-red` - Danger/losses (#ff433d)
- `terminal-orange` - Warnings (#fb8b1e)

### Typography

- **Font Families**: SF Mono (monospace), Inter (sans-serif)
- **Sizes**: xs (10px), sm (12px), base (14px), lg (16px), xl (18px)

### Spacing System

Based on 4px scale: 1 (4px), 2 (8px), 3 (12px), 4 (16px), etc.

## 📚 Storybook

Storybook provides a development environment for building and testing components in isolation.

```bash
# Start Storybook dev server
cd apps/docs
pnpm dev

# Build static Storybook site
pnpm build
```

Visit http://localhost:6006 to view the component library.

## 🧪 Testing

Each package should include comprehensive tests:

- Unit tests with Jest + React Testing Library
- Accessibility tests with jest-axe
- Visual regression tests with Chromatic

## 📝 Versioning & Publishing

This monorepo uses [Changesets](https://github.com/changesets/changesets) for version management.

### Creating a Changeset

```bash
pnpm changeset
```

Follow the prompts to:

1. Select packages to include
2. Choose version bump type (major, minor, patch)
3. Write a summary of changes

### Publishing Packages

```bash
# Update versions based on changesets
pnpm version-packages

# Build, test, and publish
pnpm release
```

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes with tests
3. Run `pnpm lint` and `pnpm build`
4. Create a changeset with `pnpm changeset`
5. Submit a pull request

## 📄 License

MIT

## 👨‍💻 Author

Sandeep Jaiswar <sandeep.jaiswar.dev@gmail.com>

---

Built with ❤️ for the financial trading community
