import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cn } from "@sandeep-jaiswar/utils";
/**
 * Format count with max threshold
 * @param count The count to format
 * @param max Maximum value before showing +
 */
function formatCount(count, max = 99) {
    if (count > max) {
        return `${max}+`;
    }
    return count.toString();
}
export const Badge = React.forwardRef(({ children, variant = "primary", size = "md", count, maxCount = 99, className, ...props }, ref) => {
    // Determine if this is a dot variant
    const isDot = variant === "dot";
    // Format count if provided
    const displayContent = count !== undefined ? formatCount(count, maxCount) : children;
    // Base styles
    const baseStyles = cn("inline-flex items-center justify-center", "font-terminal-mono font-medium", "transition-all duration-150 ease-in-out", "select-none", !isDot && "rounded-full");
    // Variant styles
    const variantStyles = {
        primary: cn("bg-primary-500 text-white", "border border-primary-600"),
        secondary: cn("bg-terminal-medium-gray text-white", "border border-terminal-light-gray"),
        success: cn("bg-success-500 text-terminal-black", "border border-success-600"),
        danger: cn("bg-danger-300 text-white", "border border-danger-400"),
        warning: cn("bg-warning-500 text-terminal-black", "border border-warning-600"),
        info: cn("bg-primary-500 text-white", "border border-primary-600"),
        dot: cn("rounded-full", "w-2 h-2", "bg-danger-300", "border border-danger-400"),
    };
    // Size styles (not applicable for dot variant)
    const sizeStyles = {
        sm: cn("text-[10px] leading-[14px]", "min-w-[16px] h-[16px]", "px-1"),
        md: cn("text-xs leading-4", "min-w-[20px] h-[20px]", "px-1.5"),
        lg: cn("text-sm leading-5", "min-w-[24px] h-[24px]", "px-2"),
    };
    return (_jsx("span", { ref: ref, className: cn(baseStyles, variantStyles[variant], !isDot && sizeStyles[size], className), role: isDot ? "status" : "status", "aria-label": isDot ? "status indicator" : displayContent?.toString(), ...props, children: !isDot && displayContent }));
});
Badge.displayName = "Badge";
