import type { Meta, StoryObj } from "@storybook/react";
import {
  Sparkline,
  LineChart,
  AreaChart,
  CandlestickChart,
  type DataPoint,
  type OHLCDataPoint,
} from "@sandeep-jaiswar/charts";
import React from "react";

const meta: Meta = {
  title: "Components/Charts",
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

// ====================
// SPARKLINE STORIES
// ====================

/**
 * Sparkline showing positive trend (bullish)
 */
export const SparklinePositive: StoryObj = {
  render: () => {
    const data = [100, 102, 101, 105, 108, 107, 112, 115, 113, 118];
    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <span style={{ color: "#fff", fontSize: "14px", width: "80px" }}>
            AAPL
          </span>
          <span
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              width: "80px",
            }}
          >
            $118.00
          </span>
          <Sparkline data={data} width={120} height={40} showPercentage />
        </div>
      </div>
    );
  },
};

/**
 * Sparkline showing negative trend (bearish)
 */
export const SparklineNegative: StoryObj = {
  render: () => {
    const data = [120, 118, 115, 117, 112, 110, 108, 105, 107, 102];
    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <span style={{ color: "#fff", fontSize: "14px", width: "80px" }}>
            TSLA
          </span>
          <span
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              width: "80px",
            }}
          >
            $102.00
          </span>
          <Sparkline data={data} width={120} height={40} showPercentage />
        </div>
      </div>
    );
  },
};

/**
 * Sparkline showing neutral/sideways trend
 */
export const SparklineNeutral: StoryObj = {
  render: () => {
    const data = [100, 101, 100, 99, 100, 101, 100, 99, 100, 100];
    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <span style={{ color: "#fff", fontSize: "14px", width: "80px" }}>
            MSFT
          </span>
          <span
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              width: "80px",
            }}
          >
            $100.00
          </span>
          <Sparkline data={data} width={120} height={40} showPercentage />
        </div>
      </div>
    );
  },
};

/**
 * Multiple sparklines in a watchlist
 */
