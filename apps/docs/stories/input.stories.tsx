import type { Meta, StoryObj } from "@storybook/react";
import { Input, NumberInput, SearchInput, Textarea } from "@sandeep-jaiswar/ui";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "terminal",
      values: [{ name: "terminal", value: "#000000" }],
    },
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label text displayed above the input",
    },
    helperText: {
      control: { type: "text" },
      description: "Helper text displayed below the input",
    },
    error: {
      control: { type: "text" },
      description: "Error message displayed when state is error",
    },
    state: {
      control: { type: "select" },
      options: ["default", "error", "success"],
      description: "Visual state of the input",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

/**
 * Default input with basic styling
 */
export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

/**
 * Input with label
 */
export const WithLabel: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "Enter symbol",
  },
};

/**
 * Input with helper text
 */
export const WithHelperText: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "AAPL",
    helperText: "Enter a valid ticker symbol",
  },
};

/**
 * Input in focused state (simulated with default state)
 */
export const Focused: Story = {
  args: {
    label: "Input goes here",
    defaultValue: "Input goes here",
    helperText: "Helper text goes here",
  },
};

/**
 * Input in error state
 */
export const Error: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "Enter symbol",
    defaultValue: "Invalid input",
    error: "Error message in red",
    state: "error",
  },
};

/**
 * Input in success state
 */
export const Success: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "Enter symbol",
    defaultValue: "Valid input",
    helperText: "Success!",
    state: "success",
  },
};

/**
 * Disabled input
 */
export const Disabled: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "Enter symbol",
    defaultValue: "Disabled input",
    helperText: "Helper text goes here",
    disabled: true,
  },
};

/**
 * Small size input
 */
export const Small: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "AAPL",
    size: "sm",
  },
};

/**
 * Medium size input (default)
 */
export const Medium: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "AAPL",
    size: "md",
  },
};

/**
 * Large size input
 */
export const Large: Story = {
  args: {
    label: "Stock Symbol",
    placeholder: "AAPL",
    size: "lg",
  },
};

/**
 * All states showcase
 */
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        minWidth: "400px",
      }}
    >
      <Input
        label="Default State"
        placeholder="Input goes here"
        helperText="Helper text goes here"
      />
      <Input
        label="Error State"
        defaultValue="Invalid input"
        error="Error message in red"
        state="error"
      />
      <Input
        label="Success State"
        defaultValue="Valid input"
        helperText="Success!"
        state="success"
      />
      <Input
        label="Disabled State"
        defaultValue="Disabled input"
        helperText="Helper text goes here"
        disabled
      />
    </div>
  ),
};

/**
 * Number input with currency symbol
 */
export const NumberInputExample: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        minWidth: "400px",
      }}
    >
      <NumberInput label="Price" placeholder="0.00" defaultValue="150.25" />
      <NumberInput
        label="Stop Loss"
        placeholder="0.00"
        helperText="Set your stop loss price"
        size="md"
      />
      <NumberInput
        label="Position Size"
        placeholder="0.00"
        defaultValue="1000.00"
        size="lg"
      />
    </div>
  ),
};

/**
 * Search input variants
 */
export const SearchInputExample: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        minWidth: "400px",
      }}
    >
      <SearchInput placeholder="Search..." />
      <SearchInput
        label="Search Stocks"
        placeholder="Search..."
        helperText="Enter ticker symbol or company name"
      />
      <SearchInput placeholder="Search..." defaultValue="AAPL" />
    </div>
  ),
};

/**
 * Textarea for multiline input
 */
export const TextareaExample: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        minWidth: "400px",
      }}
    >
      <Textarea
        label="Trading Notes"
        placeholder="Multiline text...
First line... Second... Second"
        rows={3}
      />
      <Textarea
        label="Order Details"
        placeholder="Enter details..."
        helperText="Provide detailed order information"
        rows={4}
      />
      <Textarea
        label="Error Notes"
        defaultValue="Invalid order"
        error="Please provide valid order details"
        state="error"
        rows={3}
      />
    </div>
  ),
};

/**
 * Financial trading examples
 */
export const TradingExamples: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        minWidth: "500px",
        backgroundColor: "#1a1a1a",
        padding: "2rem",
        borderRadius: "8px",
        border: "1px solid #333",
      }}
    >
      <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem", color: "#fff" }}>
        Create Buy Order
      </h3>

      <SearchInput label="Symbol" placeholder="Search..." defaultValue="AAPL" />

      <NumberInput
        label="Price"
        placeholder="0.00"
        defaultValue="150.25"
        helperText="Current market price"
      />

      <NumberInput
        label="Quantity"
        placeholder="0"
        defaultValue="100"
        currencySymbol=""
      />

      <NumberInput
        label="Total"
        placeholder="0.00"
        defaultValue="15025.00"
        state="success"
        disabled
      />

      <Textarea
        label="Order Notes"
        placeholder="Enter notes (optional)..."
        rows={3}
      />
    </div>
  ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        minWidth: "400px",
      }}
    >
      <Input label="Small Input" placeholder="Small size" size="sm" />
      <Input label="Medium Input" placeholder="Medium size" size="md" />
      <Input label="Large Input" placeholder="Large size" size="lg" />
    </div>
  ),
};
