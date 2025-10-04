import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@sandeep-jaiswar/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "terminal",
      values: [
        { name: "terminal", value: "#000000" },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger", "warning", "ghost"],
      description: "The visual variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    loading: {
      control: { type: "boolean" },
      description: "Whether the button is in a loading state",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
      description: "The HTML button type",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Primary button for main actions
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

/**
 * Secondary button for less prominent actions
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

/**
 * Success button for positive actions like buy orders
 */
export const Success: Story = {
  args: {
    variant: "success",
    children: "Buy 100 AAPL",
  },
};

/**
 * Danger button for destructive actions like sell orders
 */
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Sell Position",
  },
};

/**
 * Warning button for cautionary actions
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning Action",
  },
};

/**
 * Ghost button for subtle actions
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

/**
 * Small button size
 */
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

/**
 * Medium button size (default)
 */
export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

/**
 * Large button size
 */
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

/**
 * Loading state with spinner
 */
export const Loading: Story = {
  args: {
    loading: true,
    children: "Processing Order...",
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * Trading scenario example
 */
export const TradingExample: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem" }}>
      <h3 style={{ color: "#ffffff", marginBottom: "1rem" }}>AAPL - $150.25</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button variant="success" size="lg">
          Buy 100 shares
        </Button>
        <Button variant="danger" size="lg">
          Sell Position
        </Button>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button variant="secondary">Set Alert</Button>
        <Button variant="ghost">View Chart</Button>
      </div>
    </div>
  ),
};
