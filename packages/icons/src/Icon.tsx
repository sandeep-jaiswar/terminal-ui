import React from "react";
import { iconPaths } from "./iconPaths";
import type { IconProps } from "./types";

/**
 * Icon component for Bloomberg Terminal-inspired UI
 *
 * Renders SVG icons optimized for financial trading applications with:
 * - High contrast stroke-based design for terminal environments
 * - Consistent 24x24 viewBox for scalability
 * - Semantic naming for financial operations
 * - Accessible with proper ARIA labels
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="trending-up" />
 *
 * // With custom size and color
 * <Icon name="buy" size={32} className="text-success-500" />
 *
 * // With accessibility label
 * <Icon name="alert-triangle" aria-label="Warning" />
 * ```
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, className = "", ...props }, ref) => {
    const iconPath = iconPaths[name];

    if (!iconPath) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={props["aria-label"] ? undefined : "true"}
        {...props}
      >
        {iconPath}
      </svg>
    );
  }
);

Icon.displayName = "Icon";
