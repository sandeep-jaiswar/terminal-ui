import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@sandeep-jaiswar/navigation";
import React from "react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
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

type Story = StoryObj<typeof Breadcrumb>;

/**
 * Basic breadcrumb navigation matching the design specification.
 * Shows navigation path: Home > Portfolio > AAPL > Details
 */
export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/portfolio">Portfolio</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/portfolio/aapl">AAPL</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem current>Details</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/**
 * Simple two-level breadcrumb
 */
export const TwoLevels: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem current>Dashboard</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/**
 * Deep navigation hierarchy
 */
export const DeepHierarchy: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/markets">Markets</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/markets/equities">Equities</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/markets/equities/us">US</BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem href="/markets/equities/us/tech">
        Technology
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem current>AAPL</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/**
 * Interactive states demonstration
 */
export const InteractiveStates: Story = {
  render: () => (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h3 style={{ marginBottom: "2rem", fontSize: "1.25rem" }}>
        Breadcrumb States
      </h3>

      <div style={{ marginBottom: "2rem" }}>
        <h4
          style={{
            marginBottom: "0.5rem",
            color: "#666",
            fontSize: "0.875rem",
          }}
        >
          Clickable Item (Blue):
        </h4>
        <Breadcrumb>
          <BreadcrumbItem href="/">Click to navigate</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem current>Current Page</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h4
          style={{
            marginBottom: "0.5rem",
            color: "#666",
            fontSize: "0.875rem",
          }}
        >
          Current Page (White, Non-clickable):
        </h4>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem current>Details</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <h4
          style={{
            marginBottom: "0.5rem",
            color: "#666",
            fontSize: "0.875rem",
          }}
        >
          Hover State (Lighter Blue):
        </h4>
        <p
          style={{ fontSize: "0.75rem", color: "#666", marginBottom: "0.5rem" }}
        >
          Hover over clickable items to see the transition
        </p>
        <Breadcrumb>
          <BreadcrumbItem href="/">Hover me</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/portfolio">Hover me too</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem current>Current</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

/**
 * Financial trading context example
 */
export const TradingContext: Story = {
  render: () => (
    <div
      style={{ backgroundColor: "#000", minHeight: "100vh", padding: "2rem" }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/portfolio">Portfolio</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem href="/portfolio/aapl">AAPL</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem current>Details</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div style={{ color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Apple Inc. (AAPL)
        </h1>
        <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
          $150.25
        </div>
        <div style={{ color: "#4af6c3", fontSize: "0.875rem" }}>
          +2.45 (+1.66%)
        </div>
      </div>
    </div>
  ),
};

/**
 * Custom separator example
 */
export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbSeparator separator="/" />
      <BreadcrumbItem href="/portfolio">Portfolio</BreadcrumbItem>
      <BreadcrumbSeparator separator="/" />
      <BreadcrumbItem current>AAPL</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/**
 * Accessibility demonstration
 */
export const Accessibility: Story = {
  render: () => (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>
        Accessibility Features
      </h3>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginBottom: "2rem",
          color: "#666",
        }}
      >
        <li style={{ marginBottom: "0.5rem" }}>
          ✓ <strong style={{ color: "#0068ff" }}>ARIA labels:</strong> Proper
          breadcrumb landmark
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          ✓ <strong style={{ color: "#0068ff" }}>Current page:</strong>{" "}
          aria-current=&quot;page&quot;
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          ✓ <strong style={{ color: "#0068ff" }}>Keyboard navigation:</strong>{" "}
          Tab through links
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          ✓ <strong style={{ color: "#0068ff" }}>Focus indicators:</strong> 2px
          blue ring
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          ✓ <strong style={{ color: "#0068ff" }}>Screen reader:</strong>{" "}
          Separators hidden with aria-hidden
        </li>
      </ul>

      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem href="/markets">Markets</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem current>Equities</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};

/**
 * Design specifications reference
 */
export const DesignSpecs: Story = {
  render: () => (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h3 style={{ marginBottom: "2rem", fontSize: "1.25rem" }}>
        Design Specifications
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "1rem",
          marginBottom: "2rem",
          fontSize: "0.875rem",
        }}
      >
        <div style={{ color: "#666" }}>Font Size:</div>
        <div>12px (text-sm)</div>

        <div style={{ color: "#666" }}>Item Spacing:</div>
        <div>8px horizontal padding per side (px-2)</div>

        <div style={{ color: "#666" }}>Separator:</div>
        <div>Chevron (&gt;) with gray color (#666666)</div>

        <div style={{ color: "#666" }}>Clickable Color:</div>
        <div>Terminal Blue (#0068ff)</div>

        <div style={{ color: "#666" }}>Current Page Color:</div>
        <div>White (#ffffff)</div>

        <div style={{ color: "#666" }}>Top Padding:</div>
        <div>40px (pt-10)</div>

        <div style={{ color: "#666" }}>Bottom Padding:</div>
        <div>14px (pb-3.5)</div>

        <div style={{ color: "#666" }}>Transition:</div>
        <div>100ms ease-in-out</div>
      </div>

      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem href="/portfolio">Portfolio</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem href="/portfolio/aapl">AAPL</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem current>Details</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
};
