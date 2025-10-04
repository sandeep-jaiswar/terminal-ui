import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter } from "@sandeep-jaiswar/card";
import { Button } from "@sandeep-jaiswar/ui";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
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
      options: ["default", "elevated", "outlined", "interactive"],
      description: "The visual variant of the card",
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
      description: "The padding size of the card",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Default card with standard styling
 */
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem', fontWeight: 600 }}>
          Portfolio Overview
        </h3>
        <p style={{ color: '#4af6c3' }}>+12.5% Today</p>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>Total Value: $1.2M</p>
      </div>
    ),
  },
};

/**
 * All card variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "320px" }}>
      <Card variant="default">
        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Default Card</h4>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>Standard card with dark background</p>
      </Card>
      
      <Card variant="elevated">
        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Elevated Card</h4>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>Card with shadow for elevation</p>
      </Card>
      
      <Card variant="outlined">
        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Outlined Card</h4>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>Transparent card with border</p>
      </Card>
      
      <Card variant="interactive">
        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Interactive Card</h4>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>Clickable card with hover effects</p>
      </Card>
    </div>
  ),
};

/**
 * Card with header, content, and footer
 */
export const WithSections: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: "320px" }}>
      <CardHeader>
        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            AAPL | 150.00 +1.50 (+1.01%)
          </h3>
        </div>
        <button
          style={{
            background: 'transparent',
            border: 'none',
            color: '#666',
            cursor: 'pointer',
            fontSize: '1.25rem',
          }}
        >
          ⚙
        </button>
      </CardHeader>
      
      <CardContent>
        <div style={{ marginBottom: '1rem' }}>
          <svg width="100%" height="60" style={{ marginBottom: '0.5rem' }}>
            <polyline
              points="0,50 20,45 40,40 60,35 80,30 100,25 120,30 140,20 160,15 180,10 200,5"
              fill="none"
              stroke="#4af6c3"
              strokeWidth="2"
            />
          </svg>
        </div>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>
          News: Apple stock rises on strong earnings report.
        </p>
      </CardContent>
      
      <CardFooter>
        <Button variant="secondary" size="sm" style={{ flex: 1 }}>
          View Chart
        </Button>
        <Button variant="primary" size="sm" style={{ flex: 1 }}>
          Trade
        </Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * Market summary card from dashboard
 */
export const MarketSummary: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: "320px" }}>
      <CardHeader>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>
          Market Summary
        </h3>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#666', fontSize: '0.875rem' }}>S&P 500</span>
            <span style={{ color: '#ff433d', fontSize: '0.875rem' }}>-0.45%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#666', fontSize: '0.875rem' }}>NASDAQ</span>
            <span style={{ color: '#ff433d', fontSize: '0.875rem' }}>-0.68%</span>
          </div>
          <svg width="100%" height="80" style={{ marginTop: '0.5rem' }}>
            <rect x="10" y="60" width="8" height="20" fill="#ff433d" />
            <rect x="25" y="40" width="8" height="40" fill="#4af6c3" />
            <rect x="40" y="50" width="8" height="30" fill="#ff433d" />
            <rect x="55" y="35" width="8" height="45" fill="#4af6c3" />
            <rect x="70" y="45" width="8" height="35" fill="#ff433d" />
            <rect x="85" y="30" width="8" height="50" fill="#4af6c3" />
            <line x1="0" y1="80" x2="100" y2="80" stroke="#333" strokeWidth="1" />
          </svg>
        </div>
      </CardContent>
    </Card>
  ),
};

/**
 * Top gainers card
 */
export const TopGainers: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: "240px" }}>
      <CardHeader>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>
          Top Gainers
        </h3>
        <span style={{ color: '#666', fontSize: '0.75rem' }}>43 fps</span>
      </CardHeader>
      <CardContent>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.5rem',
          minHeight: '100px',
          justifyContent: 'flex-end'
        }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.25rem', color: '#fff' }}>20 BB 93</div>
            <div style={{ fontSize: '0.875rem', color: '#0068ff' }}>Moomss 11.9M</div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

