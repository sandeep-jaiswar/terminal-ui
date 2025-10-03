import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, ...props }: CardProps): JSX.Element {
  return <div {...props}>{children}</div>;
}

Card.displayName = 'Card';
