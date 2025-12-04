import React from "react";
/**
 * Professional card component for financial trading applications.
 *
 * Features Bloomberg Terminal-inspired styling with:
 * - Dark-first design optimized for terminal environments
 * - Multiple variants for different elevation and interaction patterns
 * - Flexible padding options for dense financial data layouts
 * - WCAG 2.1 AA compliant accessibility
 *
 * @example
 * ```tsx
 * <Card variant="elevated" padding="md">
 *   <CardHeader>
 *     <h3>Portfolio Overview</h3>
 *   </CardHeader>
 *   <CardContent>
 *     Portfolio content here
 *   </CardContent>
 * </Card>
 *
 * <Card variant="interactive" onClick={handleClick}>
 *   Click to view details
 * </Card>
 * ```
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Card content */
    children: React.ReactNode;
    /** Visual variant of the card */
    variant?: "default" | "elevated" | "outlined" | "interactive";
    /** Padding size */
    padding?: "none" | "sm" | "md" | "lg";
    /** Additional CSS classes */
    className?: string;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CardHeader - Header section for Card component
 *
 * @example
 * ```tsx
 * <CardHeader>
 *   <h3>Market Summary</h3>
 *   <Button size="sm" variant="ghost">Settings</Button>
 * </CardHeader>
 * ```
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Header content */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
export declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CardContent - Content section for Card component
 *
 * @example
 * ```tsx
 * <CardContent>
 *   <p>S&P 500: -0.45%</p>
 *   <p>NASDAQ: -0.68%</p>
 * </CardContent>
 * ```
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
export declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CardFooter - Footer section for Card component
 *
 * @example
 * ```tsx
 * <CardFooter>
 *   <Button variant="primary">View Chart</Button>
 *   <Button variant="secondary">Trade</Button>
 * </CardFooter>
 * ```
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Footer content */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
export declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map