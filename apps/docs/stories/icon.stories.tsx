import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@sandeep-jaiswar/icons";
import type { IconName } from "@sandeep-jaiswar/icons";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "terminal",
      values: [{ name: "terminal", value: "#000000" }],
    },
  },
  argTypes: {
    name: {
      control: { type: "select" },
      options: [
        "chevron-up",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "trending-up",
        "trending-down",
        "dollar-sign",
        "buy",
        "sell",
        "alert-triangle",
        "alert-circle",
        "search",
        "close",
        "menu",
        "settings",
        "check",
        "info",
        "chart-line",
        "chart-bar",
        "refresh",
        "filter",
      ] as IconName[],
      description: "The icon to render",
    },
    size: {
      control: { type: "number" },
      description: "Size of the icon in pixels",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Icon>;

/**
 * Default icon rendering
 */
export const Default: Story = {
  args: {
    name: "trending-up",
    size: 24,
  },
};

/**
 * Navigation icons
 */
export const Navigation: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevron-up" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>chevron-up</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevron-down" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>
          chevron-down
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevron-left" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>
          chevron-left
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chevron-right" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>
          chevron-right
        </div>
      </div>
    </div>
  ),
};

/**
 * Financial icons with semantic colors
 */
export const Financial: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="trending-up" size={32} className="text-success-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>trending-up</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="trending-down" size={32} className="text-danger-300" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>
          trending-down
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="dollar-sign" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>dollar-sign</div>
      </div>
    </div>
  ),
};

/**
 * Trading action icons
 */
export const Trading: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="buy" size={40} className="text-success-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>buy</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="sell" size={40} className="text-danger-300" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>sell</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="alert-triangle" size={40} className="text-warning-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>
          alert-triangle
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="alert-circle" size={40} className="text-warning-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>
          alert-circle
        </div>
      </div>
    </div>
  ),
};

/**
 * UI icons for interface controls
 */
export const UI: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Icon name="search" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>search</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="close" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>close</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="menu" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>menu</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="settings" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>settings</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="check" size={32} className="text-success-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>check</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="info" size={32} className="text-primary-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>info</div>
      </div>
    </div>
  ),
};

/**
 * Data visualization icons
 */
export const Data: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="chart-line" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>chart-line</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="chart-bar" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>chart-bar</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="refresh" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>refresh</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="filter" size={32} className="text-terminal-white" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>filter</div>
      </div>
    </div>
  ),
};

/**
 * All available icons showcase
 */
export const AllIcons: Story = {
  render: () => {
    const allIconNames: IconName[] = [
      "chevron-up",
      "chevron-down",
      "chevron-left",
      "chevron-right",
      "trending-up",
      "trending-down",
      "dollar-sign",
      "buy",
      "sell",
      "alert-triangle",
      "alert-circle",
      "search",
      "close",
      "menu",
      "settings",
      "check",
      "info",
      "chart-line",
      "chart-bar",
      "refresh",
      "filter",
    ];

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "1.5rem",
          maxWidth: "800px",
        }}
      >
        {allIconNames.map((iconName) => (
          <div key={iconName} style={{ textAlign: "center" }}>
            <Icon name={iconName} size={32} className="text-terminal-white" />
            <div
              style={{
                marginTop: "0.5rem",
                fontSize: "11px",
                wordBreak: "break-word",
              }}
            >
              {iconName}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

/**
 * Different sizes demonstration
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Icon name="trending-up" size={16} className="text-success-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>16px</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="trending-up" size={24} className="text-success-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>24px</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="trending-up" size={32} className="text-success-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>32px</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="trending-up" size={48} className="text-success-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>48px</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Icon name="trending-up" size={64} className="text-success-500" />
        <div style={{ marginTop: "0.5rem", fontSize: "12px" }}>64px</div>
      </div>
    </div>
  ),
};

/**
 * Financial use case example: Price movement indicators
 */
export const FinancialUseCase: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#1a1a1a",
        padding: "1.5rem",
        borderRadius: "4px",
        minWidth: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "14px" }}>AAPL</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Icon name="trending-up" size={20} className="text-success-500" />
          <span style={{ color: "#4af6c3", fontSize: "14px" }}>+2.5%</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "14px" }}>TSLA</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Icon name="trending-down" size={20} className="text-danger-300" />
          <span style={{ color: "#ff433d", fontSize: "14px" }}>-1.2%</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "14px" }}>MSFT</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Icon name="trending-up" size={20} className="text-success-500" />
          <span style={{ color: "#4af6c3", fontSize: "14px" }}>+0.8%</span>
        </div>
      </div>
    </div>
  ),
};
