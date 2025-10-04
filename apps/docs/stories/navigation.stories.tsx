import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar, NavigationItem, NavigationGroup } from "@sandeep-jaiswar/navigation";
import { Icon } from "@sandeep-jaiswar/icons";
import React from "react";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Navigation",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "terminal",
      values: [
        { name: "terminal", value: "#000000" },
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

/**
 * Basic sidebar navigation with all states demonstrated
 */
export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <NavigationGroup label="MAIN">
          <NavigationItem icon={<Icon name="trending-up" size={20} />}>
            Home
          </NavigationItem>
          <NavigationItem icon={<Icon name="chart-line" size={20} />}>
            News
          </NavigationItem>
          <NavigationItem 
            icon={<Icon name="chart-line" size={20} />}
            active
          >
            Dashboard
          </NavigationItem>
          <NavigationItem icon={<Icon name="trending-up" size={20} />}>
            Markets
          </NavigationItem>
        </NavigationGroup>
        
        <NavigationGroup label="TOOLS">
          <NavigationItem icon={<Icon name="search" size={20} />}>
            Research
          </NavigationItem>
          <NavigationItem icon={<Icon name="settings" size={20} />}>
            Settings
          </NavigationItem>
        </NavigationGroup>
      </Sidebar>
      
      <main style={{ flex: 1, padding: "2rem", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Main Content Area</h1>
        <p style={{ color: "#666" }}>Select a navigation item to see interaction states.</p>
      </main>
    </div>
  ),
};

/**
 * Navigation with badges showing unread counts or status
 */
export const WithBadges: Story = {
  render: () => (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <NavigationGroup label="MESSAGES">
          <NavigationItem 
            icon={<Icon name="trending-up" size={20} />}
            badge="3"
          >
            Inbox
          </NavigationItem>
          <NavigationItem 
            icon={<Icon name="alert-circle" size={20} />}
            badge="12"
          >
            Alerts
          </NavigationItem>
          <NavigationItem icon={<Icon name="trending-up" size={20} />}>
            Sent
          </NavigationItem>
        </NavigationGroup>
        
        <NavigationGroup label="PORTFOLIO">
          <NavigationItem 
            icon={<Icon name="chart-line" size={20} />}
            badge="NEW"
            active
          >
            Overview
          </NavigationItem>
          <NavigationItem icon={<Icon name="dollar-sign" size={20} />}>
            Positions
          </NavigationItem>
        </NavigationGroup>
      </Sidebar>
      
      <main style={{ flex: 1, padding: "2rem", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Notifications</h1>
        <p style={{ color: "#666" }}>Navigation items can show badges for counts or status.</p>
      </main>
    </div>
  ),
};

/**
 * Collapsible navigation groups for space management
 */
export const CollapsibleGroups: Story = {
  render: () => (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <NavigationGroup label="MARKETS" collapsible>
          <NavigationItem icon={<Icon name="trending-up" size={20} />}>
            Equities
          </NavigationItem>
          <NavigationItem icon={<Icon name="trending-down" size={20} />}>
            Bonds
          </NavigationItem>
          <NavigationItem icon={<Icon name="dollar-sign" size={20} />}>
            Currencies
          </NavigationItem>
          <NavigationItem icon={<Icon name="chart-line" size={20} />}>
            Commodities
          </NavigationItem>
        </NavigationGroup>
        
        <NavigationGroup label="ANALYTICS" collapsible defaultCollapsed>
          <NavigationItem icon={<Icon name="chart-line" size={20} />}>
            Charts
          </NavigationItem>
          <NavigationItem icon={<Icon name="trending-up" size={20} />}>
            Reports
          </NavigationItem>
          <NavigationItem icon={<Icon name="search" size={20} />}>
            Research
          </NavigationItem>
        </NavigationGroup>
        
        <NavigationGroup label="SETTINGS" collapsible>
          <NavigationItem icon={<Icon name="settings" size={20} />}>
            Preferences
          </NavigationItem>
          <NavigationItem icon={<Icon name="alert-circle" size={20} />}>
            Notifications
          </NavigationItem>
        </NavigationGroup>
      </Sidebar>
      
      <main style={{ flex: 1, padding: "2rem", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Collapsible Groups</h1>
        <p style={{ color: "#666" }}>Click group labels to expand/collapse sections.</p>
      </main>
    </div>
  ),
};

/**
 * All interactive states showcase
 */
export const InteractiveStates: Story = {
  render: () => (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <NavigationGroup label="STATES">
          <NavigationItem icon={<Icon name="trending-up" size={20} />}>
            Normal State (Hover me)
          </NavigationItem>
          <NavigationItem 
            icon={<Icon name="chart-line" size={20} />}
            active
          >
            Active State (4px blue border)
          </NavigationItem>
          <NavigationItem 
            icon={<Icon name="settings" size={20} />}
            disabled
          >
            Disabled State
          </NavigationItem>
        </NavigationGroup>
      </Sidebar>
      
      <main style={{ flex: 1, padding: "2rem", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Interactive States</h1>
        <div style={{ color: "#666", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.5rem" }}>States:</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#0068ff" }}>Normal:</strong> Default appearance
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#0068ff" }}>Hover:</strong> Background changes to #1a1a1a
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#0068ff" }}>Focus:</strong> Blue ring indicator (Tab navigation)
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#0068ff" }}>Active:</strong> 4px blue left border + blue tint background
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#0068ff" }}>Disabled:</strong> 50% opacity, no interaction
            </li>
          </ul>
        </div>
        <div style={{ color: "#666" }}>
          <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.5rem" }}>Transitions:</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#4af6c3" }}>NORMAL → HOVER:</strong> 100ms ease-in-out
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#4af6c3" }}>HOVER → NORMAL:</strong> 100ms ease-out
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#4af6c3" }}>FOCUS → ACTIVE:</strong> 200ms linear
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#4af6c3" }}>CLICK → ACTIVE:</strong> 50ms instant
            </li>
          </ul>
        </div>
      </main>
    </div>
  ),
};

/**
 * Accessibility features demonstration
 */
export const AccessibilityFeatures: Story = {
  render: () => (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <NavigationGroup label="NAVIGATION">
          <NavigationItem icon={<Icon name="trending-up" size={20} />}>
            Home (Press Tab)
          </NavigationItem>
          <NavigationItem icon={<Icon name="chart-line" size={20} />}>
            Markets (Arrow Keys)
          </NavigationItem>
          <NavigationItem 
            icon={<Icon name="dollar-sign" size={20} />}
            active
          >
            Portfolio (Enter to Activate)
          </NavigationItem>
          <NavigationItem icon={<Icon name="settings" size={20} />}>
            Settings (Shift+Tab to reverse)
          </NavigationItem>
        </NavigationGroup>
      </Sidebar>
      
      <main style={{ flex: 1, padding: "2rem", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Accessibility Features</h1>
        <div style={{ color: "#666", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.5rem" }}>
            🔤 Keyboard Navigation:
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#4af6c3" }}>TAB:</strong> Focus next item
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#4af6c3" }}>SHIFT+TAB:</strong> Focus previous item
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong style={{ color: "#4af6c3" }}>ENTER:</strong> Activate focused item
            </li>
          </ul>
        </div>
        <div style={{ color: "#666" }}>
          <h2 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.5rem" }}>
            ♿ Screen Reader Support:
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              ✓ High Contrast Mode compatible
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✓ Keyboard navigable (Tab, Shift+Tab, Enter)
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✓ Screen reader ready with ARIA labels
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✓ WCAG 2.1 AA compliant contrast ratios
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✓ Focus indicators (2px blue ring)
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              ✓ aria-current=&quot;page&quot; for active items
            </li>
          </ul>
        </div>
      </main>
    </div>
  ),
};

/**
 * Full trading application layout example
 */
export const TradingDashboard: Story = {
  render: () => {
    const [activeItem, setActiveItem] = React.useState("Dashboard");
    
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar>
          <NavigationGroup label="MAIN">
            <NavigationItem 
              icon={<Icon name="trending-up" size={20} />}
              active={activeItem === "Home"}
              onClick={() => setActiveItem("Home")}
            >
              Home
            </NavigationItem>
            <NavigationItem 
              icon={<Icon name="chart-line" size={20} />}
              active={activeItem === "Dashboard"}
              onClick={() => setActiveItem("Dashboard")}
              badge="LIVE"
            >
              Dashboard
            </NavigationItem>
            <NavigationItem 
              icon={<Icon name="trending-up" size={20} />}
              active={activeItem === "Markets"}
              onClick={() => setActiveItem("Markets")}
            >
              Markets
            </NavigationItem>
          </NavigationGroup>
          
          <NavigationGroup label="PORTFOLIO">
            <NavigationItem 
              icon={<Icon name="dollar-sign" size={20} />}
              active={activeItem === "Positions"}
              onClick={() => setActiveItem("Positions")}
            >
              Positions
            </NavigationItem>
            <NavigationItem 
              icon={<Icon name="trending-up" size={20} />}
              active={activeItem === "Orders"}
              onClick={() => setActiveItem("Orders")}
              badge="3"
            >
              Orders
            </NavigationItem>
          </NavigationGroup>
          
          <NavigationGroup label="TOOLS">
            <NavigationItem 
              icon={<Icon name="search" size={20} />}
              active={activeItem === "Research"}
              onClick={() => setActiveItem("Research")}
            >
              Research
            </NavigationItem>
            <NavigationItem 
              icon={<Icon name="alert-circle" size={20} />}
              active={activeItem === "Alerts"}
              onClick={() => setActiveItem("Alerts")}
              badge="7"
            >
              Alerts
            </NavigationItem>
            <NavigationItem 
              icon={<Icon name="settings" size={20} />}
              active={activeItem === "Settings"}
              onClick={() => setActiveItem("Settings")}
            >
              Settings
            </NavigationItem>
          </NavigationGroup>
        </Sidebar>
        
        <main style={{ 
          flex: 1, 
          padding: "2rem", 
          backgroundColor: "#000", 
          color: "#fff",
          overflow: "auto"
        }}>
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
              {activeItem}
            </h1>
            <p style={{ color: "#666" }}>
              {activeItem === "Dashboard" && "Real-time market overview and portfolio performance"}
              {activeItem === "Markets" && "Live market data and trading opportunities"}
              {activeItem === "Positions" && "View and manage your current positions"}
              {activeItem === "Orders" && "Active and pending orders"}
              {activeItem === "Research" && "Market research and analysis tools"}
              {activeItem === "Alerts" && "Price alerts and notifications"}
              {activeItem === "Settings" && "Application preferences and configuration"}
              {activeItem === "Home" && "Your personalized trading workspace"}
            </p>
          </div>
          
          {/* Mock trading interface */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "1rem",
            marginTop: "2rem"
          }}>
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                style={{ 
                  backgroundColor: "#1a1a1a", 
                  padding: "1.5rem",
                  borderRadius: "4px",
                  border: "1px solid #333"
                }}
              >
                <h3 style={{ fontSize: "0.875rem", color: "#666", marginBottom: "0.5rem" }}>
                  AAPL · Apple Inc.
                </h3>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                  $150.25
                </div>
                <div style={{ color: "#4af6c3", fontSize: "0.875rem" }}>
                  +2.45 (+1.66%)
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  },
};

/**
 * Compact navigation without labels
 */
export const CompactMode: Story = {
  render: () => (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar width={80}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem 0" }}>
          <NavigationItem 
            icon={<Icon name="trending-up" size={24} />}
            style={{ justifyContent: "center", paddingLeft: 0, paddingRight: 0 }}
            title="Home"
          />
          <NavigationItem 
            icon={<Icon name="chart-line" size={24} />}
            active
            style={{ justifyContent: "center", paddingLeft: 0, paddingRight: 0 }}
            title="Dashboard"
          />
          <NavigationItem 
            icon={<Icon name="dollar-sign" size={24} />}
            style={{ justifyContent: "center", paddingLeft: 0, paddingRight: 0 }}
            title="Portfolio"
          />
          <NavigationItem 
            icon={<Icon name="settings" size={24} />}
            style={{ justifyContent: "center", paddingLeft: 0, paddingRight: 0 }}
            title="Settings"
          />
        </div>
      </Sidebar>
      
      <main style={{ flex: 1, padding: "2rem", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Compact Sidebar</h1>
        <p style={{ color: "#666" }}>
          Icon-only navigation for space-constrained layouts. Hover for tooltips.
        </p>
      </main>
    </div>
  ),
};
