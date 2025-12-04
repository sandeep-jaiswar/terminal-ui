import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "@sandeep-jaiswar/utils";
export const Input = React.forwardRef(({ label, helperText, error, state = "default", size = "md", leftAddon, rightAddon, wrapperClassName, className, disabled, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const helperTextId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const actualState = error ? "error" : state;
    const baseStyles = cn(
    // Base styles
    "w-full font-terminal-sans transition-all duration-150", "bg-terminal-dark-gray text-terminal-white", "border-2 rounded", "focus:outline-none focus:ring-0", "placeholder:text-terminal-light-gray", "disabled:opacity-50 disabled:cursor-not-allowed disabled:border-dashed");
    const stateStyles = {
        default: cn("border-primary-500", "focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(0,104,255,0.2)]", "hover:border-primary-400"),
        error: cn("border-danger-300", "focus:border-danger-300 focus:shadow-[0_0_0_3px_rgba(255,67,61,0.2)]", "hover:border-danger-400"),
        success: cn("border-success-500", "focus:border-success-500 focus:shadow-[0_0_0_3px_rgba(74,246,195,0.2)]", "hover:border-success-400"),
    };
    const sizeStyles = {
        sm: "h-8 text-xs px-3",
        md: "h-10 text-sm px-4",
        lg: "h-12 text-base px-5",
    };
    const labelStyles = cn("block text-sm font-medium text-terminal-white mb-2 uppercase tracking-wide");
    const helperTextStyles = cn("mt-2 text-xs", actualState === "error" ? "text-danger-300" : "text-terminal-light-gray");
    const iconStyles = cn("flex items-center justify-center", "text-terminal-light-gray", size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm");
    return (_jsxs("div", { className: wrapperClassName, children: [label && (_jsx("label", { htmlFor: inputId, className: labelStyles, children: label })), _jsxs("div", { className: "relative", children: [leftAddon && (_jsx("div", { className: cn(iconStyles, "absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"), children: leftAddon })), _jsx("input", { ref: ref, id: inputId, disabled: disabled, className: cn(baseStyles, stateStyles[actualState], sizeStyles[size], leftAddon && "pl-10", rightAddon && "pr-10", className), "aria-invalid": actualState === "error", "aria-describedby": error ? errorId : helperText ? helperTextId : undefined, ...props }), rightAddon && (_jsx("div", { className: cn(iconStyles, "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"), children: rightAddon }))] }), (helperText || error) && (_jsx("p", { id: error ? errorId : helperTextId, className: helperTextStyles, role: error ? "alert" : undefined, children: error || helperText }))] }));
});
Input.displayName = "Input";
export const NumberInput = React.forwardRef(({ currencySymbol = "$", ...props }, ref) => {
    return (_jsx(Input, { ref: ref, type: "number", leftAddon: _jsx("span", { className: "font-mono", children: currencySymbol }), ...props }));
});
NumberInput.displayName = "NumberInput";
export const SearchInput = React.forwardRef(({ showIcon = true, ...props }, ref) => {
    return (_jsx(Input, { ref: ref, type: "search", leftAddon: showIcon ? (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [_jsx("path", { d: "M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M10.5 10.5L14 14", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] })) : undefined, ...props }));
});
SearchInput.displayName = "SearchInput";
export const Textarea = React.forwardRef(({ label, helperText, error, state = "default", size = "md", wrapperClassName, className, disabled, id, rows = 3, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const helperTextId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;
    const actualState = error ? "error" : state;
    const baseStyles = cn(
    // Base styles
    "w-full font-terminal-sans transition-all duration-150", "bg-terminal-dark-gray text-terminal-white", "border-2 rounded", "focus:outline-none focus:ring-0", "placeholder:text-terminal-light-gray", "disabled:opacity-50 disabled:cursor-not-allowed disabled:border-dashed", "resize-y");
    const stateStyles = {
        default: cn("border-primary-500", "focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(0,104,255,0.2)]", "hover:border-primary-400"),
        error: cn("border-danger-300", "focus:border-danger-300 focus:shadow-[0_0_0_3px_rgba(255,67,61,0.2)]", "hover:border-danger-400"),
        success: cn("border-success-500", "focus:border-success-500 focus:shadow-[0_0_0_3px_rgba(74,246,195,0.2)]", "hover:border-success-400"),
    };
    const sizeStyles = {
        sm: "min-h-[6rem] text-xs p-3",
        md: "min-h-[8rem] text-sm p-4",
        lg: "min-h-[10rem] text-base p-5",
    };
    const labelStyles = cn("block text-sm font-medium text-terminal-white mb-2 uppercase tracking-wide");
    const helperTextStyles = cn("mt-2 text-xs", actualState === "error" ? "text-danger-300" : "text-terminal-light-gray");
    return (_jsxs("div", { className: wrapperClassName, children: [label && (_jsx("label", { htmlFor: textareaId, className: labelStyles, children: label })), _jsx("textarea", { ref: ref, id: textareaId, disabled: disabled, rows: rows, className: cn(baseStyles, stateStyles[actualState], sizeStyles[size], className), "aria-invalid": actualState === "error", "aria-describedby": error ? errorId : helperText ? helperTextId : undefined, ...props }), (helperText || error) && (_jsx("p", { id: error ? errorId : helperTextId, className: helperTextStyles, role: error ? "alert" : undefined, children: error || helperText }))] }));
});
Textarea.displayName = "Textarea";
