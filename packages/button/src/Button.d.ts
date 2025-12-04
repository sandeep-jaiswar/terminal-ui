import React from "react";
/**
 * Professional button component for financial trading applications.
 *
 * Features Bloomberg Terminal-inspired styling with:
 * - High contrast colors optimized for terminal environments
 * - Financial semantic variants (success for buy, danger for sell)
 * - Loading states with terminal-style spinners
 * - WCAG 2.1 AA compliant accessibility
 *
 * @example
 * ```tsx
 * <Button variant="success" onClick={handleBuyOrder}>
 *   Buy 100 AAPL
 * </Button>
 *
 * <Button variant="danger" size="lg" loading={isExecuting}>
 *   Sell Position
 * </Button>
 * ```
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button content */
    children: React.ReactNode;
    /** Visual variant of the button */
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "ghost";
    /** Size of the button */
    size?: "sm" | "md" | "lg";
    /** Whether the button is in a loading state */
    loading?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map