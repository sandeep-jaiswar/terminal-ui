# @sandeep-jaiswar/icons

Icon library for Bloomberg Terminal-inspired UI component library. This package provides a comprehensive set of SVG icons optimized for financial trading applications.

## 📦 Installation

```bash
# Using pnpm (recommended)
pnpm add @sandeep-jaiswar/icons

# Using npm
npm install @sandeep-jaiswar/icons

# Using yarn
yarn add @sandeep-jaiswar/icons
```

## 🚀 Usage

```tsx
import { Icon } from '@sandeep-jaiswar/icons';

// Basic usage
<Icon name="trending-up" />

// With custom size
<Icon name="buy" size={32} />

// With custom color using Tailwind classes
<Icon name="trending-up" className="text-success-500" />

// With accessibility label
<Icon name="alert-triangle" aria-label="Warning" />
```

## 🎨 Available Icons

### Navigation Icons
- `chevron-up` - Up arrow
- `chevron-down` - Down arrow
- `chevron-left` - Left arrow
- `chevron-right` - Right arrow

### Financial Icons
- `trending-up` - Upward trend indicator (gains)
- `trending-down` - Downward trend indicator (losses)
- `dollar-sign` - Currency symbol

### Trading Icons
- `buy` - Buy action indicator
- `sell` - Sell action indicator
- `alert-triangle` - Warning alert
- `alert-circle` - Information alert

### UI Icons
- `search` - Search functionality
- `close` - Close/dismiss action
- `menu` - Menu toggle
- `settings` - Settings/configuration
- `check` - Success/confirmation
- `info` - Information indicator

### Data Icons
- `chart-line` - Line chart
- `chart-bar` - Bar chart
- `refresh` - Refresh/reload
- `filter` - Filter data

## 💡 Examples

### Price Movement Indicators

```tsx
import { Icon } from '@sandeep-jaiswar/icons';

function PriceChange({ symbol, change }) {
  const isPositive = change > 0;
  
  return (
    <div>
      <span>{symbol}</span>
      <Icon 
        name={isPositive ? "trending-up" : "trending-down"}
        size={20}
        className={isPositive ? "text-success-500" : "text-danger-300"}
      />
      <span>{change}%</span>
    </div>
  );
}
```

### Trading Actions

```tsx
import { Icon } from '@sandeep-jaiswar/icons';

function TradeButton({ action }) {
  return (
    <button>
      <Icon 
        name={action === 'buy' ? 'buy' : 'sell'}
        size={24}
        className={action === 'buy' ? 'text-success-500' : 'text-danger-300'}
      />
      {action === 'buy' ? 'Buy' : 'Sell'}
    </button>
  );
}
```

### Search Input

```tsx
import { Icon } from '@sandeep-jaiswar/icons';

function SearchBar() {
  return (
    <div className="relative">
      <Icon 
        name="search" 
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-terminal-light-gray"
      />
      <input 
        type="text"
        placeholder="Search..."
        className="pl-10"
      />
    </div>
  );
}
```

## 🎯 Design Philosophy

All icons follow Bloomberg Terminal design principles:

- **Stroke-based Design** - High contrast outlines for terminal environments
- **24x24 ViewBox** - Consistent sizing and scalability
- **Current Color** - Inherits text color for easy theming
- **Semantic Naming** - Clear, financial-specific icon names
- **Accessibility** - Proper ARIA attributes support

## 📐 Props

The `Icon` component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | required | Name of the icon to render |
| `size` | `number` | `24` | Size of the icon in pixels |
| `className` | `string` | `''` | Additional CSS classes |
| `...props` | `SVGProps` | - | Any valid SVG element props |

## 🎨 TypeScript Support

Full TypeScript support with type-safe icon names:

```tsx
import type { IconName, IconProps } from '@sandeep-jaiswar/icons';

// Type-safe icon name
const iconName: IconName = 'trending-up';

// Type-safe component props
const iconProps: IconProps = {
  name: 'buy',
  size: 32,
  className: 'text-success-500'
};
```

## 🔧 Customization

Icons can be customized using:

1. **Size prop** - Control icon dimensions
2. **className prop** - Apply Tailwind classes or custom CSS
3. **Standard SVG props** - Pass any SVG attribute (stroke-width, opacity, etc.)

```tsx
<Icon 
  name="trending-up"
  size={48}
  className="text-success-500 hover:text-success-400"
  strokeWidth={3}
  opacity={0.8}
/>
```

## ♿ Accessibility

Icons are accessible by default:

- `aria-hidden="true"` when no label is provided (decorative)
- Support for custom `aria-label` for meaningful icons
- High contrast design for better visibility

```tsx
// Decorative icon (hidden from screen readers)
<Icon name="trending-up" />

// Meaningful icon (announced to screen readers)
<Icon name="alert-triangle" aria-label="Warning: High volatility" />
```

## 📄 License

MIT © Sandeep Jaiswar

## 🔗 Links

- [Repository](https://github.com/sandeep-jaiswar/terminal-ui)
- [Documentation](https://terminal-ui-docs.vercel.app)
- [Component Library](https://www.npmjs.com/package/@sandeep-jaiswar/ui)