export const SparklineWatchlist: StoryObj = {
  render: () => {
    const stocks = [
      {
        symbol: "AAPL",
        price: 175.43,
        data: [165, 168, 170, 172, 169, 174, 176, 175.43],
      },
      {
        symbol: "GOOGL",
        price: 142.56,
        data: [145, 144, 142, 143, 141, 140, 141, 142.56],
      },
      {
        symbol: "MSFT",
        price: 378.91,
        data: [370, 375, 373, 378, 380, 377, 379, 378.91],
      },
      {
        symbol: "TSLA",
        price: 248.42,
        data: [260, 258, 255, 252, 250, 248, 249, 248.42],
      },
      {
        symbol: "AMZN",
        price: 151.94,
        data: [148, 150, 149, 151, 152, 150, 151, 151.94],
      },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <h3
            style={{
              color: "#0068ff",
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            WATCHLIST
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {stocks.map((stock) => (
              <div
                key={stock.symbol}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 100px 140px 80px",
                  alignItems: "center",
                  padding: "8px",
                  backgroundColor: "#000",
                  borderRadius: "2px",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "13px",
                    fontFamily: "monospace",
                    fontWeight: 600,
                  }}
                >
                  {stock.symbol}
                </span>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontFamily: "monospace",
                  }}
                >
                  ${stock.price.toFixed(2)}
                </span>
                <Sparkline data={stock.data} width={120} height={32} />
                <Sparkline
                  data={stock.data}
                  width={60}
                  height={20}
                  showPercentage
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Sparkline variants showcase
 */
export const SparklineVariants: StoryObj = {
  render: () => {
    const positiveBullish = [100, 105, 103, 108, 112, 110, 115];
    const positiveVolatile = [100, 95, 108, 102, 115, 108, 118];
    const positiveSmooth = [100, 102, 104, 106, 108, 110, 112];
    const negativeBearish = [120, 115, 117, 112, 108, 110, 105];
    const negativeVolatile = [120, 125, 112, 118, 105, 110, 102];
    const negativeSmooth = [120, 118, 116, 114, 112, 110, 108];
    const neutral = [100, 101, 100, 99, 100, 101, 100];
    const neutralErratic = [100, 98, 102, 99, 101, 100, 100];

    const variants = [
      { label: "Positive Trend - Bullish", data: positiveBullish },
      { label: "Positive Trend - Volatile Bullish", data: positiveVolatile },
      { label: "Positive Trend - Smooth Bullish", data: positiveSmooth },
      { label: "Negative Trend - Bearish", data: negativeBearish },
      { label: "Negative Trend - Volatile Bearish", data: negativeVolatile },
      { label: "Negative Trend - Smooth Bearish", data: negativeSmooth },
      { label: "Neutral Trend - Sideways", data: neutral },
      { label: "Neutral Trend - Erratic", data: neutralErratic },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {variants.map((variant, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1a1a1a",
                padding: "1rem",
                borderRadius: "4px",
                border: "1px solid #333",
                textAlign: "center",
              }}
            >
              <Sparkline data={variant.data} width={120} height={40} />
              <div
                style={{
                  marginTop: "0.5rem",
                  color: "#666",
                  fontSize: "11px",
                }}
              >
                {variant.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// ====================
// LINE CHART STORIES
// ====================

/**
 * Simple line chart with single series
 */
export const LineChartSimple: StoryObj = {
  render: () => {
    const data: DataPoint[] = [
      { x: 0, y: 100 },
      { x: 1, y: 120 },
      { x: 2, y: 115 },
      { x: 3, y: 130 },
      { x: 4, y: 125 },
      { x: 5, y: 140 },
      { x: 6, y: 135 },
      { x: 7, y: 150 },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "14px",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Simple Line Chart (Single Series)
          </h3>
          <LineChart data={data} width={600} height={300} color="#4af6c3" />
        </div>
      </div>
    );
  },
};

/**
 * Multi-series comparison chart
 */
export const LineChartMultiSeries: StoryObj = {
  render: () => {
    const appleData: DataPoint[] = [
      { x: 0, y: 150 },
      { x: 1, y: 155 },
      { x: 2, y: 153 },
      { x: 3, y: 160 },
      { x: 4, y: 165 },
      { x: 5, y: 170 },
      { x: 6, y: 168 },
      { x: 7, y: 175 },
    ];

    const googleData: DataPoint[] = [
      { x: 0, y: 140 },
      { x: 1, y: 138 },
      { x: 2, y: 142 },
      { x: 3, y: 145 },
      { x: 4, y: 143 },
      { x: 5, y: 148 },
      { x: 6, y: 150 },
      { x: 7, y: 152 },
    ];

    const microsoftData: DataPoint[] = [
      { x: 0, y: 370 },
      { x: 1, y: 375 },
      { x: 2, y: 373 },
      { x: 3, y: 378 },
      { x: 4, y: 380 },
      { x: 5, y: 377 },
      { x: 6, y: 379 },
      { x: 7, y: 382 },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Stock Performance Comparison
            </h3>
            <div style={{ display: "flex", gap: "1rem", fontSize: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "2px",
                    backgroundColor: "#4af6c3",
                  }}
                />
                <span style={{ color: "#fff" }}>AAPL</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "2px",
                    backgroundColor: "#ff433d",
                  }}
                />
                <span style={{ color: "#fff" }}>GOOGL</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "2px",
                    backgroundColor: "#0068ff",
                  }}
                />
                <span style={{ color: "#fff" }}>MSFT</span>
              </div>
            </div>
          </div>
          <LineChart
            data={[appleData, googleData, microsoftData]}
            width={600}
            height={350}
            color={["#4af6c3", "#ff433d", "#0068ff"]}
          />
        </div>
      </div>
    );
  },
};

/**
 * Stepped line chart for discrete data
 */
export const LineChartStepped: StoryObj = {
  render: () => {
    const data: DataPoint[] = [
      { x: 0, y: 90 },
      { x: 1, y: 90 },
      { x: 2, y: 180 },
      { x: 3, y: 180 },
      { x: 4, y: 180 },
      { x: 5, y: 100 },
      { x: 6, y: 100 },
      { x: 7, y: 160 },
      { x: 8, y: 160 },
      { x: 9, y: 160 },
      { x: 10, y: 160 },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "14px",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Stepped Line Chart (Discrete Data)
          </h3>
          <LineChart data={data} width={600} height={300} color="#0068ff" />
        </div>
      </div>
    );
  },
};

// ====================
// AREA CHART STORIES
// ====================

/**
 * Single area chart
 */
export const AreaChartSingle: StoryObj = {
  render: () => {
    const data: DataPoint[] = [
      { x: 0, y: 30 },
      { x: 1, y: 40 },
      { x: 2, y: 45 },
      { x: 3, y: 50 },
      { x: 4, y: 49 },
      { x: 5, y: 60 },
      { x: 6, y: 70 },
      { x: 7, y: 91 },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "14px",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Single Area Chart
          </h3>
          <AreaChart
            data={data}
            width={600}
            height={300}
            color="#4af6c3"
            fillOpacity={0.3}
          />
        </div>
      </div>
    );
  },
};

/**
 * Multi-series area chart (Market Share by Sector)
 */
export const AreaChartMultiSeries: StoryObj = {
  render: () => {
    const tech: DataPoint[] = [
      { x: 0, y: 20 },
      { x: 1, y: 25 },
      { x: 2, y: 30 },
      { x: 3, y: 28 },
      { x: 4, y: 35 },
      { x: 5, y: 40 },
      { x: 6, y: 38 },
      { x: 7, y: 45 },
    ];

    const healthcare: DataPoint[] = [
      { x: 0, y: 30 },
      { x: 1, y: 32 },
      { x: 2, y: 35 },
      { x: 3, y: 33 },
      { x: 4, y: 36 },
      { x: 5, y: 38 },
      { x: 6, y: 40 },
      { x: 7, y: 42 },
    ];

    const finance: DataPoint[] = [
      { x: 0, y: 25 },
      { x: 1, y: 23 },
      { x: 2, y: 24 },
      { x: 3, y: 26 },
      { x: 4, y: 25 },
      { x: 5, y: 27 },
      { x: 6, y: 28 },
      { x: 7, y: 30 },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Market Share by Sector
            </h3>
            <div style={{ display: "flex", gap: "1rem", fontSize: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#0068ff",
                    opacity: 0.3,
                  }}
                />
                <span style={{ color: "#fff" }}>Technology</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#fb8b1e",
                    opacity: 0.3,
                  }}
                />
                <span style={{ color: "#fff" }}>Healthcare</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#9333ea",
                    opacity: 0.3,
                  }}
                />
                <span style={{ color: "#fff" }}>Finance</span>
              </div>
            </div>
          </div>
          <AreaChart
            data={[tech, healthcare, finance]}
            width={600}
            height={350}
            color={["#0068ff", "#fb8b1e", "#9333ea"]}
            fillOpacity={0.3}
          />
        </div>
      </div>
    );
  },
};

/**
 * Index returns comparison with areas
 */
export const AreaChartIndexReturns: StoryObj = {
  render: () => {
    const sp500: DataPoint[] = [
      { x: 0, y: 0 },
      { x: 1, y: 5 },
      { x: 2, y: 8 },
      { x: 3, y: 12 },
      { x: 4, y: 10 },
      { x: 5, y: 15 },
      { x: 6, y: 18 },
      { x: 7, y: 22 },
      { x: 8, y: 25 },
    ];

    const nasdaq: DataPoint[] = [
      { x: 0, y: 0 },
      { x: 1, y: -2 },
      { x: 2, y: 3 },
      { x: 3, y: 8 },
      { x: 4, y: 5 },
      { x: 5, y: 12 },
      { x: 6, y: 18 },
      { x: 7, y: 25 },
      { x: 8, y: 30 },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Index Returns (YoY %)
            </h3>
            <div style={{ display: "flex", gap: "1rem", fontSize: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "2px",
                    backgroundColor: "#4af6c3",
                  }}
                />
                <span style={{ color: "#fff" }}>S&P 500</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "2px",
                    backgroundColor: "#ff433d",
                  }}
                />
                <span style={{ color: "#fff" }}>NASDAQ Composite</span>
              </div>
            </div>
          </div>
          <AreaChart
            data={[sp500, nasdaq]}
            width={600}
            height={350}
            color={["#4af6c3", "#ff433d"]}
            fillOpacity={0.2}
          />
        </div>
      </div>
    );
  },
};

