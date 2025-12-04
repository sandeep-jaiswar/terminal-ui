import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cn } from "@sandeep-jaiswar/utils";
export const Card = React.forwardRef(({ children, variant = "default", padding = "md", className, ...props }, ref) => {
    const baseStyles = cn(
    // Base styles
    "rounded-md overflow-hidden", "transition-all duration-150 ease-in-out");
    const variantStyles = {
        default: cn("bg-terminal-dark-gray", "border border-terminal-medium-gray"),
        elevated: cn("bg-terminal-dark-gray", "border border-terminal-medium-gray", "shadow-terminal-card"),
        outlined: cn("bg-transparent", "border border-terminal-medium-gray", "hover:border-terminal-light-gray"),
        interactive: cn("bg-terminal-dark-gray", "border border-terminal-medium-gray", "cursor-pointer", "hover:border-terminal-light-gray hover:shadow-terminal-card", "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black", "active:scale-[0.99]"),
    };
    const paddingStyles = {
        none: "",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
    };
    return (_jsx("div", { ref: ref, className: cn(baseStyles, variantStyles[variant], paddingStyles[padding], className), ...props, children: children }));
});
Card.displayName = "Card";
export const CardHeader = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex items-start justify-between gap-4", "mb-4", className), ...props, children: children }));
});
CardHeader.displayName = "CardHeader";
export const CardContent = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("text-terminal-white", className), ...props, children: children }));
});
CardContent.displayName = "CardContent";
export const CardFooter = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex items-center gap-3", "mt-4", className), ...props, children: children }));
});
CardFooter.displayName = "CardFooter";
