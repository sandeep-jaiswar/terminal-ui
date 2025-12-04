import React from "react";
/**
 * Bloomberg Terminal-inspired DataGrid component for financial trading applications.
 *
 * Features:
 * - Multiple column types (TEXT, NUMBER, CURRENCY, PERCENTAGE, DATE, ENUM)
 * - Sortable columns with visual indicators
 * - Per-column filtering and search
 * - Row selection (single and multi-select)
 * - Resizable columns
 * - Financial styling for positive/negative values
 * - Hover and selection states
 * - Dense layout optimized for financial data
 * - WCAG 2.1 AA compliant accessibility
 *
 * @example
 * ```tsx
 * const columns: Column[] = [
 *   { key: 'symbol', label: 'Symbol', type: 'text', sortable: true },
 *   { key: 'price', label: 'Price', type: 'currency', sortable: true },
 *   { key: 'change', label: 'Change', type: 'percentage', sortable: true },
 * ];
 *
 * const data = [
 *   { id: '1', symbol: 'AAPL', price: 150.25, change: 2.45 },
 *   { id: '2', symbol: 'GOOGL', price: 2750.80, change: -1.2 },
 * ];
 *
 * <DataGrid
 *   columns={columns}
 *   data={data}
 *   rowSelection="multi"
 *   onSelectionChange={handleSelectionChange}
 * />
 * ```
 */
export type ColumnType = "text" | "number" | "currency" | "percentage" | "date" | "enum";
export type SortDirection = "asc" | "desc" | null;
export type RowSelectionMode = "none" | "single" | "multi";
export type DensityMode = "compact" | "normal" | "comfortable";
export interface EnumOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
    color?: string;
}
export interface Column<T = Record<string, unknown>> {
    /** Unique key for the column */
    key: string;
    /** Display label for column header */
    label: string;
    /** Column type for formatting */
    type: ColumnType;
    /** Width in pixels (optional) */
    width?: number;
    /** Minimum width in pixels (for resizing) */
    minWidth?: number;
    /** Whether column is sortable */
    sortable?: boolean;
    /** Whether column is filterable */
    filterable?: boolean;
    /** Whether column is resizable */
    resizable?: boolean;
    /** Alignment of cell content */
    align?: "left" | "center" | "right";
    /** Custom render function */
    render?: (value: unknown, row: T, index: number) => React.ReactNode;
    /** Format function for cell value */
    format?: (value: unknown) => string;
    /** Currency symbol (for currency type) */
    currencySymbol?: string;
    /** Decimal places (for number/currency/percentage) */
    decimalPlaces?: number;
    /** Date format (for date type) */
    dateFormat?: string;
    /** Enum options (for enum type) */
    enumOptions?: EnumOption[];
    /** Whether to highlight positive/negative values */
    financialStyling?: boolean;
    /** Custom className for cells */
    cellClassName?: string | ((value: unknown, row: T) => string);
    /** Custom className for header */
    headerClassName?: string;
}
export interface SortConfig {
    key: string;
    direction: SortDirection;
}
export interface FilterConfig {
    [key: string]: string;
}
export interface DataGridProps<T = Record<string, unknown>> {
    /** Column definitions */
    columns: Column<T>[];
    /** Data rows */
    data: T[];
    /** Unique row key */
    rowKey?: keyof T | ((row: T) => string);
    /** Row selection mode */
    rowSelection?: RowSelectionMode;
    /** Selected row keys */
    selectedRows?: string[];
    /** Callback when selection changes */
    onSelectionChange?: (selectedKeys: string[]) => void;
    /** Sort configuration */
    sortConfig?: SortConfig;
    /** Callback when sort changes */
    onSortChange?: (config: SortConfig) => void;
    /** Filter configuration */
    filterConfig?: FilterConfig;
    /** Callback when filter changes */
    onFilterChange?: (config: FilterConfig) => void;
    /** Callback when row is clicked */
    onRowClick?: (row: T, index: number) => void;
    /** Callback when row is double-clicked */
    onRowDoubleClick?: (row: T, index: number) => void;
    /** Whether to show header */
    showHeader?: boolean;
    /** Whether to show filters */
    showFilters?: boolean;
    /** Density mode */
    density?: DensityMode;
    /** Whether to show hover effects */
    hoverable?: boolean;
    /** Whether to show striped rows */
    striped?: boolean;
    /** Whether to show borders */
    bordered?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Empty state message */
    emptyMessage?: string;
    /** Custom className */
    className?: string;
    /** Test ID */
    "data-testid"?: string;
}
export declare const DataGrid: {
    <T extends Record<string, unknown>>({ columns, data, rowKey, rowSelection, selectedRows, onSelectionChange, sortConfig, onSortChange, filterConfig, onFilterChange, onRowClick, onRowDoubleClick, showHeader, showFilters, density, hoverable, striped, bordered, loading, emptyMessage, className, "data-testid": testId, }: DataGridProps<T>): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=DataGrid.d.ts.map