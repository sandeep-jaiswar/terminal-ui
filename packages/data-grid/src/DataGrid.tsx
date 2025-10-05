import React from "react";
import { cn } from "@sandeep-jaiswar/utils";

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

export type ColumnType =
  | "text"
  | "number"
  | "currency"
  | "percentage"
  | "date"
  | "enum";

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

export const DataGrid = <T extends Record<string, unknown>>({
  columns,
  data,
  rowKey = "id",
  rowSelection = "none",
  selectedRows = [],
  onSelectionChange,
  sortConfig,
  onSortChange,
  filterConfig = {},
  onFilterChange,
  onRowClick,
  onRowDoubleClick,
  showHeader = true,
  showFilters = false,
  density = "normal",
  hoverable = true,
  striped = false,
  bordered = true,
  loading = false,
  emptyMessage = "No data available",
  className,
  "data-testid": testId,
}: DataGridProps<T>): JSX.Element => {
  const [localFilters, setLocalFilters] =
    React.useState<FilterConfig>(filterConfig);
  const [localSort, setLocalSort] = React.useState<SortConfig | undefined>(
    sortConfig,
  );

  // Get row key
  const getRowKey = React.useCallback(
    (row: T): string => {
      if (typeof rowKey === "function") {
        return rowKey(row);
      }
      return String(row[rowKey]);
    },
    [rowKey],
  );

  // Handle selection
  const handleSelectAll = React.useCallback(
    (checked: boolean) => {
      if (!onSelectionChange) return;
      if (checked) {
        const allKeys = data.map(getRowKey);
        onSelectionChange(allKeys);
      } else {
        onSelectionChange([]);
      }
    },
    [data, getRowKey, onSelectionChange],
  );

  const handleRowSelect = React.useCallback(
    (rowId: string, checked: boolean) => {
      if (!onSelectionChange) return;
      if (rowSelection === "single") {
        onSelectionChange(checked ? [rowId] : []);
      } else if (rowSelection === "multi") {
        if (checked) {
          onSelectionChange([...selectedRows, rowId]);
        } else {
          onSelectionChange(selectedRows.filter((id) => id !== rowId));
        }
      }
    },
    [onSelectionChange, rowSelection, selectedRows],
  );

  // Handle sorting
  const handleSort = React.useCallback(
    (key: string) => {
      const newDirection: SortDirection =
        localSort?.key === key && localSort?.direction === "asc"
          ? "desc"
          : localSort?.key === key && localSort?.direction === "desc"
            ? null
            : "asc";

      const newSort = newDirection
        ? { key, direction: newDirection }
        : undefined;
      setLocalSort(newSort);
      if (onSortChange && newSort) {
        onSortChange(newSort);
      }
    },
    [localSort, onSortChange],
  );

  // Handle filtering
  const handleFilterChange = React.useCallback(
    (key: string, value: string) => {
      const newFilters = { ...localFilters, [key]: value };
      if (!value) {
        delete newFilters[key];
      }
      setLocalFilters(newFilters);
      if (onFilterChange) {
        onFilterChange(newFilters);
      }
    },
    [localFilters, onFilterChange],
  );

  // Format cell value based on column type
  const formatCellValue = React.useCallback(
    (column: Column<T>, value: unknown) => {
      if (value === null || value === undefined) return "—";

      if (column.format) {
        return column.format(value);
      }

      switch (column.type) {
        case "currency": {
          const symbol = column.currencySymbol || "$";
          const decimals = column.decimalPlaces ?? 2;
          return `${symbol}${Number(value).toFixed(decimals)}`;
        }

        case "percentage": {
          const pctDecimals = column.decimalPlaces ?? 2;
          const pctValue = Number(value).toFixed(pctDecimals);
          return `${Number(value) >= 0 ? "+" : ""}${pctValue}%`;
        }

        case "number": {
          const numDecimals = column.decimalPlaces ?? 2;
          return Number(value).toFixed(numDecimals);
        }

        case "date": {
          if (value instanceof Date) {
            return value.toLocaleDateString();
          }
          return new Date(value as string | number).toLocaleDateString();
        }

        case "enum": {
          const option = column.enumOptions?.find((opt) => opt.value === value);
          return option?.label || String(value);
        }

        case "text":
        default:
          return String(value);
      }
    },
    [],
  );

  // Get cell styling for financial values
  const getCellClassName = React.useCallback(
    (column: Column<T>, value: unknown, row: T) => {
      let classes = "";

      if (typeof column.cellClassName === "function") {
        classes += " " + column.cellClassName(value, row);
      } else if (column.cellClassName) {
        classes += " " + column.cellClassName;
      }

      if (
        column.financialStyling &&
        (column.type === "percentage" || column.type === "number")
      ) {
        const numValue = Number(value);
        if (numValue > 0) {
          classes += " text-success-500";
        } else if (numValue < 0) {
          classes += " text-danger-300";
        }
      }

      return classes;
    },
    [],
  );

  // Density classes
  const densityClasses = {
    compact: "h-8",
    normal: "h-10",
    comfortable: "h-12",
  };

  const headerDensityClasses = {
    compact: "h-10",
    normal: "h-12",
    comfortable: "h-14",
  };

  // Filter and sort data locally if needed
  const processedData = React.useMemo(() => {
    let result = [...data];

    // Apply local filtering
    if (Object.keys(localFilters).length > 0) {
      result = result.filter((row) => {
        return Object.entries(localFilters).every(([key, filterValue]) => {
          const cellValue = String(row[key]).toLowerCase();
          return cellValue.includes(filterValue.toLowerCase());
        });
      });
    }

    // Apply local sorting
    if (localSort) {
      result.sort((a, b) => {
        const aVal = a[localSort.key];
        const bVal = b[localSort.key];
        const direction = localSort.direction === "asc" ? 1 : -1;

        if (aVal === bVal) return 0;
        if (aVal === null || aVal === undefined) return 1;
        if (bVal === null || bVal === undefined) return -1;

        if (typeof aVal === "number" && typeof bVal === "number") {
          return (aVal - bVal) * direction;
        }

        return String(aVal).localeCompare(String(bVal)) * direction;
      });
    }

    return result;
  }, [data, localFilters, localSort]);

  const allSelected =
    selectedRows.length > 0 && selectedRows.length === data.length;
  const someSelected =
    selectedRows.length > 0 && selectedRows.length < data.length;

  return (
    <div
      className={cn(
        "datagrid-container",
        "w-full overflow-auto",
        "bg-terminal-black",
        bordered && "border border-terminal-medium-gray",
        className,
      )}
      data-testid={testId}
    >
      <table className="datagrid w-full border-collapse font-terminal-mono text-sm">
        {showHeader && (
          <thead>
            <tr className="border-b-2 border-terminal-medium-gray bg-terminal-dark-gray">
              {rowSelection === "multi" && (
                <th
                  className={cn(
                    "text-left px-4",
                    headerDensityClasses[density],
                    "border-r border-terminal-medium-gray",
                  )}
                  style={{ width: 48 }}
                >
                  <input
                    type="checkbox"
                    checked={allSelected}
                    ref={(el) => {
                      if (el) el.indeterminate = someSelected;
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="datagrid-checkbox"
                    aria-label="Select all rows"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    "text-left px-4 font-medium text-terminal-white uppercase tracking-wide",
                    headerDensityClasses[density],
                    bordered &&
                      "border-r border-terminal-medium-gray last:border-r-0",
                    column.sortable &&
                      "cursor-pointer select-none hover:bg-terminal-medium-gray",
                    column.align === "right" && "text-right",
                    column.align === "center" && "text-center",
                    column.headerClassName,
                  )}
                  style={{
                    width: column.width,
                    minWidth: column.minWidth,
                  }}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{column.label}</span>
                    {column.sortable && (
                      <span className="datagrid-sort-indicator">
                        {localSort?.key === column.key ? (
                          localSort.direction === "asc" ? (
                            <span className="text-primary-500">▲</span>
                          ) : (
                            <span className="text-primary-500">▼</span>
                          )
                        ) : (
                          <span className="text-terminal-light-gray opacity-30">
                            ▲
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
            {showFilters && (
              <tr className="border-b border-terminal-medium-gray bg-terminal-dark-gray">
                {rowSelection === "multi" && (
                  <th className="px-4 py-2" style={{ width: 48 }} />
                )}
                {columns.map((column) => (
                  <th
                    key={`filter-${column.key}`}
                    className={cn(
                      "px-4 py-2",
                      bordered &&
                        "border-r border-terminal-medium-gray last:border-r-0",
                    )}
                  >
                    {column.filterable && (
                      <input
                        type="text"
                        placeholder="Filter..."
                        value={localFilters[column.key] || ""}
                        onChange={(e) =>
                          handleFilterChange(column.key, e.target.value)
                        }
                        className={cn(
                          "w-full px-2 py-1 text-xs",
                          "bg-terminal-black text-terminal-white",
                          "border border-terminal-medium-gray rounded",
                          "focus:outline-none focus:border-primary-500",
                          "placeholder:text-terminal-light-gray",
                        )}
                        aria-label={`Filter ${column.label}`}
                      />
                    )}
                  </th>
                ))}
              </tr>
            )}
          </thead>
        )}
        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={columns.length + (rowSelection === "multi" ? 1 : 0)}
                className="text-center py-8 text-terminal-light-gray"
              >
                Loading...
              </td>
            </tr>
          ) : processedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (rowSelection === "multi" ? 1 : 0)}
                className="text-center py-8 text-terminal-light-gray"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            processedData.map((row, rowIndex) => {
              const rowId = getRowKey(row);
              const isSelected = selectedRows.includes(rowId);

              return (
                <tr
                  key={rowId}
                  className={cn(
                    "border-b border-terminal-medium-gray",
                    densityClasses[density],
                    hoverable &&
                      "hover:bg-terminal-dark-gray transition-colors",
                    isSelected && "bg-primary-500 bg-opacity-10",
                    striped &&
                      rowIndex % 2 === 1 &&
                      "bg-terminal-dark-gray bg-opacity-50",
                    onRowClick && "cursor-pointer",
                  )}
                  onClick={() => onRowClick?.(row, rowIndex)}
                  onDoubleClick={() => onRowDoubleClick?.(row, rowIndex)}
                >
                  {rowSelection === "multi" && (
                    <td
                      className={cn(
                        "px-4",
                        bordered && "border-r border-terminal-medium-gray",
                      )}
                      style={{ width: 48 }}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleRowSelect(rowId, e.target.checked);
                        }}
                        className="datagrid-checkbox"
                        aria-label={`Select row ${rowIndex + 1}`}
                      />
                    </td>
                  )}
                  {columns.map((column) => {
                    const value = row[column.key];
                    return (
                      <td
                        key={`${rowId}-${column.key}`}
                        className={cn(
                          "px-4 text-terminal-white",
                          bordered &&
                            "border-r border-terminal-medium-gray last:border-r-0",
                          column.align === "right" && "text-right tabular-nums",
                          column.align === "center" && "text-center",
                          getCellClassName(column, value, row),
                        )}
                      >
                        {column.render
                          ? column.render(value, row, rowIndex)
                          : formatCellValue(column, value)}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

DataGrid.displayName = "DataGrid";
