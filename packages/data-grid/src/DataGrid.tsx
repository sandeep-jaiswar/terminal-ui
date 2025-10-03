import React from 'react';

export interface DataGridProps {
  children?: React.ReactNode;
  data?: unknown[];
}

export function DataGrid({ children, data }: DataGridProps): JSX.Element {
  return (
    <div role="grid">
      {children}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

DataGrid.displayName = 'DataGrid';
