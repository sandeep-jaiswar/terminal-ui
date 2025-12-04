import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "@sandeep-jaiswar/utils";
export const DataGrid = ({ columns, data, rowKey = "id", rowSelection = "none", selectedRows = [], onSelectionChange, sortConfig, onSortChange, filterConfig = {}, onFilterChange, onRowClick, onRowDoubleClick, showHeader = true, showFilters = false, density = "normal", hoverable = true, striped = false, bordered = true, loading = false, emptyMessage = "No data available", className, "data-testid": testId, }) => {
    const [localFilters, setLocalFilters] = React.useState(filterConfig);
    const [localSort, setLocalSort] = React.useState(sortConfig);
    // Get row key
    const getRowKey = React.useCallback((row) => {
        if (typeof rowKey === "function") {
            return rowKey(row);
        }
        return String(row[rowKey]);
    }, [rowKey]);
    // Handle selection
    const handleSelectAll = React.useCallback((checked) => {
        if (!onSelectionChange)
            return;
        if (checked) {
            const allKeys = data.map(getRowKey);
            onSelectionChange(allKeys);
        }
        else {
            onSelectionChange([]);
        }
    }, [data, getRowKey, onSelectionChange]);
    const handleRowSelect = React.useCallback((rowId, checked) => {
        if (!onSelectionChange)
            return;
        if (rowSelection === "single") {
            onSelectionChange(checked ? [rowId] : []);
        }
        else if (rowSelection === "multi") {
            if (checked) {
                onSelectionChange([...selectedRows, rowId]);
            }
            else {
                onSelectionChange(selectedRows.filter((id) => id !== rowId));
            }
        }
    }, [onSelectionChange, rowSelection, selectedRows]);
    // Handle sorting
    const handleSort = React.useCallback((key) => {
        const newDirection = localSort?.key === key && localSort?.direction === "asc"
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
    }, [localSort, onSortChange]);
    // Handle filtering
    const handleFilterChange = React.useCallback((key, value) => {
        const newFilters = { ...localFilters, [key]: value };
        if (!value) {
            delete newFilters[key];
        }
        setLocalFilters(newFilters);
        if (onFilterChange) {
            onFilterChange(newFilters);
        }
    }, [localFilters, onFilterChange]);
    // Format cell value based on column type
    const formatCellValue = React.useCallback((column, value) => {
        if (value === null || value === undefined)
            return "—";
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
                return new Date(value).toLocaleDateString();
            }
            case "enum": {
                const option = column.enumOptions?.find((opt) => opt.value === value);
                return option?.label || String(value);
            }
            case "text":
            default:
                return String(value);
        }
    }, []);
    // Get cell styling for financial values
    const getCellClassName = React.useCallback((column, value, row) => {
        let classes = "";
        if (typeof column.cellClassName === "function") {
            classes += " " + column.cellClassName(value, row);
        }
        else if (column.cellClassName) {
            classes += " " + column.cellClassName;
        }
        if (column.financialStyling &&
            (column.type === "percentage" || column.type === "number")) {
            const numValue = Number(value);
            if (numValue > 0) {
                classes += " text-success-500";
            }
            else if (numValue < 0) {
                classes += " text-danger-300";
            }
        }
        return classes;
    }, []);
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
                if (aVal === bVal)
                    return 0;
                if (aVal === null || aVal === undefined)
                    return 1;
                if (bVal === null || bVal === undefined)
                    return -1;
                if (typeof aVal === "number" && typeof bVal === "number") {
                    return (aVal - bVal) * direction;
                }
                return String(aVal).localeCompare(String(bVal)) * direction;
            });
        }
        return result;
    }, [data, localFilters, localSort]);
    const allSelected = selectedRows.length > 0 && selectedRows.length === data.length;
    const someSelected = selectedRows.length > 0 && selectedRows.length < data.length;
    return (_jsx("div", { className: cn("datagrid-container", "w-full overflow-auto", "bg-terminal-black", bordered && "border border-terminal-medium-gray", className), "data-testid": testId, children: _jsxs("table", { className: "datagrid w-full border-collapse font-terminal-mono text-sm", children: [showHeader && (_jsxs("thead", { children: [_jsxs("tr", { className: "border-b-2 border-terminal-medium-gray bg-terminal-dark-gray", children: [rowSelection === "multi" && (_jsx("th", { className: cn("text-left px-4", headerDensityClasses[density], "border-r border-terminal-medium-gray"), style: { width: 48 }, children: _jsx("input", { type: "checkbox", checked: allSelected, ref: (el) => {
                                            if (el)
                                                el.indeterminate = someSelected;
                                        }, onChange: (e) => handleSelectAll(e.target.checked), className: "datagrid-checkbox", "aria-label": "Select all rows" }) })), columns.map((column) => (_jsx("th", { className: cn("text-left px-4 font-medium text-terminal-white uppercase tracking-wide", headerDensityClasses[density], bordered &&
                                        "border-r border-terminal-medium-gray last:border-r-0", column.sortable &&
                                        "cursor-pointer select-none hover:bg-terminal-medium-gray", column.align === "right" && "text-right", column.align === "center" && "text-center", column.headerClassName), style: {
                                        width: column.width,
                                        minWidth: column.minWidth,
                                    }, onClick: () => column.sortable && handleSort(column.key), children: _jsxs("div", { className: "flex items-center justify-between gap-2", children: [_jsx("span", { children: column.label }), column.sortable && (_jsx("span", { className: "datagrid-sort-indicator", children: localSort?.key === column.key ? (localSort.direction === "asc" ? (_jsx("span", { className: "text-primary-500", children: "\u25B2" })) : (_jsx("span", { className: "text-primary-500", children: "\u25BC" }))) : (_jsx("span", { className: "text-terminal-light-gray opacity-30", children: "\u25B2" })) }))] }) }, column.key)))] }), showFilters && (_jsxs("tr", { className: "border-b border-terminal-medium-gray bg-terminal-dark-gray", children: [rowSelection === "multi" && (_jsx("th", { className: "px-4 py-2", style: { width: 48 } })), columns.map((column) => (_jsx("th", { className: cn("px-4 py-2", bordered &&
                                        "border-r border-terminal-medium-gray last:border-r-0"), children: column.filterable && (_jsx("input", { type: "text", placeholder: "Filter...", value: localFilters[column.key] || "", onChange: (e) => handleFilterChange(column.key, e.target.value), className: cn("w-full px-2 py-1 text-xs", "bg-terminal-black text-terminal-white", "border border-terminal-medium-gray rounded", "focus:outline-none focus:border-primary-500", "placeholder:text-terminal-light-gray"), "aria-label": `Filter ${column.label}` })) }, `filter-${column.key}`)))] }))] })), _jsx("tbody", { children: loading ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (rowSelection === "multi" ? 1 : 0), className: "text-center py-8 text-terminal-light-gray", children: "Loading..." }) })) : processedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (rowSelection === "multi" ? 1 : 0), className: "text-center py-8 text-terminal-light-gray", children: emptyMessage }) })) : (processedData.map((row, rowIndex) => {
                        const rowId = getRowKey(row);
                        const isSelected = selectedRows.includes(rowId);
                        return (_jsxs("tr", { className: cn("border-b border-terminal-medium-gray", densityClasses[density], hoverable &&
                                "hover:bg-terminal-dark-gray transition-colors", isSelected && "bg-primary-500 bg-opacity-10", striped &&
                                rowIndex % 2 === 1 &&
                                "bg-terminal-dark-gray bg-opacity-50", onRowClick && "cursor-pointer"), onClick: () => onRowClick?.(row, rowIndex), onDoubleClick: () => onRowDoubleClick?.(row, rowIndex), children: [rowSelection === "multi" && (_jsx("td", { className: cn("px-4", bordered && "border-r border-terminal-medium-gray"), style: { width: 48 }, children: _jsx("input", { type: "checkbox", checked: isSelected, onChange: (e) => {
                                            e.stopPropagation();
                                            handleRowSelect(rowId, e.target.checked);
                                        }, className: "datagrid-checkbox", "aria-label": `Select row ${rowIndex + 1}` }) })), columns.map((column) => {
                                    const value = row[column.key];
                                    return (_jsx("td", { className: cn("px-4 text-terminal-white", bordered &&
                                            "border-r border-terminal-medium-gray last:border-r-0", column.align === "right" && "text-right tabular-nums", column.align === "center" && "text-center", getCellClassName(column, value, row)), children: column.render
                                            ? column.render(value, row, rowIndex)
                                            : formatCellValue(column, value) }, `${rowId}-${column.key}`));
                                })] }, rowId));
                    })) })] }) }));
};
DataGrid.displayName = "DataGrid";