// ====================
// CANDLESTICK STORIES
// ====================

/**
 * Candlestick chart with volume
 */
export const CandlestickWithVolume: StoryObj = {
  render: () => {
    const data: OHLCDataPoint[] = [
      {
        timestamp: "2024-01-01",
        open: 150,
        high: 155,
        low: 148,
        close: 153,
        volume: 1000000,
      },
      {
        timestamp: "2024-01-02",
        open: 153,
        high: 158,
        low: 152,
        close: 157,
        volume: 1200000,
      },
      {
        timestamp: "2024-01-03",
        open: 157,
        high: 160,
        low: 155,
        close: 156,
        volume: 900000,
      },
      {
        timestamp: "2024-01-04",
        open: 156,
        high: 162,
        low: 154,
        close: 160,
        volume: 1500000,
      },
      {
        timestamp: "2024-01-05",
        open: 160,
        high: 165,
        low: 159,
        close: 163,
        volume: 1300000,
      },
      {
        timestamp: "2024-01-08",
        open: 163,
        high: 166,
        low: 160,
        close: 161,
        volume: 1100000,
      },
      {
        timestamp: "2024-01-09",
        open: 161,
        high: 164,
        low: 158,
        close: 159,
        volume: 1000000,
      },
      {
        timestamp: "2024-01-10",
        open: 159,
        high: 162,
        low: 157,
        close: 161,
        volume: 950000,
      },
      {
        timestamp: "2024-01-11",
        open: 161,
        high: 168,
        low: 160,
        close: 166,
        volume: 1800000,
      },
      {
        timestamp: "2024-01-12",
        open: 166,
        high: 170,
        low: 164,
        close: 168,
        volume: 1600000,
      },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "14px",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            OHLC Candlestick Chart with Volume
          </h3>
          <CandlestickChart data={data} width={700} height={450} />
        </div>
      </div>
    );
  },
};

