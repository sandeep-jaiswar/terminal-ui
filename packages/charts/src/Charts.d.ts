import React from "react";
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
export type TrendType = "positive" | "negative" | "neutral" | "volatile" | "smooth";
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
export declare const Sparkline: React.ForwardRefExoticComponent<SparklineProps & React.RefAttributes<SVGSVGElement>>;
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
export declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const AreaChart: React.ForwardRefExoticComponent<AreaChartProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const CandlestickChart: React.ForwardRefExoticComponent<CandlestickChartProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Charts.d.ts.map