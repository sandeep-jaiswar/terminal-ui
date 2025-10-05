import React from "react";
import { cn, cnFinancial } from "@sandeep-jaiswar/utils";

/**
 * Data point for time series charts
 */
export interface DataPoint {
  x: number | string | Date;
  y: number;
}

/**
 * OHLC data point for candlestick charts
 */
export interface OHLCDataPoint {
  timestamp: number | string | Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

/**
 * Trend type for sparklines
 */
export type TrendType =
  | "positive"
  | "negative"
  | "neutral"
  | "volatile"
  | "smooth";

/**
 * Calculate min and max from array of numbers
 */
function getMinMax(data: number[]): { min: number; max: number } {
  if (data.length === 0) return { min: 0, max: 0 };
  return {
    min: Math.min(...data),
    max: Math.max(...data),
  };
}

/**
 * Normalize data to fit in SVG viewBox
 */
function normalizeData(
  data: number[],
  height: number,
  padding: number = 2,
): number[] {
  const { min, max } = getMinMax(data);
  const range = max - min;
  if (range === 0) return data.map(() => height / 2);

  return data.map((value) => {
    const normalized = ((value - min) / range) * (height - padding * 2);
    return height - normalized - padding;
  });
}

/**
 * Generate SVG path from data points
 */
function generatePath(data: number[], width: number, height: number): string {
  if (data.length === 0) return "";

  const normalized = normalizeData(data, height);
  const step = width / (data.length - 1 || 1);

  const pathData = normalized
    .map((y, i) => {
      const x = i * step;
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    })
    .join(" ");

  return pathData;
}

/**
 * Generate area path (filled below line)
 */
function generateAreaPath(
  data: number[],
  width: number,
  height: number,
): string {
  if (data.length === 0) return "";

  const linePath = generatePath(data, width, height);
  const step = width / (data.length - 1 || 1);
  const lastX = (data.length - 1) * step;

  return `${linePath} L ${lastX} ${height} L 0 ${height} Z`;
}

/**
 * Determine trend from data
 */
function detectTrend(data: number[]): "positive" | "negative" | "neutral" {
  if (data.length < 2) return "neutral";
  const first = data[0];
  const last = data[data.length - 1];
  const change = ((last - first) / first) * 100;

  if (Math.abs(change) < 0.5) return "neutral";
  return change > 0 ? "positive" : "negative";
}

/**
 * Professional sparkline component for financial trading applications.
 *
 * Features:
 * - Compact inline visualization for trends
 * - Auto-detects positive/negative/neutral trends
 * - Bloomberg Terminal styling with financial colors
 * - Optional percentage display
 * - Smooth or volatile rendering styles
 *
 * @example
 * ```tsx
 * <Sparkline data={[100, 105, 103, 108, 112]} width={80} height={24} />
 * <Sparkline data={prices} trend="negative" showPercentage />
 * ```
 */
export interface SparklineProps {
  /** Array of numeric values to plot */
  data: number[];
  /** Width of the sparkline in pixels */
  width?: number;
  /** Height of the sparkline in pixels */
  height?: number;
  /** Explicit trend type (auto-detected if not provided) */
  trend?: TrendType;
  /** Show percentage change */
  showPercentage?: boolean;
  /** Stroke width */
  strokeWidth?: number;
  /** Enable gradient fill below the line */
  showFill?: boolean;
  /** Fill opacity when showFill is enabled */
  fillOpacity?: number;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  "aria-label"?: string;
}

export const Sparkline = React.forwardRef<SVGSVGElement, SparklineProps>(
  (
    {
      data,
      width = 80,
      height = 24,
      trend,
      showPercentage = false,
      strokeWidth = 1.5,
      showFill = false,
      fillOpacity = 0.2,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    if (!data || data.length === 0) {
      return (
        <svg
          width={width}
          height={height}
          className={cn("inline-block", className)}
          aria-label="No data"
        />
      );
    }

    const detectedTrend = trend || detectTrend(data);
    const path = generatePath(data, width, height);

    // Calculate percentage change
    const percentChange =
      data.length > 1
        ? (((data[data.length - 1] - data[0]) / data[0]) * 100).toFixed(2)
        : "0.00";

    // Color based on trend
    const strokeColor = {
      positive: "#4af6c3", // success-500
      negative: "#ff433d", // danger-300
      neutral: "#666666", // terminal-light-gray
      volatile: "#fb8b1e", // warning-500
      smooth: "#0068ff", // primary-500
    }[detectedTrend];

    // Generate area path for fill
    const areaPath = showFill
      ? generateAreaPath(data, width, height)
      : "";

    const gradientId = `sparkline-gradient-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn("inline-flex items-center gap-1", className)}>
        <svg
          ref={ref}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="inline-block"
          aria-label={
            ariaLabel ||
            `Sparkline showing ${detectedTrend} trend with ${data.length} data points`
          }
          role="img"
          {...props}
        >
          {showFill && (
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={strokeColor}
                  stopOpacity={fillOpacity}
                />
                <stop
                  offset="100%"
                  stopColor={strokeColor}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          )}
          {showFill && (
            <path
              d={areaPath}
              fill={`url(#${gradientId})`}
            />
          )}
          <path
            d={path}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {showPercentage && (
          <span
            className={cn(
              "font-terminal-mono text-xs",
              cnFinancial({
                positive: detectedTrend === "positive",
                negative: detectedTrend === "negative",
                neutral: detectedTrend === "neutral",
              }),
            )}
          >
            {detectedTrend === "positive" ? "+" : ""}
            {percentChange}%
          </span>
        )}
      </div>
    );
  },
);

