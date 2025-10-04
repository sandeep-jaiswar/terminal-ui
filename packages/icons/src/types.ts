import type React from "react";

/**
 * Available icon names for the Bloomberg Terminal-inspired UI
 */
export type IconName =
  // Navigation
  | "chevron-up"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  // Financial
  | "trending-up"
  | "trending-down"
  | "dollar-sign"
  // Trading
  | "buy"
  | "sell"
  | "alert-triangle"
  | "alert-circle"
  // UI
  | "search"
  | "close"
  | "menu"
  | "settings"
  | "check"
  | "info"
  // Data
  | "chart-line"
  | "chart-bar"
  | "refresh"
  | "filter";

/**
 * Icon component props
 */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  /** Name of the icon to render */
  name: IconName;
  /** Size of the icon in pixels */
  size?: number;
  /** Additional CSS classes */
  className?: string;
}
