import React, { useEffect, useRef, useCallback } from "react";
import { cn } from "@sandeep-jaiswar/utils";
import {
  manageFocus,
  announceToScreenReader,
  prefersReducedMotion,
  generateId,
} from "@sandeep-jaiswar/utils";

/**
 * Professional modal dialog component for financial trading applications.
 *
 * Features Bloomberg Terminal-inspired styling with:
 * - Three size variants optimized for different use cases
 * - Centered overlay with backdrop blur effect
 * - Focus management and keyboard navigation
 * - WCAG 2.1 AA compliant accessibility
 * - Smooth animations with reduced motion support
 *
 * @example
 * ```tsx
 * <Modal isOpen={isOpen} onClose={handleClose} size="md">
 *   <ModalHeader>Confirm Order</ModalHeader>
 *   <ModalContent>
 *     Are you sure you want to execute this trade?
 *   </ModalContent>
 *   <ModalFooter>
 *     <Button variant="secondary" onClick={handleClose}>Cancel</Button>
 *     <Button variant="success" onClick={handleConfirm}>Confirm</Button>
 *   </ModalFooter>
 * </Modal>
 * ```
 */
export interface ModalProps {
  /** Modal content */
  children: React.ReactNode;
  /** Whether the modal is open */
  isOpen?: boolean;
  /** Callback when modal should close */
  onClose?: () => void;
  /** Size variant of the modal */
  size?: "sm" | "md" | "lg";
  /** Additional CSS classes for modal container */
  className?: string;
  /** Prevent closing on backdrop click */
  disableBackdropClick?: boolean;
  /** Prevent closing on Escape key */
  disableEscapeKey?: boolean;
  /** Custom aria-label for accessibility */
  "aria-label"?: string;
  /** Custom aria-labelledby for accessibility */
  "aria-labelledby"?: string;
  /** Custom aria-describedby for accessibility */
  "aria-describedby"?: string;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      isOpen = false,
      onClose,
      size = "md",
      className,
      disableBackdropClick = false,
      disableEscapeKey = false,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedby,
    },
    ref,
  ) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const modalId = useRef(generateId("modal")).current;
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Handle Escape key
    const handleEscape = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === "Escape" && !disableEscapeKey && onClose) {
          onClose();
        }
      },
      [disableEscapeKey, onClose],
    );

    // Handle backdrop click
    const handleBackdropClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (
          !disableBackdropClick &&
          onClose &&
          event.target === event.currentTarget
        ) {
          onClose();
        }
      },
      [disableBackdropClick, onClose],
    );

    // Manage focus and body scroll
    useEffect(() => {
      if (isOpen) {
        // Store currently focused element
        previousActiveElement.current = document.activeElement as HTMLElement;

        // Prevent body scroll
        document.body.style.overflow = "hidden";

        // Announce modal opening to screen readers
        announceToScreenReader("Dialog opened", "polite");

        // Setup focus management
        const currentModalRef = modalRef.current;
        if (currentModalRef) {
          manageFocus(currentModalRef, true);
        }

        // Add escape key listener
        document.addEventListener("keydown", handleEscape);

        return () => {
          // Restore body scroll
          document.body.style.overflow = "";

          // Release focus management
          if (currentModalRef) {
            manageFocus(currentModalRef, false);
          }

          // Restore focus to previous element
          if (previousActiveElement.current) {
            previousActiveElement.current.focus();
          }

          // Remove escape key listener
          document.removeEventListener("keydown", handleEscape);

          // Announce modal closing
          announceToScreenReader("Dialog closed", "polite");
        };
      }
    }, [isOpen, handleEscape]);

    if (!isOpen) return null;

    const sizeStyles = {
      sm: "max-w-[360px]",
      md: "max-w-[480px]",
      lg: "max-w-[720px]",
    };

    const reducedMotion = prefersReducedMotion();

    return (
      <div
        className={cn(
          // Overlay backdrop
          "fixed inset-0 z-[1050]",
          "flex items-center justify-center",
          "bg-black/50",
          !reducedMotion && "backdrop-blur-[8px]",
          "p-4",
        )}
        onClick={handleBackdropClick}
        role="presentation"
      >
        <div
          ref={(node) => {
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
            if (node) {
              (modalRef as React.MutableRefObject<HTMLDivElement>).current =
                node;
            }
          }}
          id={modalId}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedby}
          className={cn(
            // Modal container
            "relative w-full",
            sizeStyles[size],
            "bg-terminal-dark-gray",
            "border-2 border-primary-500",
            "rounded-md",
            "shadow-lg shadow-primary-500/20",
            // Animation
            !reducedMotion && "animate-in fade-in-0 zoom-in-95 duration-200",
            className,
          )}
          tabIndex={-1}
        >
          {children}
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";

/**
 * Modal header component with close button
 */
export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Show close button */
  showClose?: boolean;
  /** Custom close handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, showClose = true, onClose, className, ...props }, ref) => {
    const headerId = useRef(generateId("modal-header")).current;

    return (
      <div
        ref={ref}
        id={headerId}
        className={cn(
          "flex items-center justify-between",
          "px-6 py-4",
          "border-b border-terminal-medium-gray",
          className,
        )}
        {...props}
      >
        <h2 className="text-lg font-semibold text-terminal-white font-terminal-sans">
          {children}
        </h2>
        {showClose && onClose && (
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "ml-4 p-1",
              "text-terminal-light-gray hover:text-terminal-white",
              "transition-colors duration-150",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-terminal-dark-gray",
              "rounded",
            )}
            aria-label="Close dialog"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

ModalHeader.displayName = "ModalHeader";

/**
 * Modal content area
 */
export interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref) => {
    const contentId = useRef(generateId("modal-content")).current;

    return (
      <div
        ref={ref}
        id={contentId}
        className={cn(
          "px-6 py-4",
          "text-terminal-white text-sm font-terminal-sans",
          "max-h-[60vh] overflow-y-auto",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ModalContent.displayName = "ModalContent";

/**
 * Modal footer with action buttons
 */
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-end gap-3",
          "px-6 py-4",
          "border-t border-terminal-medium-gray",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ModalFooter.displayName = "ModalFooter";
