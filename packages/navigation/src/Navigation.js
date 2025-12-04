import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "@sandeep-jaiswar/utils";
export const Sidebar = React.forwardRef(({ children, width = "256px", className, ...props }, ref) => {
    return (_jsx("aside", { ref: ref, className: cn("flex flex-col", "bg-terminal-black border-r border-terminal-medium-gray", "h-screen overflow-y-auto overflow-x-hidden", className), style: { width }, "aria-label": "Main navigation", ...props, children: children }));
});
Sidebar.displayName = "Sidebar";
export const NavigationItem = React.forwardRef(({ children, icon, active = false, badge, className, href, ...props }, ref) => {
    const baseStyles = cn(
    // Base layout - 48px height, 12px vertical padding, 16px horizontal
    "flex items-center gap-3 w-full h-12 px-4 py-3", 
    // Typography - 14px monospace
    "font-terminal-mono text-sm", 
    // Colors and states
    "text-terminal-white bg-transparent", "transition-all duration-100 ease-in-out", 
    // Border and focus
    "border-l-4 border-transparent", "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset", 
    // Hover state
    "hover:bg-terminal-dark-gray hover:text-terminal-white", 
    // Active state - blue border and background
    active && [
        "border-l-primary-500 bg-primary-500/10",
        "text-terminal-white",
    ], 
    // Disabled state
    "disabled:opacity-50 disabled:cursor-not-allowed", className);
    const content = (_jsxs(_Fragment, { children: [icon && (_jsx("span", { className: "flex-shrink-0 w-5 h-5", "aria-hidden": "true", children: icon })), _jsx("span", { className: "flex-1 text-left truncate", children: children }), badge && (_jsx("span", { className: "flex-shrink-0 text-xs px-2 py-0.5 rounded bg-terminal-medium-gray text-terminal-white", children: badge }))] }));
    if (href) {
        return (_jsx("a", { href: href, className: baseStyles, "aria-current": active ? "page" : undefined, role: "button", tabIndex: 0, children: content }));
    }
    return (_jsx("button", { ref: ref, type: "button", className: baseStyles, "aria-current": active ? "page" : undefined, ...props, children: content }));
});
NavigationItem.displayName = "NavigationItem";
export const NavigationGroup = React.forwardRef(({ children, label, collapsible = false, defaultCollapsed = false, className, ...props }, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
    const toggleCollapsed = () => {
        if (collapsible) {
            setIsCollapsed(!isCollapsed);
        }
    };
    return (_jsxs("div", { ref: ref, className: cn("flex flex-col", className), role: "group", "aria-label": label, ...props, children: [label && (_jsxs("div", { className: cn("flex items-center justify-between px-4 py-2", "text-xs font-terminal-sans uppercase tracking-wider", "text-terminal-light-gray", collapsible &&
                    "cursor-pointer hover:text-terminal-white transition-colors"), onClick: toggleCollapsed, onKeyDown: (e) => {
                    if (collapsible && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        toggleCollapsed();
                    }
                }, role: collapsible ? "button" : undefined, tabIndex: collapsible ? 0 : undefined, "aria-expanded": collapsible ? !isCollapsed : undefined, children: [_jsx("span", { children: label }), collapsible && (_jsx("svg", { className: cn("w-4 h-4 transition-transform duration-200", isCollapsed ? "rotate-0" : "rotate-90"), fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }))] })), !isCollapsed && (_jsx("nav", { className: "flex flex-col gap-1", role: "navigation", children: children })), _jsx("div", { className: "h-2", "aria-hidden": "true" })] }));
});
NavigationGroup.displayName = "NavigationGroup";
export function Tabs({ children, ...props }) {
    return (_jsx("div", { role: "tablist", ...props, children: children }));
}
Tabs.displayName = "Tabs";
export const Breadcrumb = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("nav", { ref: ref, "aria-label": "breadcrumb", className: cn("flex items-center", "pt-10 pb-3.5", // 40px top, 14px bottom
        className), ...props, children: _jsx("ol", { className: "flex items-center gap-2", children: children }) }));
});
Breadcrumb.displayName = "Breadcrumb";
export const BreadcrumbItem = React.forwardRef(({ children, href, current = false, className, ...props }, ref) => {
    const isCurrentPage = current || !href;
    const baseStyles = cn("font-terminal-mono text-sm", // 12px font size
    "px-2", // 8px horizontal padding
    "transition-colors duration-100 ease-in-out", "focus:outline-none focus:ring-2 focus:ring-primary-500", isCurrentPage
        ? "text-terminal-white cursor-default" // Current page styling
        : [
            "text-primary-500", // Terminal blue
            "hover:text-primary-400", // Lighter blue on hover
            "cursor-pointer",
            "underline-offset-4",
        ], className);
    if (isCurrentPage) {
        return (_jsx("li", { children: _jsx("span", { className: baseStyles, "aria-current": "page", ...props, children: children }) }));
    }
    return (_jsx("li", { children: _jsx("a", { ref: ref, href: href, className: baseStyles, ...props, children: children }) }));
});
BreadcrumbItem.displayName = "BreadcrumbItem";
export const BreadcrumbSeparator = React.forwardRef(({ separator = ">", className, ...props }, ref) => {
    return (_jsx("li", { ref: ref, role: "presentation", "aria-hidden": "true", className: cn("flex items-center", "text-terminal-light-gray", // #666666 for separator
        "font-terminal-mono text-sm", "select-none", className), ...props, children: separator }));
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
