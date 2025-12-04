import React from "react";
/**
 * Professional badge component for financial trading applications.
 *
 * Features Bloomberg Terminal-inspired styling with:
 * - High contrast colors optimized for terminal environments
 * - Financial semantic variants for different notification types
 * - Dot variant for small status indicators
 * - Auto-formatting for large numbers (99+, 9999+)
 * - WCAG 2.1 AA compliant accessibility
 *
 * @example
 * ```tsx
 * <Badge variant="danger" count={5}>5</Badge>
 * <Badge variant="dot" />
 * <Badge variant="success" size="lg">Active</Badge>
 * ```
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Badge content */
    children?: React.ReactNode;
    /** Visual variant of the badge */
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dot";
    /** Size of the badge */
    size?: "sm" | "md" | "lg";
    /** Optional count for number formatting */
    count?: number;
    /** Max count before showing + (default: 99) */
    maxCount?: number;
    /** Additional CSS classes */
    className?: string;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=Badge.d.ts.map