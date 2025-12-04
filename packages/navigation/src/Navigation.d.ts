import React from "react";
/**
 * Bloomberg Terminal-inspired Sidebar Navigation Component
 *
 * Professional sidebar navigation optimized for financial trading applications with:
 * - 256px fixed width for consistent layout
 * - High contrast design for terminal environments
 * - Active state with 4px blue accent border
 * - Smooth transitions (100ms ease-in/out)
 * - Full keyboard navigation support
 * - Screen reader accessible (ARIA labels)
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <NavigationGroup label="Main">
 *     <NavigationItem icon="home" active>Dashboard</NavigationItem>
 *     <NavigationItem icon="chart">Markets</NavigationItem>
 *   </NavigationGroup>
 *   <NavigationGroup label="Tools">
 *     <NavigationItem icon="settings">Settings</NavigationItem>
 *   </NavigationGroup>
 * </Sidebar>
 * ```
 */
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    /** Navigation items and groups */
    children: React.ReactNode;
    /** Width of the sidebar (default: 256px) */
    width?: number | string;
    /** Additional CSS classes */
    className?: string;
}
export declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
export interface NavigationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Navigation item content */
    children: React.ReactNode;
    /** Icon component or icon name */
    icon?: React.ReactNode;
    /** Whether this item is currently active */
    active?: boolean;
    /** Optional badge content */
    badge?: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Href for link behavior (renders as link if provided) */
    href?: string;
}
export declare const NavigationItem: React.ForwardRefExoticComponent<NavigationItemProps & React.RefAttributes<HTMLButtonElement>>;
export interface NavigationGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Navigation items within this group */
    children: React.ReactNode;
    /** Optional group label */
    label?: string;
    /** Whether the group is collapsible */
    collapsible?: boolean;
    /** Initial collapsed state (only for collapsible groups) */
    defaultCollapsed?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const NavigationGroup: React.ForwardRefExoticComponent<NavigationGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function Tabs({ children, ...props }: TabsProps): JSX.Element;
export declare namespace Tabs {
    var displayName: string;
}
/**
 * Bloomberg Terminal-inspired Breadcrumb Navigation Component
 *
 * Professional breadcrumb navigation optimized for financial trading applications with:
 * - High contrast design for terminal environments
 * - Clickable links styled in terminal blue (#0068ff)
 * - Current page (last item) in white, non-clickable
 * - Chevron separators (>) between items
 * - Smooth transitions (100ms ease-in)
 * - Screen reader accessible (ARIA labels)
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbSeparator />
 *   <BreadcrumbItem href="/portfolio">Portfolio</BreadcrumbItem>
 *   <BreadcrumbSeparator />
 *   <BreadcrumbItem>AAPL</BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    /** Breadcrumb items and separators */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export interface BreadcrumbItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Item content */
    children: React.ReactNode;
    /** Optional href for navigation (if omitted, renders as current page) */
    href?: string;
    /** Whether this is the current page */
    current?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const BreadcrumbItem: React.ForwardRefExoticComponent<BreadcrumbItemProps & React.RefAttributes<HTMLAnchorElement>>;
export interface BreadcrumbSeparatorProps extends React.HTMLAttributes<HTMLLIElement> {
    /** Custom separator character (default: ">") */
    separator?: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
export declare const BreadcrumbSeparator: React.ForwardRefExoticComponent<BreadcrumbSeparatorProps & React.RefAttributes<HTMLLIElement>>;
//# sourceMappingURL=Navigation.d.ts.map