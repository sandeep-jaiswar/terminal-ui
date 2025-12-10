import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "@sandeep-jaiswar/utils";
export const Button = React.forwardRef(({ children, variant = "primary", size = "md", loading = false, disabled = false, className, type = "button", ...props }, ref) => {
    const baseStyles = cn(
    // Base styles
    "inline-flex items-center justify-center font-medium", "transition-all duration-150 ease-in-out", "border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black", "disabled:opacity-50 disabled:cursor-not-allowed", "select-none");
    const variantStyles = {
        primary: cn("bg-primary-500 text-white border-primary-500", "hover:bg-primary-600 hover:border-primary-600", "focus:ring-primary-500", "active:bg-primary-700"),
        secondary: cn("bg-terminal-dark-gray text-white border-terminal-medium-gray", "hover:bg-terminal-medium-gray hover:border-terminal-light-gray", "focus:ring-terminal-light-gray", "active:bg-terminal-light-gray active:text-terminal-black"),
        success: cn("bg-success-500 text-terminal-black border-success-500", "hover:bg-success-400 hover:border-success-400", "focus:ring-success-500", "active:bg-success-600"),
        danger: cn("bg-danger-300 text-white border-danger-300", "hover:bg-danger-400 hover:border-danger-400", "focus:ring-danger-300", "active:bg-danger-500"),
        warning: cn("bg-warning-500 text-terminal-black border-warning-500", "hover:bg-warning-400 hover:border-warning-400", "focus:ring-warning-500", "active:bg-warning-600"),
        ghost: cn("bg-transparent text-terminal-white border-terminal-medium-gray", "hover:bg-terminal-dark-gray hover:border-terminal-light-gray", "focus:ring-terminal-light-gray", "active:bg-terminal-medium-gray"),
    };
    const sizeStyles = {
        sm: "text-xs px-3 py-1.5 rounded",
        md: "text-sm px-4 py-2 rounded",
        lg: "text-base px-6 py-3 rounded-md",
    };
    return (_jsxs("button", { ref: ref, type: type, disabled: disabled || loading, className: cn(baseStyles, variantStyles[variant], sizeStyles[size], loading && "cursor-wait", className), "aria-busy": loading, ...props, children: [loading && (_jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })), children] }));
});
Button.displayName = "Button";
