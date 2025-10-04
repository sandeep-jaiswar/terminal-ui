import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine class names with Tailwind CSS class merging.
 * Essential for our component library's consistent styling.
 *
 * @example
 * ```ts
 * cn('px-4 py-2', 'bg-blue-500') // 'px-4 py-2 bg-blue-500'
 * cn('px-4', 'px-6') // 'px-6' (Tailwind classes merged)
 * cn('btn', isActive && 'btn-active') // Conditional classes
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Utility for conditional classes based on component variants
 *
 * @example
 * ```ts
 * const variants = {
 *   size: { sm: 'text-sm px-2', md: 'text-base px-4', lg: 'text-lg px-6' },
 *   color: { primary: 'bg-blue-500', danger: 'bg-red-500' }
 * }
 * cnVariants('btn', variants, { size: 'md', color: 'primary' })
 * // Returns: 'btn text-base px-4 bg-blue-500'
 * ```
 */
export function cnVariants<T extends Record<string, Record<string, string>>>(
  base: string,
  variants: T,
  selectedVariants: { [K in keyof T]?: keyof T[K] },
  className?: string,
): string {
  const variantClasses = Object.entries(selectedVariants)
    .map(([key, value]) => {
      if (value && variants[key] && variants[key][value as string]) {
        return variants[key][value as string];
      }
      return "";
    })
    .filter(Boolean);

  return cn(base, ...variantClasses, className);
}

/**
 * Financial-specific class name utility for price and value displays
 *
 * @example
 * ```ts
 * // Positive price change
 * cnFinancial({ positive: true, large: true })
 * // Returns: 'text-success-500 font-bold'
 *
 * // Critical negative change
 * cnFinancial({ negative: true, critical: true })
 * // Returns: 'text-danger-300 animate-pulse'
 * ```
 */
export function cnFinancial({
  base = "",
  positive = false,
  negative = false,
  neutral = false,
  large = false,
  critical = false,
  className = "",
}: {
  base?: string;
  positive?: boolean;
  negative?: boolean;
  neutral?: boolean;
  large?: boolean;
  critical?: boolean;
  className?: string;
}): string {
  return cn(
    base,
    positive && "text-success-500",
    negative && "text-danger-300",
    neutral && "text-terminal-white",
    large && "font-bold",
    critical && "animate-pulse",
    className,
  );
}
