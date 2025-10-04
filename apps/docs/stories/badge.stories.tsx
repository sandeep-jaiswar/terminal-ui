import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@sandeep-jaiswar/ui";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
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
      options: ["primary", "secondary", "success", "danger", "warning", "info", "dot"],
      description: "The visual variant of the badge",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the badge",
    },
    count: {
      control: { type: "number" },
      description: "Optional count for number formatting",
    },
    maxCount: {
      control: { type: "number" },
      description: "Maximum count before showing + (default: 99)",
    },
    children: {
      control: { type: "text" },
      description: "Badge content",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

/**
 * Default badge with primary variant
 */
export const Default: Story = {
  args: {
    children: "New",
    variant: "primary",
  },
};

/**
 * Primary badge for general notifications
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

/**
 * Secondary badge for neutral information
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

/**
 * Success badge for positive events
 */
export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

/**
 * Danger badge for critical alerts
 */
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

/**
 * Warning badge for cautionary alerts
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

/**
 * Info badge for informational messages
 */
export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

/**
 * Dot badge for status indicators
 */
export const Dot: Story = {
  args: {
    variant: "dot",
  },
};

/**
 * Small badge size
 */
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

/**
 * Medium badge size (default)
 */
export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

/**
 * Large badge size
 */
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
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
      <Badge size="sm" variant="danger">Small</Badge>
      <Badge size="md" variant="danger">Medium</Badge>
      <Badge size="lg" variant="danger">Large</Badge>
    </div>
  ),
};

/**
 * Dot variants with different colors
 */
export const DotVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h4 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "14px" }}>Dot Variants (8px)</h4>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <Badge variant="dot" className="bg-danger-300 border-danger-400" />
          <Badge variant="dot" className="bg-danger-500 border-danger-600" />
          <Badge variant="dot" className="bg-primary-500 border-primary-600" />
          <Badge variant="dot" className="bg-primary-600 border-primary-700" />
          <Badge variant="dot" className="bg-primary-700 border-primary-800" />
          <Badge variant="dot" className="bg-terminal-light-gray border-terminal-white" />
        </div>
      </div>
      <div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <Badge variant="dot" className="bg-danger-600 border-danger-700" />
          <Badge variant="dot" className="bg-primary-500 border-primary-600" />
          <Badge variant="dot" className="bg-success-500 border-success-600" />
          <Badge variant="dot" className="bg-success-600 border-success-700" />
          <Badge variant="dot" className="bg-success-700 border-success-800" />
          <Badge variant="dot" className="bg-terminal-white border-terminal-white" />
        </div>
      </div>
      <div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <Badge variant="dot" className="bg-danger-700 border-danger-800" />
          <Badge variant="dot" className="bg-primary-800 border-primary-900" />
          <Badge variant="dot" className="bg-success-800 border-success-900" />
          <Badge variant="dot" className="bg-success-900 border-terminal-black" />
          <Badge variant="dot" className="bg-terminal-medium-gray border-terminal-light-gray" />
          <Badge variant="dot" className="bg-terminal-light-gray border-terminal-white" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Count badges with number formatting
 */
export const CountBadges: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h4 style={{ color: "#ffffff", marginBottom: "1rem", fontSize: "14px" }}>Count Badges</h4>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <Badge variant="danger" count={1} />
          <Badge variant="danger" count={5} />
          <Badge variant="danger" count={99} />
          <Badge variant="danger" count={100} maxCount={99} />
          <Badge variant="danger" count={9999} maxCount={99} />
          <Badge variant="danger" count={10000} maxCount={9999} />
        </div>
      </div>
    </div>
  ),
};

/**
 * Notification badge examples
 */
export const NotificationBadges: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "start", flexWrap: "wrap" }}>
      {/* Icon with badge */}
      <div style={{ position: "relative", display: "inline-block" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "#4af6c3",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
        <Badge
          variant="danger"
          count={1}
          size="sm"
          style={{
            position: "absolute",
            top: "-4px",
            right: "-4px",
          }}
        />
      </div>

      {/* Card with badge */}
      <div
        style={{
          position: "relative",
          width: "160px",
          padding: "1rem",
          background: "#1a1a1a",
          borderRadius: "8px",
          border: "1px solid #333333",
        }}
      >
        <Badge
          variant="danger"
          size="sm"
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
          }}
        >
          #ff433d
        </Badge>
        <h4 style={{ color: "#ffffff", fontSize: "14px", marginBottom: "0.5rem" }}>Portfolio</h4>
        <p style={{ color: "#666666", fontSize: "12px" }}>View your holdings</p>
      </div>

      {/* Watchlist item with count */}
      <div
        style={{
          position: "relative",
          width: "200px",
          padding: "0.75rem 1rem",
          background: "#1a1a1a",
          borderRadius: "8px",
          border: "1px solid #333333",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}>
            AAPL
          </div>
          <div style={{ color: "#666666", fontSize: "12px" }}>Apple Inc.</div>
        </div>
        <Badge variant="primary" count={12} />
      </div>
    </div>
  ),
};

/**
 * Trading scenario example with badges
 */
export const TradingExample: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "1rem" }}>
      <h3 style={{ color: "#ffffff", fontSize: "16px", marginBottom: "0.5rem" }}>
        Market Activity
      </h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Stock item */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.75rem 1rem",
            background: "#1a1a1a",
            borderRadius: "4px",
            border: "1px solid #333333",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Badge variant="dot" className="bg-success-500 border-success-600" />
            <div>
              <div style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}>
                GOOGL - Alphabet Inc.
              </div>
              <div style={{ color: "#666666", fontSize: "12px" }}>+2.5% Today</div>
            </div>
          </div>
          <Badge variant="success" size="sm">Buy</Badge>
        </div>

        {/* Stock item with alert */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.75rem 1rem",
            background: "#1a1a1a",
            borderRadius: "4px",
            border: "1px solid #333333",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Badge variant="dot" className="bg-danger-300 border-danger-400" />
            <div>
              <div style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}>
                TSLA - Tesla Inc.
              </div>
              <div style={{ color: "#666666", fontSize: "12px" }}>-1.8% Today</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Badge variant="warning" size="sm">Alert</Badge>
            <Badge variant="danger" count={3} size="sm" />
          </div>
        </div>

        {/* Stock item neutral */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.75rem 1rem",
            background: "#1a1a1a",
            borderRadius: "4px",
            border: "1px solid #333333",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Badge variant="dot" className="bg-terminal-light-gray border-terminal-white" />
            <div>
              <div style={{ color: "#ffffff", fontSize: "14px", fontWeight: "500" }}>
                MSFT - Microsoft Corp.
              </div>
              <div style={{ color: "#666666", fontSize: "12px" }}>0.0% Today</div>
            </div>
          </div>
          <Badge variant="secondary" size="sm">Watch</Badge>
        </div>
      </div>
    </div>
  ),
};