/**
 * Candlestick chart showing downtrend
 */
export const CandlestickBearish: StoryObj = {
  render: () => {
    const data: OHLCDataPoint[] = [
      {
        timestamp: "2024-01-01",
        open: 280,
        high: 285,
        low: 278,
        close: 282,
        volume: 2000000,
      },
      {
        timestamp: "2024-01-02",
        open: 282,
        high: 283,
        low: 275,
        close: 276,
        volume: 2500000,
      },
      {
        timestamp: "2024-01-03",
        open: 276,
        high: 278,
        low: 270,
        close: 271,
        volume: 2800000,
      },
      {
        timestamp: "2024-01-04",
        open: 271,
        high: 274,
        low: 265,
        close: 268,
        volume: 3000000,
      },
      {
        timestamp: "2024-01-05",
        open: 268,
        high: 272,
        low: 266,
        close: 270,
        volume: 2200000,
      },
      {
        timestamp: "2024-01-08",
        open: 270,
        high: 271,
        low: 262,
        close: 264,
        volume: 2700000,
      },
      {
        timestamp: "2024-01-09",
        open: 264,
        high: 268,
        low: 260,
        close: 262,
        volume: 2600000,
      },
      {
        timestamp: "2024-01-10",
        open: 262,
        high: 265,
        low: 258,
        close: 260,
        volume: 2400000,
      },
      {
        timestamp: "2024-01-11",
        open: 260,
        high: 263,
        low: 256,
        close: 258,
        volume: 2500000,
      },
      {
        timestamp: "2024-01-12",
        open: 258,
        high: 261,
        low: 254,
        close: 255,
        volume: 2900000,
      },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "14px",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Bearish Candlestick Pattern
          </h3>
          <CandlestickChart data={data} width={700} height={450} />
        </div>
      </div>
    );
  },
};

