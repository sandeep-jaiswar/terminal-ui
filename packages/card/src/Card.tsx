import React from "react";
import { cn } from "@sandeep-jaiswar/utils";

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

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { children, variant = "default", padding = "md", className, ...props },
    ref,
  ) => {
    const baseStyles = cn(
      // Base styles
      "rounded-md overflow-hidden",
      "transition-all duration-150 ease-in-out",
    );

    const variantStyles = {
      default: cn(
        "bg-terminal-dark-gray",
        "border border-terminal-medium-gray",
      ),
      elevated: cn(
        "bg-terminal-dark-gray",
        "border border-terminal-medium-gray",
        "shadow-terminal-card",
      ),
      outlined: cn(
        "bg-transparent",
        "border border-terminal-medium-gray",
        "hover:border-terminal-light-gray",
      ),
      interactive: cn(
        "bg-terminal-dark-gray",
        "border border-terminal-medium-gray",
        "cursor-pointer",
        "hover:border-terminal-light-gray hover:shadow-terminal-card",
        "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black",
        "active:scale-[0.99]",
      ),
    };

    const paddingStyles = {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          paddingStyles[padding],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

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

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start justify-between gap-4",
          "mb-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardHeader.displayName = "CardHeader";

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

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-terminal-white", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardContent.displayName = "CardContent";

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

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-3", "mt-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardFooter.displayName = "CardFooter";
