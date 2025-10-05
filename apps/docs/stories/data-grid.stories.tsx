import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid } from "@sandeep-jaiswar/ui";
import type { Column } from "@sandeep-jaiswar/data-grid";
import React from "react";

const meta: Meta<typeof DataGrid> = {
  title: "Components/DataGrid",
  component: DataGrid,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "terminal",
      values: [{ name: "terminal", value: "#000000" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataGrid>;

// Sample financial data
const financialData = [
  {
    id: "1",
    symbol: "AAPL",
    company: "Apple Inc",
    price: 150.25,
    change: 2.45,
    volume: 1200000,
    marketCap: 2500000000000,
    lastUpdate: "2023-10-26",
    status: "active",
  },
  {
    id: "2",
    symbol: "GOOGL",
    company: "Alphabet Inc",
    price: 2750.8,
    change: -1.2,
    volume: 2500000,
    marketCap: 1800000000000,
    lastUpdate: "2023-11-15",
    status: "pending",
  },
  {
    id: "3",
    symbol: "TSLA",
    company: "Tesla Inc",
    price: 980.1,
    change: -1.8,
    volume: 3200000,
    marketCap: 980000000000,
    lastUpdate: "2023-03-01",
    status: "active",
  },
  {
    id: "4",
    symbol: "AMZN",
    company: "Amazon.com Inc",
    price: 120.0,
    change: -1.2,
    volume: 1800000,
    marketCap: 1200000000000,
    lastUpdate: "2023-07-04",
    status: "closed",
  },
  {
    id: "5",
    symbol: "MSFT",
    company: "Microsoft Corp",
    price: 330.1,
    change: -5.0,
    volume: 2100000,
    marketCap: 2450000000000,
    lastUpdate: "2023-11-20",
    status: "pending",
  },
];

// Basic columns
const basicColumns: Column[] = [
  {
    key: "symbol",
    label: "Symbol",
    type: "text",
    sortable: true,
    filterable: true,
    width: 120,
  },
  {
    key: "company",
    label: "Company Name",
    type: "text",
    sortable: true,
    filterable: true,
    width: 200,
  },
  {
    key: "price",
    label: "Price",
    type: "currency",
    sortable: true,
    align: "right",
    width: 120,
  },
  {
    key: "change",
    label: "Change",
    type: "percentage",
    sortable: true,
    align: "right",
    financialStyling: true,
    width: 100,
  },
];

// Financial columns with all types
const financialColumns: Column[] = [
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
    width: 120,
  },
  {
    key: "change",
    label: "Change",
    type: "percentage",
    sortable: true,
    align: "right",
    financialStyling: true,
    decimalPlaces: 2,
    width: 100,
  },
  {
    key: "volume",
    label: "Volume",
    type: "number",
    sortable: true,
    align: "right",
    decimalPlaces: 0,
    format: (value) => {
      if (value >= 1000000) return `${(value / 1000000).toFixed(2)}M`;
      if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
      return String(value);
    },
    width: 100,
  },
  {
    key: "lastUpdate",
    label: "Date",
    type: "date",
    sortable: true,
    align: "center",
    width: 120,
  },
  {
    key: "status",
    label: "Status",
    type: "enum",
    sortable: true,
    align: "center",
    enumOptions: [
      { value: "active", label: "Active", color: "#4af6c3" },
      { value: "pending", label: "Pending", color: "#fb8b1e" },
      { value: "closed", label: "Closed", color: "#ff433d" },
    ],
    render: (value) => {
      const colors: Record<string, string> = {
        active: "#4af6c3",
        pending: "#fb8b1e",
        closed: "#ff433d",
      };
      return (
        <span
          style={{
            display: "inline-block",
            padding: "2px 8px",
            borderRadius: "4px",
            fontSize: "11px",
            fontWeight: 600,
            backgroundColor: colors[value] + "20",
            color: colors[value],
            border: `1px solid ${colors[value]}`,
          }}
        >
          {value.toUpperCase()}
        </span>
      );
    },
    width: 100,
  },
];

/**
 * Basic DataGrid with text and number columns
 */
export const Basic: Story = {
  args: {
    columns: basicColumns,
    data: financialData,
    showHeader: true,
    bordered: true,
    hoverable: true,
  },
};

/**
 * DataGrid with all column types
 */
export const AllColumnTypes: Story = {
  args: {
    columns: financialColumns,
    data: financialData,
    showHeader: true,
    bordered: true,
    hoverable: true,
  },
};

/**
 * DataGrid with sortable columns
 */
export const Sortable: Story = {
  render: () => {
    const [sortConfig, setSortConfig] = React.useState({
      key: "price",
      direction: "desc" as const,
    });

    return (
      <DataGrid
        columns={financialColumns}
        data={financialData}
        sortConfig={sortConfig}
        onSortChange={setSortConfig}
        showHeader={true}
        bordered={true}
        hoverable={true}
      />
    );
  },
};

/**
 * DataGrid with filtering
 */
export const Filterable: Story = {
  render: () => {
    const [filters, setFilters] = React.useState({});

    return (
      <DataGrid
        columns={financialColumns}
        data={financialData}
        filterConfig={filters}
        onFilterChange={setFilters}
        showFilters={true}
        showHeader={true}
        bordered={true}
        hoverable={true}
      />
    );
  },
};

/**
 * DataGrid with single row selection
 */
export const SingleSelection: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

    return (
      <div>
        <div style={{ marginBottom: "1rem", color: "#fff" }}>
          Selected: {selectedRows.join(", ") || "None"}
        </div>
        <DataGrid
          columns={basicColumns}
          data={financialData}
          rowSelection="single"
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          showHeader={true}
          bordered={true}
          hoverable={true}
        />
      </div>
    );
  },
};

