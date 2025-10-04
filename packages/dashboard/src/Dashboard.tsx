import React from "react";

export interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Dashboard({ children, ...props }: DashboardProps): JSX.Element {
  return (
    <div data-component="dashboard" {...props}>
      {children}
    </div>
  );
}

Dashboard.displayName = "Dashboard";

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Widget({ children, ...props }: WidgetProps): JSX.Element {
  return (
    <div data-component="widget" {...props}>
      {children}
    </div>
  );
}

Widget.displayName = "Widget";
