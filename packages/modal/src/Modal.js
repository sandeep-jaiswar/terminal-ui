import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useCallback } from "react";
import { cn } from "@sandeep-jaiswar/utils";
import { manageFocus, announceToScreenReader, prefersReducedMotion, generateId, } from "@sandeep-jaiswar/utils";
export const Modal = React.forwardRef(({ children, isOpen = false, onClose, size = "md", className, disableBackdropClick = false, disableEscapeKey = false, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, }, ref) => {
    const modalRef = useRef(null);
    const modalId = useRef(generateId("modal")).current;
    const previousActiveElement = useRef(null);
    // Handle Escape key
    const handleEscape = useCallback((event) => {
        if (event.key === "Escape" && !disableEscapeKey && onClose) {
            onClose();
        }
    }, [disableEscapeKey, onClose]);
    // Handle backdrop click
    const handleBackdropClick = useCallback((event) => {
        if (!disableBackdropClick &&
            onClose &&
            event.target === event.currentTarget) {
            onClose();
        }
    }, [disableBackdropClick, onClose]);
    // Manage focus and body scroll
    useEffect(() => {
        if (isOpen) {
            // Store currently focused element
            previousActiveElement.current = document.activeElement;
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
    if (!isOpen)
        return null;
    const sizeStyles = {
        sm: "max-w-[360px]",
        md: "max-w-[480px]",
        lg: "max-w-[720px]",
    };
    const reducedMotion = prefersReducedMotion();
    return (_jsx("div", { className: cn(
        // Overlay backdrop
        "fixed inset-0 z-[1050]", "flex items-center justify-center", "bg-black/50", !reducedMotion && "backdrop-blur-[8px]", "p-4"), onClick: handleBackdropClick, role: "presentation", children: _jsx("div", { ref: (node) => {
                if (typeof ref === "function") {
                    ref(node);
                }
                else if (ref) {
                    ref.current = node;
                }
                if (node) {
                    modalRef.current =
                        node;
                }
            }, id: modalId, role: "dialog", "aria-modal": "true", "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, className: cn(
            // Modal container
            "relative w-full", sizeStyles[size], "bg-terminal-dark-gray", "border-2 border-primary-500", "rounded-md", "shadow-lg shadow-primary-500/20", 
            // Animation
            !reducedMotion && "animate-in fade-in-0 zoom-in-95 duration-200", className), tabIndex: -1, children: children }) }));
});
Modal.displayName = "Modal";
export const ModalHeader = React.forwardRef(({ children, showClose = true, onClose, className, ...props }, ref) => {
    const headerId = useRef(generateId("modal-header")).current;
    return (_jsxs("div", { ref: ref, id: headerId, className: cn("flex items-center justify-between", "px-6 py-4", "border-b border-terminal-medium-gray", className), ...props, children: [_jsx("h2", { className: "text-lg font-semibold text-terminal-white font-terminal-sans", children: children }), showClose && onClose && (_jsx("button", { type: "button", onClick: onClose, className: cn("ml-4 p-1", "text-terminal-light-gray hover:text-terminal-white", "transition-colors duration-150", "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-terminal-dark-gray", "rounded"), "aria-label": "Close dialog", children: _jsx("svg", { className: "w-5 h-5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { d: "M6 18L18 6M6 6l12 12" }) }) }))] }));
});
ModalHeader.displayName = "ModalHeader";
export const ModalContent = React.forwardRef(({ children, className, ...props }, ref) => {
    const contentId = useRef(generateId("modal-content")).current;
    return (_jsx("div", { ref: ref, id: contentId, className: cn("px-6 py-4", "text-terminal-white text-sm font-terminal-sans", "max-h-[60vh] overflow-y-auto", className), ...props, children: children }));
});
ModalContent.displayName = "ModalContent";
export const ModalFooter = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("flex items-center justify-end gap-3", "px-6 py-4", "border-t border-terminal-medium-gray", className), ...props, children: children }));
});
ModalFooter.displayName = "ModalFooter";
