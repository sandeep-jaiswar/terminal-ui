import React from 'react';

export interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Modal({ children, isOpen = false, onClose }: ModalProps): JSX.Element | null {
  if (!isOpen) return null;
  
  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

Modal.displayName = 'Modal';
