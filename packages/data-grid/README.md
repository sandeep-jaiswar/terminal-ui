# @sandeep-jaiswar/data-grid

Bloomberg Terminal-inspired DataGrid component for financial trading applications.

## Features

- **Multiple Column Types**: TEXT, NUMBER, CURRENCY, PERCENTAGE, DATE, ENUM
- **Sortable Columns**: Click column headers to sort with visual indicators
- **Per-Column Filtering**: Filter data by any column with search inputs
- **Row Selection**: Single or multi-select with checkboxes
- **Density Modes**: Compact, normal, and comfortable layouts
- **Financial Styling**: Automatic color coding for positive/negative values
- **Hover States**: Interactive hover effects on rows
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **Bloomberg Style**: Dark-first design with terminal aesthetics

## Installation

```bash
pnpm add @sandeep-jaiswar/data-grid
# or
npm install @sandeep-jaiswar/data-grid
```

## Basic Usage

```tsx
import { DataGrid, Column } from "@sandeep-jaiswar/data-grid";

const columns: Column[] = [
  { key: "symbol", label: "Symbol", type: "text", sortable: true },
  { key: "price", label: "Price", type: "currency", align: "right" },
  { key: "change", label: "Change", type: "percentage", financialStyling: true },
];

const data = [
  { id: "1", symbol: "AAPL", price: 150.25, change: 2.45 },
  { id: "2", symbol: "GOOGL", price: 2750.80, change: -1.2 },
];

function MyComponent() {
  return (
    <DataGrid
      columns={columns}
      data={data}
      showHeader={true}
      bordered={true}
      hoverable={true}
    />
  );
}
```

## Column Types

### TEXT
Basic text column with optional sorting and filtering.

```tsx
{
  key: "symbol",
  label: "Symbol",
  type: "text",
  sortable: true,
  filterable: true,
  width: 120,
}
```

### NUMBER
Numeric column with configurable decimal places.

```tsx
{
  key: "volume",
  label: "Volume",
  type: "number",
  align: "right",
  decimalPlaces: 0,
  format: (value) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(2)}M`;
    return String(value);
  },
}
```

### CURRENCY
Currency column with symbol and decimal configuration.

```tsx
{
  key: "price",
  label: "Price",
  type: "currency",
  align: "right",
  currencySymbol: "$",
  decimalPlaces: 2,
}
```

### PERCENTAGE
Percentage column with automatic +/- prefix and financial styling.

```tsx
{
  key: "change",
  label: "Change",
  type: "percentage",
  align: "right",
  financialStyling: true, // Green for positive, red for negative
  decimalPlaces: 2,
}
```

### DATE
Date column with localized formatting.

```tsx
{
  key: "lastUpdate",
  label: "Last Update",
  type: "date",
  align: "center",
}
```

### ENUM
Enum column with custom rendering for status badges.

```tsx
{
  key: "status",
  label: "Status",
  type: "enum",
  enumOptions: [
    { value: "active", label: "Active", color: "#4af6c3" },
    { value: "pending", label: "Pending", color: "#fb8b1e" },
    { value: "closed", label: "Closed", color: "#ff433d" },
  ],
  render: (value) => (
    <Badge variant={value === "active" ? "success" : "warning"}>
      {value}
    </Badge>
  ),
}
```

## Row Selection

### Single Selection

```tsx
function MyComponent() {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  return (
    <DataGrid
      columns={columns}
      data={data}
      rowSelection="single"
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
    />
  );
}
```

### Multi Selection

```tsx
function MyComponent() {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  return (
    <DataGrid
      columns={columns}
      data={data}
      rowSelection="multi"
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
    />
  );
}
```

## Sorting

```tsx
function MyComponent() {
  const [sortConfig, setSortConfig] = React.useState({
    key: "price",
    direction: "desc" as const,
  });

  return (
    <DataGrid
      columns={columns}
      data={data}
      sortConfig={sortConfig}
      onSortChange={setSortConfig}
    />
  );
}
```

## Filtering

```tsx
function MyComponent() {
  const [filters, setFilters] = React.useState({});

  return (
    <DataGrid
      columns={columns}
      data={data}
      filterConfig={filters}
      onFilterChange={setFilters}
      showFilters={true}
    />
  );
}
```

## Density Modes

```tsx
<DataGrid
  columns={columns}
  data={data}
  density="compact" // 'compact' | 'normal' | 'comfortable'
/>
```

## Advanced Example

```tsx
import { DataGrid, Column } from "@sandeep-jaiswar/data-grid";
import React from "react";

