import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export function Input({ ...props }: InputProps): JSX.Element {
  return <input type="text" {...props} />;
}

Input.displayName = 'Input';

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export function NumberInput({ ...props }: NumberInputProps): JSX.Element {
  return <input type="number" {...props} />;
}

NumberInput.displayName = 'NumberInput';

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export function SearchInput({ ...props }: SearchInputProps): JSX.Element {
  return <input type="search" {...props} />;
}

SearchInput.displayName = 'SearchInput';
