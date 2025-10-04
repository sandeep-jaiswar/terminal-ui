# @sandeep-jaiswar/utils

Shared utility functions for the [@sandeep-jaiswar/ui](https://github.com/sandeep-jaiswar/terminal-ui) Bloomberg Terminal-inspired UI component library.

## 📦 Installation

```bash
npm install @sandeep-jaiswar/utils
# or
pnpm add @sandeep-jaiswar/utils
# or
yarn add @sandeep-jaiswar/utils
```

## 🎯 Features

- **Class Name Utilities** - Tailwind CSS class merging with `clsx` and `tailwind-merge`
- **Accessibility Utilities** - WCAG 2.1 AA compliant screen reader and focus management
- **Financial Formatting** - Currency, percentage, and market value formatters
- **React Hooks** - Custom hooks for localStorage, debouncing, and keyboard shortcuts
- **Type Utilities** - TypeScript utility types for common patterns
- **Tree-shakeable** - Import only what you need
- **TypeScript-first** - Full type safety with comprehensive JSDoc

## 📖 Usage

### Class Name Utilities

```typescript
import { cn, cnVariants, cnFinancial } from "@sandeep-jaiswar/utils";

// Basic class merging with Tailwind conflict resolution
cn("px-4 py-2", "bg-blue-500"); // 'px-4 py-2 bg-blue-500'
cn("px-4", "px-6"); // 'px-6' (Tailwind classes merged)
cn("btn", isActive && "btn-active"); // Conditional classes

// Variant-based styling
const variants = {
  size: { sm: "text-sm px-2", md: "text-base px-4" },
  color: { primary: "bg-blue-500", danger: "bg-red-500" },
};
cnVariants("btn", variants, { size: "md", color: "primary" });
// Returns: 'btn text-base px-4 bg-blue-500'

// Financial-specific styling
cnFinancial({ positive: true, large: true });
// Returns: 'text-success-500 font-bold'
```

### Accessibility Utilities

```typescript
import {
  announceToScreenReader,
  announceFinancialChange,
  manageFocus,
  prefersReducedMotion,
  generateId,
} from "@sandeep-jaiswar/utils";

// Announce messages to screen readers
announceToScreenReader("Order executed successfully", "assertive");

// Announce financial data changes
announceFinancialChange("AAPL", 150.25, 148.8, "price", "USD");
// Announces: "AAPL price changed from $148.80 to $150.25, up $1.45"

// Manage focus in modals
const modal = document.getElementById("modal");
manageFocus(modal, true); // Trap focus
manageFocus(modal, false); // Release focus

// Check for reduced motion preference
if (!prefersReducedMotion()) {
  // Enable animations
}

// Generate unique IDs for form elements
const inputId = generateId("input"); // 'input-1-1234567890'
```

### Financial Formatting

```typescript
import {
  formatCurrency,
  formatPercentage,
  formatLargeNumber,
  formatPriceChange,
  formatMarketValue,
} from "@sandeep-jaiswar/utils";

// Format currency
formatCurrency(1234.56); // '$1,234.56'
formatCurrency(1234.56, "EUR"); // '€1,234.56'

// Format percentages
formatPercentage(5.5); // '5.50%'
formatPercentage(-2.34); // '-2.34%'

// Format large numbers
formatLargeNumber(1234567890); // '1.2B'
formatLargeNumber(5000000); // '5.0M'

// Format price changes
formatPriceChange(5.25); // '+$5.25'
formatPriceChange(-3.5); // '-$3.50'

// Format market values
formatMarketValue(1234567890); // '$1.23B'
formatMarketValue(5600000000000); // '$5.60T'
```

### React Hooks

```typescript
import { useLocalStorage, useDebounce, useKeyboard } from '@sandeep-jaiswar/utils'

// Persist state in localStorage
function MyComponent() {
  const [theme, setTheme] = useLocalStorage('terminal-theme', 'dark')
  const [watchlist, setWatchlist] = useLocalStorage<string[]>('watchlist', ['AAPL'])

  return <div>Theme: {theme}</div>
}

// Debounce values (e.g., for search)
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  useEffect(() => {
    // Only runs 500ms after user stops typing
    searchAPI(debouncedSearch)
  }, [debouncedSearch])

  return <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
}

// Keyboard shortcuts
function TradingApp() {
  useKeyboard('b', handleBuy, { ctrl: true })    // Ctrl+B for buy
  useKeyboard('s', handleSell, { ctrl: true })   // Ctrl+S for sell
  useKeyboard('Escape', handleClose)              // Escape to close

  return <div>Trading App</div>
}
```

### Type Utilities

```typescript
import type {
  PartialBy,
  RequiredBy,
  RequireAtLeastOne,
  PriceDirection,
  FinancialDataPoint,
} from "@sandeep-jaiswar/utils";

// Make specific properties optional
type User = { name: string; age: number; email: string };
type PartialUser = PartialBy<User, "email">; // email is now optional

// Financial types
const priceData: FinancialDataPoint = {
  timestamp: Date.now(),
  value: 150.25,
  volume: 1000000,
};

const direction: PriceDirection = "up"; // 'up' | 'down' | 'neutral'
```

## 📦 Tree-shaking

Import only what you need for optimal bundle size:

```typescript
// Import specific utilities
import { cn } from "@sandeep-jaiswar/utils/cn";
import { formatCurrency } from "@sandeep-jaiswar/utils/format";
import { useDebounce } from "@sandeep-jaiswar/utils/hooks";

// Or import from main entry point (still tree-shakeable)
import { cn, formatCurrency, useDebounce } from "@sandeep-jaiswar/utils";
```

## 🧪 Testing

All utilities are thoroughly tested with Jest:

```bash
# Run tests
pnpm test

# Watch mode
pnpm test:watch
```

## 📝 API Reference

### Class Names

- `cn(...inputs: ClassValue[]): string` - Merge class names with Tailwind CSS conflict resolution
- `cnVariants(base, variants, selected, className?)` - Apply variant-based classes
- `cnFinancial(options)` - Apply financial-specific styling (positive/negative/critical)

### Accessibility

- `announceToScreenReader(message, priority?, timeout?)` - Announce to screen readers
- `announceFinancialChange(symbol, current, previous, type?, currency?)` - Announce financial changes
- `manageFocus(element, shouldTrap)` - Manage focus trapping in modals
- `prefersReducedMotion(): boolean` - Check for reduced motion preference
- `generateId(prefix?): string` - Generate unique IDs

### Formatting

- `formatCurrency(value, currency?, options?)` - Format currency values
- `formatPercentage(value, options?)` - Format percentage values
- `formatLargeNumber(value)` - Format with K/M/B/T abbreviations
- `formatPriceChange(value, options?)` - Format with +/- prefix
- `formatMarketValue(value)` - Format market cap/volume

### Hooks

- `useLocalStorage<T>(key, initialValue)` - Persist state in localStorage
- `useDebounce<T>(value, delay)` - Debounce value changes
- `useKeyboard(key, callback, options?)` - Handle keyboard shortcuts

## 🤝 Contributing

This package is part of the [@sandeep-jaiswar/ui](https://github.com/sandeep-jaiswar/terminal-ui) monorepo. Please see the main repository for contribution guidelines.

## 📄 License

MIT © Sandeep Jaiswar
