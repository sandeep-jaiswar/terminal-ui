import React from "react";
export interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function Dashboard({ children, ...props }: DashboardProps): JSX.Element;
export declare namespace Dashboard {
    var displayName: string;
}
export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function Widget({ children, ...props }: WidgetProps): JSX.Element;
export declare namespace Widget {
    var displayName: string;
}
//# sourceMappingURL=Dashboard.d.ts.map