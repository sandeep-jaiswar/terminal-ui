import React from 'react';

export interface SparklineProps {
  data?: number[];
}

export function Sparkline({ data }: SparklineProps): JSX.Element {
  return <div data-component="sparkline">{data?.join(',')}</div>;
}

Sparkline.displayName = 'Sparkline';

export interface LineChartProps {
  data?: unknown[];
}

export function LineChart({ data }: LineChartProps): JSX.Element {
  return <div data-component="linechart">{JSON.stringify(data)}</div>;
}

LineChart.displayName = 'LineChart';

export interface CandlestickChartProps {
  data?: unknown[];
}

export function CandlestickChart({ data }: CandlestickChartProps): JSX.Element {
  return <div data-component="candlestickchart">{JSON.stringify(data)}</div>;
}

CandlestickChart.displayName = 'CandlestickChart';