/**
 * Candlestick without volume bars
 */
export const CandlestickNoVolume: StoryObj = {
  render: () => {
    const data: OHLCDataPoint[] = [
      {
        timestamp: "2024-01-01",
        open: 100,
        high: 105,
        low: 98,
        close: 103,
      },
      { timestamp: "2024-01-02", open: 103, high: 108, low: 102, close: 107 },
      { timestamp: "2024-01-03", open: 107, high: 110, low: 105, close: 106 },
      { timestamp: "2024-01-04", open: 106, high: 112, low: 104, close: 110 },
      { timestamp: "2024-01-05", open: 110, high: 115, low: 109, close: 113 },
      { timestamp: "2024-01-08", open: 113, high: 116, low: 110, close: 111 },
      { timestamp: "2024-01-09", open: 111, high: 114, low: 108, close: 109 },
      { timestamp: "2024-01-10", open: 109, high: 112, low: 107, close: 111 },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "1rem",
            borderRadius: "4px",
            border: "1px solid #333",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "14px",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Candlestick Chart (No Volume)
          </h3>
          <CandlestickChart
            data={data}
            width={700}
            height={350}
            showVolume={false}
          />
        </div>
      </div>
    );
  },
};

/**
 * All chart types showcase
 */
export const AllChartTypes: StoryObj = {
  render: () => {
    const sparklineData = [100, 105, 103, 108, 112, 110, 115, 118];
    const lineData: DataPoint[] = [
      { x: 0, y: 100 },
      { x: 1, y: 110 },
      { x: 2, y: 105 },
      { x: 3, y: 115 },
      { x: 4, y: 120 },
      { x: 5, y: 118 },
    ];
    const areaData: DataPoint[] = [
      { x: 0, y: 30 },
      { x: 1, y: 40 },
      { x: 2, y: 35 },
      { x: 3, y: 50 },
      { x: 4, y: 49 },
      { x: 5, y: 60 },
    ];
    const candleData: OHLCDataPoint[] = [
      {
        timestamp: "1",
        open: 100,
        high: 105,
        low: 98,
        close: 103,
        volume: 1000,
      },
      {
        timestamp: "2",
        open: 103,
        high: 108,
        low: 102,
        close: 107,
        volume: 1200,
      },
      {
        timestamp: "3",
        open: 107,
        high: 110,
        low: 105,
        close: 106,
        volume: 900,
      },
      {
        timestamp: "4",
        open: 106,
        high: 112,
        low: 104,
        close: 110,
        volume: 1500,
      },
    ];

    return (
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
        >
          {/* Sparkline */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              border: "1px solid #333",
            }}
          >
            <h4
              style={{
                color: "#0068ff",
                fontSize: "12px",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              SPARKLINE
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.5rem",
                backgroundColor: "#000",
                borderRadius: "2px",
              }}
            >
              <span style={{ color: "#fff", fontSize: "14px" }}>AAPL</span>
              <Sparkline
                data={sparklineData}
                width={120}
                height={40}
                showPercentage
              />
            </div>
          </div>

          {/* Line Chart */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              border: "1px solid #333",
            }}
          >
            <h4
              style={{
                color: "#0068ff",
                fontSize: "12px",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              LINE CHART
            </h4>
            <LineChart data={lineData} width={350} height={200} />
          </div>

          {/* Area Chart */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              border: "1px solid #333",
            }}
          >
            <h4
              style={{
                color: "#0068ff",
                fontSize: "12px",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              AREA CHART
            </h4>
            <AreaChart
              data={areaData}
              width={350}
              height={200}
              color="#4af6c3"
            />
          </div>

          {/* Candlestick */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "1rem",
              borderRadius: "4px",
              border: "1px solid #333",
            }}
          >
            <h4
              style={{
                color: "#0068ff",
                fontSize: "12px",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              CANDLESTICK CHART
            </h4>
            <CandlestickChart data={candleData} width={350} height={200} />
          </div>
        </div>
      </div>
    );
  },
};