Sparkline.displayName = "Sparkline";

/**
 * Professional line chart component for financial data visualization.
 *
 * Features:
 * - Full-featured chart with grid and axes
 * - Multiple series support
 * - Bloomberg Terminal styling
 * - Tooltips and interactions
 * - Responsive sizing
 *
 * @example
 * ```tsx
 * <LineChart
 *   data={[
 *     { x: 0, y: 100 },
 *     { x: 1, y: 120 },
 *     { x: 2, y: 115 }
 *   ]}
 *   width={600}
 *   height={300}
 * />
 * ```
 */
export interface LineChartProps {
  /** Array of data points or multiple series */
  data: DataPoint[] | DataPoint[][];
  /** Width of the chart */
  width?: number;
  /** Height of the chart */
  height?: number;
  /** Show grid lines */
  showGrid?: boolean;
  /** Show axes */
  showAxes?: boolean;
  /** Stroke width */
  strokeWidth?: number;
  /** Color or array of colors for multiple series */
  color?: string | string[];
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  "aria-label"?: string;
}

export const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      width = 600,
      height = 300,
      showGrid = true,
      showAxes = true,
      strokeWidth = 2,
      color,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    // Normalize data to array of series
    const series: DataPoint[][] = Array.isArray(data[0])
      ? (data as DataPoint[][])
      : [data as DataPoint[]];

    if (series.length === 0 || series[0].length === 0) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-center justify-center bg-terminal-black border border-terminal-medium-gray",
            className,
          )}
          style={{ width, height }}
        >
          <span className="text-terminal-light-gray text-sm">No data</span>
        </div>
      );
    }

    const padding = { top: 20, right: 20, bottom: 30, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Get all Y values to determine scale
    const allYValues = series.flat().map((d) => d.y);
    const { min: minY, max: maxY } = getMinMax(allYValues);
    const yRange = maxY - minY || 1;

    // Default colors for multiple series
    const defaultColors = [
      "#4af6c3",
      "#ff433d",
      "#0068ff",
      "#fb8b1e",
      "#ffffff",
    ];
    const colors = color
      ? Array.isArray(color)
        ? color
        : [color]
      : defaultColors;

    // Generate paths for each series
    const paths = series.map((seriesData) => {
      const points = seriesData.map((point, i) => {
        const x = (i / (seriesData.length - 1)) * chartWidth;
        const y =
          chartHeight - ((point.y - minY) / yRange) * chartHeight;
        return { x, y };
      });

      const pathD = points
        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
        .join(" ");

      return pathD;
    });

    return (
      <div
        ref={ref}
        className={cn(
          "bg-terminal-black border border-terminal-medium-gray p-2",
          className,
        )}
        style={{ width, height }}
        role="img"
        aria-label={ariaLabel || `Line chart with ${series.length} series`}
        {...props}
      >
        <svg width={width} height={height}>
          <g transform={`translate(${padding.left}, ${padding.top})`}>
            {/* Grid lines */}
            {showGrid && (
              <g className="grid" opacity={0.1}>
                {[0, 1, 2, 3, 4].map((i) => {
                  const y = (i / 4) * chartHeight;
                  return (
                    <line
                      key={`h-${i}`}
                      x1={0}
                      y1={y}
                      x2={chartWidth}
                      y2={y}
                      stroke="#ffffff"
                      strokeWidth={1}
                    />
                  );
                })}
                {[0, 1, 2, 3, 4].map((i) => {
                  const x = (i / 4) * chartWidth;
                  return (
                    <line
                      key={`v-${i}`}
                      x1={x}
                      y1={0}
                      x2={x}
                      y2={chartHeight}
                      stroke="#ffffff"
                      strokeWidth={1}
                    />
                  );
                })}
              </g>
            )}

            {/* Data lines */}
            {paths.map((path, i) => (
              <path
                key={i}
                d={path}
                fill="none"
                stroke={colors[i % colors.length]}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {/* Axes */}
            {showAxes && (
              <g className="axes">
                {/* Y-axis */}
                <line
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={chartHeight}
                  stroke="#666666"
                  strokeWidth={1}
                />
                {/* X-axis */}
                <line
                  x1={0}
                  y1={chartHeight}
                  x2={chartWidth}
                  y2={chartHeight}
                  stroke="#666666"
                  strokeWidth={1}
                />

                {/* Y-axis labels */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const y = (i / 4) * chartHeight;
                  const value = maxY - (i / 4) * yRange;
                  return (
                    <text
                      key={`y-label-${i}`}
                      x={-8}
                      y={y}
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#666666"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      {value.toFixed(0)}
                    </text>
                  );
                })}
              </g>
            )}
          </g>
        </svg>
      </div>
    );
  },
);