/**
 * Interactive card example
 */
export const Interactive: Story = {
  render: () => (
    <Card 
      variant="interactive" 
      onClick={() => alert('Card clicked!')}
      style={{ width: "320px" }}
    >
      <CardHeader>
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Watchlist</h3>
        <span style={{ color: '#666', fontSize: '0.75rem' }}>83 fps</span>
      </CardHeader>
      <CardContent>
        <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '2rem' }}>
          Click to view your watchlist
        </p>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.25rem', color: '#fff' }}>28GB 183</div>
          <div style={{ fontSize: '0.875rem', color: '#0068ff' }}>Moomss 13.2M</div>
        </div>
      </CardContent>
    </Card>
  ),
};

/**
 * Small padding card
 */
export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: (
      <div>
        <h4 style={{ marginBottom: '0.25rem', fontSize: '0.875rem' }}>Compact Card</h4>
        <p style={{ color: '#666', fontSize: '0.75rem' }}>Smaller padding for dense layouts</p>
      </div>
    ),
  },
};

/**
 * Large padding card
 */
export const LargePadding: Story = {
  args: {
    padding: "lg",
    children: (
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 600 }}>
          Spacious Card
        </h3>
        <p style={{ color: '#666' }}>Larger padding for important content</p>
      </div>
    ),
  },
};

/**
 * No padding card (for custom layouts)
 */
export const NoPadding: Story = {
  args: {
    padding: "none",
    children: (
      <div style={{ padding: '1rem' }}>
        <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Custom Padding</h4>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>
          Use padding=&quot;none&quot; to apply custom padding
        </p>
      </div>
    ),
  },
};

/**
 * Dashboard grid example
 */
export const DashboardGrid: Story = {
  render: () => (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(3, 1fr)", 
      gap: "1rem",
      padding: "1rem",
      maxWidth: "900px"
    }}>
      <Card variant="elevated" style={{ gridColumn: "span 2" }}>
        <CardHeader>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>
            Portfolio Overview
          </h3>
        </CardHeader>
        <CardContent>
          <p style={{ color: '#4af6c3', fontSize: '1.5rem', marginBottom: '0.5rem' }}>+12.5% Today</p>
          <p style={{ color: '#666', fontSize: '0.875rem' }}>Total Value: $1.2M</p>
        </CardContent>
      </Card>
      
      <Card variant="elevated">
        <CardHeader>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>
            Market Summary
          </h3>
        </CardHeader>
        <CardContent>
          <p style={{ color: '#ff433d', fontSize: '0.875rem' }}>S&P 500: -0.45%</p>
          <p style={{ color: '#ff433d', fontSize: '0.875rem' }}>NASDAQ: -0.68%</p>
        </CardContent>
      </Card>
      
      <Card variant="elevated">
        <CardHeader>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>
            Top Gainers
          </h3>
        </CardHeader>
        <CardContent>
          <div style={{ fontSize: '1.125rem' }}>20 BB 93</div>
          <div style={{ color: '#0068ff', fontSize: '0.75rem' }}>Moomss 11.9M</div>
        </CardContent>
      </Card>
      
      <Card variant="elevated">
        <CardHeader>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>
            Top Losers
          </h3>
        </CardHeader>
        <CardContent>
          <div style={{ fontSize: '1.125rem' }}>10.8B1B5</div>
          <div style={{ color: '#0068ff', fontSize: '0.75rem' }}>Moomss 1F.1M</div>
        </CardContent>
      </Card>
      
      <Card variant="elevated">
        <CardHeader>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>
            Commodities
          </h3>
        </CardHeader>
        <CardContent>
          <div style={{ fontSize: '1.125rem' }}>10B9.D3</div>
          <div style={{ color: '#0068ff', fontSize: '0.75rem' }}>Moomss 11.3M</div>
        </CardContent>
      </Card>
    </div>
  ),
};
