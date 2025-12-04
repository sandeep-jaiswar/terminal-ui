import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export function Dashboard({ children, ...props }) {
    return (_jsx("div", { "data-component": "dashboard", ...props, children: children }));
}
Dashboard.displayName = "Dashboard";
export function Widget({ children, ...props }) {
    return (_jsx("div", { "data-component": "widget", ...props, children: children }));
}
Widget.displayName = "Widget";