function TradingDataGrid() {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
  const [sortConfig, setSortConfig] = React.useState({
    key: "change",
    direction: "desc" as const,
  });
  const [filters, setFilters] = React.useState({});

  const columns: Column[] = [
    {
      key: "symbol",
      label: "Symbol",
      type: "text",
      sortable: true,
      filterable: true,
      width: 100,
    },
    {
      key: "price",
      label: "Price",
      type: "currency",
      sortable: true,
      align: "right",
      currencySymbol: "$",
      decimalPlaces: 2,
    },
    {
      key: "change",
      label: "%CHG",
      type: "percentage",
      sortable: true,
      align: "right",
      financialStyling: true,
      decimalPlaces: 2,
    },
    {
      key: "volume",
      label: "Volume",
      type: "number",
      sortable: true,
      align: "right",
      format: (value) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(2)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
        return String(value);
      },
    },
  ];

  const data = [
    { id: "1", symbol: "AAPL", price: 150.25, change: 2.45, volume: 1200000 },
    { id: "2", symbol: "GOOGL", price: 2750.8, change: -1.2, volume: 2500000 },
    { id: "3", symbol: "TSLA", price: 980.1, change: -1.8, volume: 3200000 },
  ];

  return (
    <div>
      <DataGrid
        columns={columns}
        data={data}
        rowSelection="multi"
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
        sortConfig={sortConfig}
        onSortChange={setSortConfig}
        filterConfig={filters}
        onFilterChange={setFilters}
        showFilters={true}
        showHeader={true}
        bordered={true}
        hoverable={true}
        density="compact"
        onRowClick={(row) => console.log("Row clicked:", row)}
      />
    </div>
  );
}
```

## Props

### DataGridProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Column[]` | **required** | Column definitions |
| `data` | `T[]` | **required** | Data rows |
| `rowKey` | `keyof T \| ((row: T) => string)` | `"id"` | Unique row key |
| `rowSelection` | `"none" \| "single" \| "multi"` | `"none"` | Row selection mode |
| `selectedRows` | `string[]` | `[]` | Selected row keys |
| `onSelectionChange` | `(keys: string[]) => void` | - | Selection change callback |
| `sortConfig` | `SortConfig` | - | Sort configuration |
| `onSortChange` | `(config: SortConfig) => void` | - | Sort change callback |
| `filterConfig` | `FilterConfig` | `{}` | Filter configuration |
| `onFilterChange` | `(config: FilterConfig) => void` | - | Filter change callback |
| `onRowClick` | `(row: T, index: number) => void` | - | Row click callback |
| `onRowDoubleClick` | `(row: T, index: number) => void` | - | Row double-click callback |
| `showHeader` | `boolean` | `true` | Show header row |
| `showFilters` | `boolean` | `false` | Show filter inputs |
| `density` | `"compact" \| "normal" \| "comfortable"` | `"normal"` | Row height density |
| `hoverable` | `boolean` | `true` | Enable hover effects |
| `striped` | `boolean` | `false` | Striped row background |
| `bordered` | `boolean` | `true` | Show borders |
| `loading` | `boolean` | `false` | Loading state |
| `emptyMessage` | `string` | `"No data available"` | Empty state message |
| `className` | `string` | - | Additional CSS classes |

### Column

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `string` | **required** | Unique column key |
| `label` | `string` | **required** | Column header label |
| `type` | `ColumnType` | **required** | Column type |
| `width` | `number` | - | Column width in pixels |
| `minWidth` | `number` | - | Minimum width for resizing |
| `sortable` | `boolean` | `false` | Enable sorting |
| `filterable` | `boolean` | `false` | Enable filtering |
| `align` | `"left" \| "center" \| "right"` | `"left"` | Cell alignment |
| `render` | `(value, row, index) => ReactNode` | - | Custom cell renderer |
| `format` | `(value) => string` | - | Value formatter |
| `currencySymbol` | `string` | `"$"` | Currency symbol |
| `decimalPlaces` | `number` | `2` | Decimal places |
| `enumOptions` | `EnumOption[]` | - | Enum options |
| `financialStyling` | `boolean` | `false` | Color code positive/negative |

## Styling

The DataGrid uses Tailwind CSS classes from the Bloomberg Terminal design system. Key color classes:

- `text-success-500` - Green for positive values
- `text-danger-300` - Red for negative values
- `bg-terminal-black` - Terminal black background
- `border-terminal-medium-gray` - Medium gray borders
- `font-terminal-mono` - Monospace terminal font

## Accessibility

The DataGrid follows WCAG 2.1 AA standards:

- **Keyboard Navigation**: Full keyboard support for sorting, filtering, and selection
- **Screen Readers**: ARIA labels and live regions for dynamic content
- **Focus Management**: Clear focus indicators
- **Color Contrast**: 4.5:1 minimum contrast ratio

## License

MIT
