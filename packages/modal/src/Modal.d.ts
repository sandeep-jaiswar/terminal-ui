import React from "react";
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
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
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
export declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Modal content area
 */
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
export declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Modal footer with action buttons
 */
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
export declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Modal.d.ts.map