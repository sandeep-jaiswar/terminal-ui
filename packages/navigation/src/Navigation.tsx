import React from 'react';

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Sidebar({ children, ...props }: SidebarProps): JSX.Element {
  return <aside {...props}>{children}</aside>;
}

Sidebar.displayName = 'Sidebar';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Tabs({ children, ...props }: TabsProps): JSX.Element {
  return <div role="tablist" {...props}>{children}</div>;
}

Tabs.displayName = 'Tabs';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Breadcrumb({ children, ...props }: BreadcrumbProps): JSX.Element {
  return <nav aria-label="breadcrumb" {...props}>{children}</nav>;
}

Breadcrumb.displayName = 'Breadcrumb';