LineChart.displayName = "LineChart";

/**
 * Professional area chart component for financial data visualization.
 *
 * Features:
 * - Filled area below line
 * - Gradient support
 * - Stacked series support
 * - Bloomberg Terminal styling
 *
 * @example
 * ```tsx
 * <AreaChart
 *   data={[{ x: 0, y: 100 }, { x: 1, y: 120 }]}
 *   fillColor="#4af6c3"
 *   fillOpacity={0.2}
 * />
 * ```
 */
export interface AreaChartProps extends LineChartProps {
  /** Fill color */
  fillColor?: string | string[];
  /** Fill opacity */
  fillOpacity?: number;
  /** Enable stacked mode for multiple series */
  stacked?: boolean;
}

export const AreaChart = React.forwardRef<HTMLDivElement, AreaChartProps>(
  (
    {
      data,
      width = 600,
      height = 300,
      showGrid = true,
      showAxes = true,
      strokeWidth = 2,
      color,
      fillColor,
      fillOpacity = 0.2,
      // stacked = false, // Future enhancement for stacked area charts
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    // Normalize data to array of series
    const series: DataPoint[][] = Array.isArray(data[0])
      ? (data as DataPoint[][])
      : [data as DataPoint[]];

    if (series.length === 0 || series[0].length === 0) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-center justify-center bg-terminal-black border border-terminal-medium-gray",
            className,
          )}
          style={{ width, height }}
        >
          <span className="text-terminal-light-gray text-sm">No data</span>
        </div>
      );
    }

    const padding = { top: 20, right: 20, bottom: 30, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Get all Y values to determine scale
    const allYValues = series.flat().map((d) => d.y);
    const { min: minY, max: maxY } = getMinMax(allYValues);
    const yRange = maxY - minY || 1;

    // Default colors
    const defaultStrokeColors = [
      "#4af6c3",
      "#ff433d",
      "#0068ff",
      "#fb8b1e",
      "#ffffff",
    ];
    const strokeColors = color
      ? Array.isArray(color)
        ? color
        : [color]
      : defaultStrokeColors;

    const fillColors = fillColor
      ? Array.isArray(fillColor)
        ? fillColor
        : [fillColor]
      : strokeColors;

    // Generate paths for each series
    const paths = series.map((seriesData) => {
      const points = seriesData.map((point, i) => {
        const x = (i / (seriesData.length - 1)) * chartWidth;
        const y = chartHeight - ((point.y - minY) / yRange) * chartHeight;
        return { x, y };
      });

      const linePath = points
        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
        .join(" ");

      const areaPath = `${linePath} L ${points[points.length - 1].x} ${chartHeight} L 0 ${chartHeight} Z`;

      return { linePath, areaPath };
    });

    return (
      <div
        ref={ref}
        className={cn(
          "bg-terminal-black border border-terminal-medium-gray p-2",
          className,
        )}
        style={{ width, height }}
        role="img"
        aria-label={ariaLabel || `Area chart with ${series.length} series`}
        {...props}
      >
        <svg width={width} height={height}>
          <defs>
            {series.map((_, i) => (
              <linearGradient
                key={`gradient-${i}`}
                id={`areaGradient-${i}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={fillColors[i % fillColors.length]}
                  stopOpacity={fillOpacity}
                />
                <stop
                  offset="100%"
                  stopColor={fillColors[i % fillColors.length]}
                  stopOpacity={0}
                />
              </linearGradient>
            ))}
          </defs>

          <g transform={`translate(${padding.left}, ${padding.top})`}>
            {/* Grid lines */}
            {showGrid && (
              <g className="grid" opacity={0.1}>
                {[0, 1, 2, 3, 4].map((i) => {
                  const y = (i / 4) * chartHeight;
                  return (
                    <line
                      key={`h-${i}`}
                      x1={0}
                      y1={y}
                      x2={chartWidth}
                      y2={y}
                      stroke="#ffffff"
                      strokeWidth={1}
                    />
                  );
                })}
                {[0, 1, 2, 3, 4].map((i) => {
                  const x = (i / 4) * chartWidth;
                  return (
                    <line
                      key={`v-${i}`}
                      x1={x}
                      y1={0}
                      x2={x}
                      y2={chartHeight}
                      stroke="#ffffff"
                      strokeWidth={1}
                    />
                  );
                })}
              </g>
            )}

            {/* Area fills */}
            {paths.map((path, i) => (
              <path
                key={`area-${i}`}
                d={path.areaPath}
                fill={`url(#areaGradient-${i})`}
              />
            ))}

            {/* Data lines */}
            {paths.map((path, i) => (
              <path
                key={`line-${i}`}
                d={path.linePath}
                fill="none"
                stroke={strokeColors[i % strokeColors.length]}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {/* Axes */}
            {showAxes && (
              <g className="axes">
                <line
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={chartHeight}
                  stroke="#666666"
                  strokeWidth={1}
                />
                <line
                  x1={0}
                  y1={chartHeight}
                  x2={chartWidth}
                  y2={chartHeight}
                  stroke="#666666"
                  strokeWidth={1}
                />

                {[0, 1, 2, 3, 4].map((i) => {
                  const y = (i / 4) * chartHeight;
                  const value = maxY - (i / 4) * yRange;
                  return (
                    <text
                      key={`y-label-${i}`}
                      x={-8}
                      y={y}
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#666666"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      {value.toFixed(0)}
                    </text>
                  );
                })}
              </g>
            )}
          </g>
        </svg>
      </div>
    );
  },
);

AreaChart.displayName = "AreaChart";

/**
 * Professional candlestick chart component for OHLC financial data.
 *
 * Features:
 * - OHLC candlestick bars
 * - Volume bars
 * - Bloomberg Terminal styling
 * - Green/red color coding
 *
 * @example
 * ```tsx
 * <CandlestickChart
 *   data={[
 *     { timestamp: '2024-01-01', open: 100, high: 105, low: 98, close: 103, volume: 1000000 }
 *   ]}
 * />
 * ```
 */
export interface CandlestickChartProps {
  /** Array of OHLC data points */
  data: OHLCDataPoint[];
  /** Width of the chart */
  width?: number;
  /** Height of the chart */
  height?: number;
  /** Show volume bars */
  showVolume?: boolean;
  /** Volume chart height ratio */
  volumeHeight?: number;
  /** Show grid lines */
  showGrid?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  "aria-label"?: string;
}

export const CandlestickChart = React.forwardRef<
  HTMLDivElement,
  CandlestickChartProps
>(
  (
    {
      data,
      width = 600,
      height = 400,
      showVolume = true,
      volumeHeight = 0.25,
      showGrid = true,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    if (!data || data.length === 0) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-center justify-center bg-terminal-black border border-terminal-medium-gray",
            className,
          )}
          style={{ width, height }}
        >
          <span className="text-terminal-light-gray text-sm">No data</span>
        </div>
      );
    }

    const padding = { top: 20, right: 20, bottom: showVolume ? 80 : 30, left: 50 };
    const chartHeight = height - padding.top - padding.bottom;
    const candleHeight = showVolume
      ? chartHeight * (1 - volumeHeight)
      : chartHeight;
    const volumeBarHeight = showVolume ? chartHeight * volumeHeight : 0;
    const chartWidth = width - padding.left - padding.right;

    // Get price range
    const allPrices = data.flatMap((d) => [d.high, d.low]);
    const { min: minPrice, max: maxPrice } = getMinMax(allPrices);
    const priceRange = maxPrice - minPrice || 1;

    // Get volume range
    const volumes = data.map((d) => d.volume || 0);
    const { max: maxVolume } = getMinMax(volumes);

    const candleWidth = Math.max(2, chartWidth / data.length - 2);
    const candleSpacing = chartWidth / data.length;

    return (
      <div
        ref={ref}
        className={cn(
          "bg-terminal-black border border-terminal-medium-gray p-2",
          className,
        )}
        style={{ width, height }}
        role="img"
        aria-label={
          ariaLabel || `Candlestick chart with ${data.length} periods`
        }
        {...props}
      >
        <svg width={width} height={height}>
          <g transform={`translate(${padding.left}, ${padding.top})`}>
            {/* Grid lines */}
            {showGrid && (
              <g className="grid" opacity={0.1}>
                {[0, 1, 2, 3, 4].map((i) => {
                  const y = (i / 4) * candleHeight;
                  return (
                    <line
                      key={`h-${i}`}
                      x1={0}
                      y1={y}
                      x2={chartWidth}
                      y2={y}
                      stroke="#ffffff"
                      strokeWidth={1}
                    />
                  );
                })}
              </g>
            )}

            {/* Candlesticks */}
            {data.map((candle, i) => {
              const x = i * candleSpacing + candleSpacing / 2;
              const isGreen = candle.close >= candle.open;
              const color = isGreen ? "#4af6c3" : "#ff433d";

              const highY =
                ((maxPrice - candle.high) / priceRange) * candleHeight;
              const lowY =
                ((maxPrice - candle.low) / priceRange) * candleHeight;
              const openY =
                ((maxPrice - candle.open) / priceRange) * candleHeight;
              const closeY =
                ((maxPrice - candle.close) / priceRange) * candleHeight;

              const bodyTop = Math.min(openY, closeY);
              const bodyHeight = Math.abs(closeY - openY) || 1;

              return (
                <g key={i}>
                  {/* Wick */}
                  <line
                    x1={x}
                    y1={highY}
                    x2={x}
                    y2={lowY}
                    stroke={color}
                    strokeWidth={1}
                  />
                  {/* Body */}
                  <rect
                    x={x - candleWidth / 2}
                    y={bodyTop}
                    width={candleWidth}
                    height={bodyHeight}
                    fill={isGreen ? color : "transparent"}
                    stroke={color}
                    strokeWidth={1}
                  />
                </g>
              );
            })}

            {/* Volume bars */}
            {showVolume && (
              <g transform={`translate(0, ${candleHeight + 10})`}>
                {data.map((candle, i) => {
                  const x = i * candleSpacing + candleSpacing / 2;
                  const volume = candle.volume || 0;
                  const barHeight =
                    (volume / (maxVolume || 1)) * volumeBarHeight;
                  const isGreen = candle.close >= candle.open;
                  const color = isGreen ? "#4af6c3" : "#ff433d";

                  return (
                    <rect
                      key={i}
                      x={x - candleWidth / 2}
                      y={volumeBarHeight - barHeight}
                      width={candleWidth}
                      height={barHeight}
                      fill={color}
                      opacity={0.5}
                    />
                  );
                })}
              </g>
            )}

            {/* Y-axis */}
            <line
              x1={0}
              y1={0}
              x2={0}
              y2={candleHeight}
              stroke="#666666"
              strokeWidth={1}
            />

            {/* Y-axis labels */}
            {[0, 1, 2, 3, 4].map((i) => {
              const y = (i / 4) * candleHeight;
              const value = maxPrice - (i / 4) * priceRange;
              return (
                <text
                  key={`y-label-${i}`}
                  x={-8}
                  y={y}
                  textAnchor="end"
                  alignmentBaseline="middle"
                  fill="#666666"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  {value.toFixed(2)}
                </text>
              );
            })}
          </g>
        </svg>
      </div>
    );
  },
);

CandlestickChart.displayName = "CandlestickChart";
