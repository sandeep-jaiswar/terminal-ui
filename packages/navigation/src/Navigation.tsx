import React from "react";
import { cn } from "@sandeep-jaiswar/utils";

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

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ children, width = "256px", className, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex flex-col",
          "bg-terminal-black border-r border-terminal-medium-gray",
          "h-screen overflow-y-auto overflow-x-hidden",
          className,
        )}
        style={{ width }}
        aria-label="Main navigation"
        {...props}
      >
        {children}
      </aside>
    );
  },
);

Sidebar.displayName = "Sidebar";

export interface NavigationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

export const NavigationItem = React.forwardRef<
  HTMLButtonElement,
  NavigationItemProps
>(
  (
    { children, icon, active = false, badge, className, href, ...props },
    ref,
  ) => {
    const baseStyles = cn(
      // Base layout - 48px height, 12px vertical padding, 16px horizontal
      "flex items-center gap-3 w-full h-12 px-4 py-3",
      // Typography - 14px monospace
      "font-terminal-mono text-sm",
      // Colors and states
      "text-terminal-white bg-transparent",
      "transition-all duration-100 ease-in-out",
      // Border and focus
      "border-l-4 border-transparent",
      "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset",
      // Hover state
      "hover:bg-terminal-dark-gray hover:text-terminal-white",
      // Active state - blue border and background
      active && [
        "border-l-primary-500 bg-primary-500/10",
        "text-terminal-white",
      ],
      // Disabled state
      "disabled:opacity-50 disabled:cursor-not-allowed",
      className,
    );

    const content = (
      <>
        {icon && (
          <span className="flex-shrink-0 w-5 h-5" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="flex-1 text-left truncate">{children}</span>
        {badge && (
          <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded bg-terminal-medium-gray text-terminal-white">
            {badge}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          className={baseStyles}
          aria-current={active ? "page" : undefined}
          role="button"
          tabIndex={0}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        className={baseStyles}
        aria-current={active ? "page" : undefined}
        {...props}
      >
        {content}
      </button>
    );
  },
);

NavigationItem.displayName = "NavigationItem";

export interface NavigationGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
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

export const NavigationGroup = React.forwardRef<
  HTMLDivElement,
  NavigationGroupProps
>(
  (
    {
      children,
      label,
      collapsible = false,
      defaultCollapsed = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

    const toggleCollapsed = () => {
      if (collapsible) {
        setIsCollapsed(!isCollapsed);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col", className)}
        role="group"
        aria-label={label}
        {...props}
      >
        {label && (
          <div
            className={cn(
              "flex items-center justify-between px-4 py-2",
              "text-xs font-terminal-sans uppercase tracking-wider",
              "text-terminal-light-gray",
              collapsible &&
                "cursor-pointer hover:text-terminal-white transition-colors",
            )}
            onClick={toggleCollapsed}
            onKeyDown={(e) => {
              if (collapsible && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                toggleCollapsed();
              }
            }}
            role={collapsible ? "button" : undefined}
            tabIndex={collapsible ? 0 : undefined}
            aria-expanded={collapsible ? !isCollapsed : undefined}
          >
            <span>{label}</span>
            {collapsible && (
              <svg
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isCollapsed ? "rotate-0" : "rotate-90",
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        )}
        {!isCollapsed && (
          <nav className="flex flex-col gap-1" role="navigation">
            {children}
          </nav>
        )}
        {/* 8px gap after group */}
        <div className="h-2" aria-hidden="true" />
      </div>
    );
  },
);

NavigationGroup.displayName = "NavigationGroup";

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Tabs({ children, ...props }: TabsProps): JSX.Element {
  return (
    <div role="tablist" {...props}>
      {children}
    </div>
  );
}

Tabs.displayName = "Tabs";

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

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn(
          "flex items-center",
          "pt-10 pb-3.5", // 40px top, 14px bottom
          className,
        )}
        {...props}
      >
        <ol className="flex items-center gap-2">
          {children}
        </ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = "Breadcrumb";

export interface BreadcrumbItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Item content */
  children: React.ReactNode;
  /** Optional href for navigation (if omitted, renders as current page) */
  href?: string;
  /** Whether this is the current page */
  current?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const BreadcrumbItem = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbItemProps
>(({ children, href, current = false, className, ...props }, ref) => {
  const isCurrentPage = current || !href;

  const baseStyles = cn(
    "font-terminal-mono text-sm", // 12px font size
    "px-2", // 8px horizontal padding
    "transition-colors duration-100 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-primary-500",
    isCurrentPage
      ? "text-terminal-white cursor-default" // Current page styling
      : [
          "text-primary-500", // Terminal blue
          "hover:text-primary-400", // Lighter blue on hover
          "cursor-pointer",
          "underline-offset-4",
        ],
    className,
  );

  if (isCurrentPage) {
    return (
      <li>
        <span
          className={baseStyles}
          aria-current="page"
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {children}
        </span>
      </li>
    );
  }

  return (
    <li>
      <a ref={ref} href={href} className={baseStyles} {...props}>
        {children}
      </a>
    </li>
  );
});

BreadcrumbItem.displayName = "BreadcrumbItem";

export interface BreadcrumbSeparatorProps
  extends React.HTMLAttributes<HTMLLIElement> {
  /** Custom separator character (default: ">") */
  separator?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  BreadcrumbSeparatorProps
>(({ separator = ">", className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex items-center",
        "text-terminal-light-gray", // #666666 for separator
        "font-terminal-mono text-sm",
        "select-none",
        className,
      )}
      {...props}
    >
      {separator}
    </li>
  );
});

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
