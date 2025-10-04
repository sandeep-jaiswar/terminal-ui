import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'danger' | 'warning';
}

export function Badge({ children, variant = 'default', ...props }: BadgeProps): JSX.Element {
  return <span data-variant={variant} {...props}>{children}</span>;
}

Badge.displayName = 'Badge';
