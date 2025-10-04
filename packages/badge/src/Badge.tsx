import React from 'react';
import { cn } from '@sandeep-jaiswar/utils';

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
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dot';
  /** Size of the badge */
  size?: 'sm' | 'md' | 'lg';
  /** Optional count for number formatting */
  count?: number;
  /** Max count before showing + (default: 99) */
  maxCount?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Format count with max threshold
 * @param count The count to format
 * @param max Maximum value before showing +
 */
function formatCount(count: number, max: number = 99): string {
  if (count > max) {
    return `${max}+`;
  }
  return count.toString();
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      count,
      maxCount = 99,
      className,
      ...props
    },
    ref
  ) => {
    // Determine if this is a dot variant
    const isDot = variant === 'dot';
    
    // Format count if provided
    const displayContent = count !== undefined ? formatCount(count, maxCount) : children;

    // Base styles
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      'font-terminal-mono font-medium',
      'transition-all duration-150 ease-in-out',
      'select-none',
      !isDot && 'rounded-full'
    );

    // Variant styles
    const variantStyles = {
      primary: cn(
        'bg-primary-500 text-white',
        'border border-primary-600'
      ),
      secondary: cn(
        'bg-terminal-medium-gray text-white',
        'border border-terminal-light-gray'
      ),
      success: cn(
        'bg-success-500 text-terminal-black',
        'border border-success-600'
      ),
      danger: cn(
        'bg-danger-300 text-white',
        'border border-danger-400'
      ),
      warning: cn(
        'bg-warning-500 text-terminal-black',
        'border border-warning-600'
      ),
      info: cn(
        'bg-primary-500 text-white',
        'border border-primary-600'
      ),
      dot: cn(
        'rounded-full',
        'w-2 h-2',
        'bg-danger-300',
        'border border-danger-400'
      ),
    };

    // Size styles (not applicable for dot variant)
    const sizeStyles = {
      sm: cn(
        'text-[10px] leading-[14px]',
        'min-w-[16px] h-[16px]',
        'px-1'
      ),
      md: cn(
        'text-xs leading-4',
        'min-w-[20px] h-[20px]',
        'px-1.5'
      ),
      lg: cn(
        'text-sm leading-5',
        'min-w-[24px] h-[24px]',
        'px-2'
      ),
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          !isDot && sizeStyles[size],
          className
        )}
        role={isDot ? 'status' : 'status'}
        aria-label={isDot ? 'status indicator' : displayContent?.toString()}
        {...props}
      >
        {!isDot && displayContent}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