/**
 * DataGrid with multi-row selection
 */
export const MultiSelection: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

    return (
      <div>
        <div style={{ marginBottom: "1rem", color: "#fff" }}>
          Selected {selectedRows.length} row(s)
        </div>
        <DataGrid
          columns={financialColumns}
          data={financialData}
          rowSelection="multi"
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          showHeader={true}
          bordered={true}
          hoverable={true}
        />
      </div>
    );
  },
};

/**
 * Compact density mode
 */
export const CompactDensity: Story = {
  args: {
    columns: financialColumns,
    data: financialData,
    density: "compact",
    showHeader: true,
    bordered: true,
    hoverable: true,
  },
};

/**
 * Comfortable density mode
 */
export const ComfortableDensity: Story = {
  args: {
    columns: financialColumns,
    data: financialData,
    density: "comfortable",
    showHeader: true,
    bordered: true,
    hoverable: true,
  },
};

/**
 * Striped rows
 */
export const Striped: Story = {
  args: {
    columns: financialColumns,
    data: financialData,
    striped: true,
    showHeader: true,
    bordered: true,
    hoverable: true,
  },
};

/**
 * Without borders
 */
export const NoBorders: Story = {
  args: {
    columns: financialColumns,
    data: financialData,
    bordered: false,
    showHeader: true,
    hoverable: true,
  },
};

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    columns: financialColumns,
    data: [],
    loading: true,
    showHeader: true,
    bordered: true,
  },
};

/**
 * Empty state
 */
export const Empty: Story = {
  args: {
    columns: financialColumns,
    data: [],
    emptyMessage: "No stocks available",
    showHeader: true,
    bordered: true,
  },
};

/**
 * Complete trading example
 */
export const TradingExample: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
    const [sortConfig, setSortConfig] = React.useState({
      key: "change",
      direction: "desc" as const,
    });
    const [filters, setFilters] = React.useState({});

    const tradingColumns: Column[] = [
      {
        key: "symbol",
        label: "Ticker",
        type: "text",
        sortable: true,
        filterable: true,
        width: 100,
      },
      {
        key: "company",
        label: "Company Name",
        type: "text",
        sortable: true,
        filterable: true,
        width: 180,
      },
      {
        key: "price",
        label: "Last Price",
        type: "currency",
        sortable: true,
        align: "right",
        currencySymbol: "$",
        decimalPlaces: 2,
        width: 120,
      },
      {
        key: "change",
        label: "%CHG",
        type: "percentage",
        sortable: true,
        align: "right",
        financialStyling: true,
        decimalPlaces: 2,
        width: 100,
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
        width: 100,
      },
      {
        key: "marketCap",
        label: "Market Cap",
        type: "currency",
        sortable: true,
        align: "right",
        format: (value) => {
          if (value >= 1000000000000)
            return `$${(value / 1000000000000).toFixed(2)}T`;
          if (value >= 1000000000)
            return `$${(value / 1000000000).toFixed(2)}B`;
          if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
          return `$${value}`;
        },
        width: 120,
      },
      {
        key: "status",
        label: "Status",
        type: "enum",
        sortable: true,
        align: "center",
        render: (value) => {
          const colors: Record<string, string> = {
            active: "#4af6c3",
            pending: "#fb8b1e",
            closed: "#ff433d",
          };
          return (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "2px 8px",
                borderRadius: "4px",
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                backgroundColor: colors[value] + "20",
                color: colors[value],
                border: `1px solid ${colors[value]}`,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: colors[value],
                }}
              />
              {value}
            </span>
          );
        },
        width: 100,
      },
    ];

    return (
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            backgroundColor: "#1a1a1a",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
        >
          <h3
            style={{
              margin: 0,
              marginBottom: "0.5rem",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Bloomberg DataGrid - Financial Data Table
          </h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              fontSize: "12px",
              color: "#666",
            }}
          >
            <span>Selected: {selectedRows.length} stocks</span>
            <span>•</span>
            <span>Total: {financialData.length} stocks</span>
            <span>•</span>
            <span>
              Sorted by: {sortConfig.key} ({sortConfig.direction})
            </span>
          </div>
        </div>

        <DataGrid
          columns={tradingColumns}
          data={financialData}
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

        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "#1a1a1a",
            border: "1px solid #333",
            borderRadius: "4px",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#4af6c3",
              color: "#000",
              border: "none",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
            disabled={selectedRows.length === 0}
          >
            BUY SELECTED ({selectedRows.length})
          </button>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#ff433d",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
            disabled={selectedRows.length === 0}
          >
            SELL SELECTED ({selectedRows.length})
          </button>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #666",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            EXPORT DATA
          </button>
        </div>
      </div>
    );
  },
};
