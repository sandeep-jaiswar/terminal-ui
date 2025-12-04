/**
 * Announces messages to screen readers using ARIA live regions.
 * Essential for financial applications where real-time updates matter.
 *
 * @param message - The message to announce
 * @param priority - 'polite' for non-urgent updates, 'assertive' for important changes
 * @param timeout - How long to keep the message (0 for permanent until next message)
 *
 * @example
 * ```ts
 * announceToScreenReader('Order executed successfully', 'assertive')
 * announceToScreenReader('Price updated', 'polite')
 * ```
 */
export function announceToScreenReader(
  message: string,
  priority: "polite" | "assertive" = "polite",
  timeout: number = 5000
): void {
  let liveRegion = document.getElementById(`live-region-${priority}`);

  if (!liveRegion) {
    liveRegion = document.createElement("div");
    liveRegion.id = `live-region-${priority}`;
    liveRegion.setAttribute("aria-live", priority);
    liveRegion.setAttribute("aria-atomic", "true");
    liveRegion.className = "sr-only";
    liveRegion.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    `;
    document.body.appendChild(liveRegion);
  }

  liveRegion.textContent = "";
  setTimeout(() => {
    if (liveRegion) liveRegion.textContent = message;
  }, 100);

  if (timeout > 0) {
    setTimeout(() => {
      if (liveRegion) liveRegion.textContent = "";
    }, timeout);
  }
}

/**
 * Announces financial data changes with context.
 * Automatically determines priority based on change magnitude.
 *
 * @example
 * ```ts
 * announceFinancialChange('AAPL', 150.25, 148.80, 'price', 'USD')
 * // Announces: "AAPL price changed from $148.80 to $150.25, up $1.45"
 * ```
 */
export function announceFinancialChange(
  symbol: string,
  currentValue: number,
  previousValue: number,
  valueType: "price" | "value" | "volume" | "change" = "price",
  currency: string = "USD"
): void {
  const change = currentValue - previousValue;
  const direction = change >= 0 ? "up" : "down";
  const changeAmount = Math.abs(change);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const currentFormatted =
    valueType === "volume"
      ? currentValue.toLocaleString()
      : currencyFormatter.format(currentValue);

  const previousFormatted =
    valueType === "volume"
      ? previousValue.toLocaleString()
      : currencyFormatter.format(previousValue);

  const changeFormatted =
    valueType === "volume"
      ? changeAmount.toLocaleString()
      : currencyFormatter.format(changeAmount);

  const message = `${symbol} ${valueType} changed from ${previousFormatted} to ${currentFormatted}, ${direction} ${changeFormatted}`;
  const priority =
    Math.abs(change / previousValue) > 0.05 ? "assertive" : "polite";

  announceToScreenReader(message, priority);
}

/**
 * Manages focus for modal dialogs and complex components.
 * Traps focus within the element and restores it when released.
 *
 * @param element - The container element to manage focus within
 * @param shouldTrap - Whether to trap focus (true) or release it (false)
 *
 * @example
 * ```ts
 * // Trap focus in modal
 * manageFocus(modalElement, true)
 *
 * // Release focus when modal closes
 * manageFocus(modalElement, false)
 * ```
 */
export function manageFocus(element: HTMLElement, shouldTrap: boolean): void {
  if (!element) return;

  if (shouldTrap) {
    const previouslyFocused = document.activeElement as HTMLElement;
    element.dataset.previousFocus = previouslyFocused?.id || "";

    const focusableElements = getFocusableElements(element);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const focusableElements = getFocusableElements(element);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }

      if (e.key === "Escape") {
        element.dispatchEvent(new CustomEvent("modal-escape"));
      }
    };

    element.addEventListener("keydown", trapFocus);
    element.dataset.focusTrap = "active";
  } else {
    // Cleanup and restore focus
    const previousId = element.dataset.previousFocus;
    if (previousId) {
      const previousElement = document.getElementById(previousId);
      if (previousElement) previousElement.focus();
    }

    delete element.dataset.focusTrap;
    delete element.dataset.previousFocus;
  }
}

/**
 * Gets all focusable elements within a container.
 * Used internally by manageFocus for focus trapping.
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(", ");

  return Array.from(container.querySelectorAll(focusableSelectors));
}

/**
 * Checks if user prefers reduced motion.
 * Use this to disable or reduce animations for accessibility.
 *
 * @example
 * ```ts
 * if (!prefersReducedMotion()) {
 *   // Show animations
 * }
 * ```
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Generates unique IDs for form elements and ARIA associations.
 *
 * @param prefix - Optional prefix for the ID
 * @returns A unique ID string
 *
 * @example
 * ```ts
 * const inputId = generateId('input')  // 'input-1-1234567890'
 * const labelId = generateId('label')  // 'label-2-1234567891'
 * ```
 */
let idCounter = 0;
export function generateId(prefix: string = "terminal"): string {
  return `${prefix}-${++idCounter}-${Date.now()}`;
}
