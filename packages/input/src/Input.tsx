import React from 'react';
import { cn } from '@sandeep-jaiswar/utils';

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
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message displayed when state is "error" */
  error?: string;
  /** Visual state of the input */
  state?: 'default' | 'error' | 'success';
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Content to display on the left side of the input */
  leftAddon?: React.ReactNode;
  /** Content to display on the right side of the input */
  rightAddon?: React.ReactNode;
  /** Additional CSS classes for the wrapper */
  wrapperClassName?: string;
  /** Additional CSS classes for the input */
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      state = 'default',
      size = 'md',
      leftAddon,
      rightAddon,
      wrapperClassName,
      className,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const helperTextId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const actualState = error ? 'error' : state;

    const baseStyles = cn(
      // Base styles
      'w-full font-terminal-sans transition-all duration-150',
      'bg-terminal-dark-gray text-terminal-white',
      'border-2 rounded',
      'focus:outline-none focus:ring-0',
      'placeholder:text-terminal-light-gray',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:border-dashed'
    );

    const stateStyles = {
      default: cn(
        'border-primary-500',
        'focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(0,104,255,0.2)]',
        'hover:border-primary-400'
      ),
      error: cn(
        'border-danger-300',
        'focus:border-danger-300 focus:shadow-[0_0_0_3px_rgba(255,67,61,0.2)]',
        'hover:border-danger-400'
      ),
      success: cn(
        'border-success-500',
        'focus:border-success-500 focus:shadow-[0_0_0_3px_rgba(74,246,195,0.2)]',
        'hover:border-success-400'
      ),
    };

    const sizeStyles = {
      sm: 'h-8 text-xs px-3',
      md: 'h-10 text-sm px-4',
      lg: 'h-12 text-base px-5',
    };

    const labelStyles = cn(
      'block text-sm font-medium text-terminal-white mb-2 uppercase tracking-wide'
    );

    const helperTextStyles = cn(
      'mt-2 text-xs',
      actualState === 'error' ? 'text-danger-300' : 'text-terminal-light-gray'
    );

    const iconStyles = cn(
      'flex items-center justify-center',
      'text-terminal-light-gray',
      size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'
    );

    return (
      <div className={wrapperClassName}>
        {label && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
          </label>
        )}
        <div className="relative">
          {leftAddon && (
            <div className={cn(iconStyles, 'absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none')}>
              {leftAddon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              baseStyles,
              stateStyles[actualState],
              sizeStyles[size],
              leftAddon && 'pl-10',
              rightAddon && 'pr-10',
              className
            )}
            aria-invalid={actualState === 'error'}
            aria-describedby={
              error ? errorId : helperText ? helperTextId : undefined
            }
            {...props}
          />
          {rightAddon && (
            <div className={cn(iconStyles, 'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none')}>
              {rightAddon}
            </div>
          )}
        </div>
        {(helperText || error) && (
          <p
            id={error ? errorId : helperTextId}
            className={helperTextStyles}
            role={error ? 'alert' : undefined}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

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
export interface NumberInputProps extends Omit<InputProps, 'type' | 'leftAddon'> {
  /** Currency symbol to display (default: $) */
  currencySymbol?: string;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ currencySymbol = '$', ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="number"
        leftAddon={<span className="font-mono">{currencySymbol}</span>}
        {...props}
      />
    );
  }
);

NumberInput.displayName = 'NumberInput';

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
export interface SearchInputProps extends Omit<InputProps, 'type' | 'leftAddon'> {
  /** Whether to show the search icon on the left */
  showIcon?: boolean;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ showIcon = true, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="search"
        leftAddon={
          showIcon ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 10.5L14 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : undefined
        }
        {...props}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';

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
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** Label text displayed above the textarea */
  label?: string;
  /** Helper text displayed below the textarea */
  helperText?: string;
  /** Error message displayed when state is "error" */
  error?: string;
  /** Visual state of the textarea */
  state?: 'default' | 'error' | 'success';
  /** Size of the textarea */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes for the wrapper */
  wrapperClassName?: string;
  /** Additional CSS classes for the textarea */
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      state = 'default',
      size = 'md',
      wrapperClassName,
      className,
      disabled,
      id,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const helperTextId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;
    const actualState = error ? 'error' : state;

    const baseStyles = cn(
      // Base styles
      'w-full font-terminal-sans transition-all duration-150',
      'bg-terminal-dark-gray text-terminal-white',
      'border-2 rounded',
      'focus:outline-none focus:ring-0',
      'placeholder:text-terminal-light-gray',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:border-dashed',
      'resize-y'
    );

    const stateStyles = {
      default: cn(
        'border-primary-500',
        'focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(0,104,255,0.2)]',
        'hover:border-primary-400'
      ),
      error: cn(
        'border-danger-300',
        'focus:border-danger-300 focus:shadow-[0_0_0_3px_rgba(255,67,61,0.2)]',
        'hover:border-danger-400'
      ),
      success: cn(
        'border-success-500',
        'focus:border-success-500 focus:shadow-[0_0_0_3px_rgba(74,246,195,0.2)]',
        'hover:border-success-400'
      ),
    };

    const sizeStyles = {
      sm: 'min-h-[6rem] text-xs p-3',
      md: 'min-h-[8rem] text-sm p-4',
      lg: 'min-h-[10rem] text-base p-5',
    };

    const labelStyles = cn(
      'block text-sm font-medium text-terminal-white mb-2 uppercase tracking-wide'
    );

    const helperTextStyles = cn(
      'mt-2 text-xs',
      actualState === 'error' ? 'text-danger-300' : 'text-terminal-light-gray'
    );

    return (
      <div className={wrapperClassName}>
        {label && (
          <label htmlFor={textareaId} className={labelStyles}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          rows={rows}
          className={cn(
            baseStyles,
            stateStyles[actualState],
            sizeStyles[size],
            className
          )}
          aria-invalid={actualState === 'error'}
          aria-describedby={
            error ? errorId : helperText ? helperTextId : undefined
          }
          {...props}
        />
        {(helperText || error) && (
          <p
            id={error ? errorId : helperTextId}
            className={helperTextStyles}
            role={error ? 'alert' : undefined}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
