import React from 'react';

export interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Modal({ children, isOpen = false }: ModalProps): JSX.Element | null {
  if (!isOpen) return null;
  
  return (
    <div data-component="modal">
      <div data-component="modal-content">
        {children}
      </div>
    </div>
  );
}

Modal.displayName = 'Modal';
