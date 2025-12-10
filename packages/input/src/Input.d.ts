import React from "react";
/**
 * Professional input component for financial trading applications.
 *
 * Features Bloomberg Terminal-inspired styling with:
 * - High contrast colors optimized for terminal environments
 * - Validation states (error, success)
 * - Support for labels, helper text, and error messages
 * - Icon support (left and right addons)
 * - WCAG 2.1 AA compliant accessibility
 *
 * @example
 * ```tsx
 * <Input
 *   label="Stock Symbol"
 *   placeholder="Enter symbol"
 *   helperText="Enter a valid ticker symbol"
 * />
 *
 * <Input
 *   label="Price"
 *   state="error"
 *   error="Invalid price"
 * />
 * ```
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    /** Label text displayed above the input */
    label?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Error message displayed when state is "error" */
    error?: string;
    /** Visual state of the input */
    state?: "default" | "error" | "success";
    /** Size of the input */
    size?: "sm" | "md" | "lg";
    /** Content to display on the left side of the input */
    leftAddon?: React.ReactNode;
    /** Content to display on the right side of the input */
    rightAddon?: React.ReactNode;
    /** Additional CSS classes for the wrapper */
    wrapperClassName?: string;
    /** Additional CSS classes for the input */
    className?: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
/**
 * Number input component with currency prefix ($) for financial applications.
 *
 * @example
 * ```tsx
 * <NumberInput
 *   label="Price"
 *   placeholder="0.00"
 *   defaultValue={150.25}
 * />
 * ```
 */
export interface NumberInputProps extends Omit<InputProps, "type" | "leftAddon"> {
    /** Currency symbol to display (default: $) */
    currencySymbol?: string;
}
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
/**
 * Search input component with magnifying glass icon.
 *
 * @example
 * ```tsx
 * <SearchInput
 *   placeholder="Search..."
 *   onChange={handleSearch}
 * />
 * ```
 */
export interface SearchInputProps extends Omit<InputProps, "type" | "leftAddon"> {
    /** Whether to show the search icon on the left */
    showIcon?: boolean;
}
export declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
/**
 * Textarea component for multiline text input.
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Notes"
 *   placeholder="Enter trading notes..."
 *   rows={4}
 * />
 * ```
 */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
    /** Label text displayed above the textarea */
    label?: string;
    /** Helper text displayed below the textarea */
    helperText?: string;
    /** Error message displayed when state is "error" */
    error?: string;
    /** Visual state of the textarea */
    state?: "default" | "error" | "success";
    /** Size of the textarea */
    size?: "sm" | "md" | "lg";
    /** Additional CSS classes for the wrapper */
    wrapperClassName?: string;
    /** Additional CSS classes for the textarea */
    className?: string;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=Input.d.ts.map