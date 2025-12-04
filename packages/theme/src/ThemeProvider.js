import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext } from "react";
const ThemeContext = createContext({ theme: "dark" });
/**
 * ThemeProvider component for Bloomberg Terminal-inspired UI.
 * Provides theme context to all child components.
 * Defaults to dark theme as per Bloomberg Terminal aesthetic.
 */
export function ThemeProvider({ children, theme = "dark", }) {
    return (_jsx(ThemeContext.Provider, { value: { theme }, children: children }));
}
ThemeProvider.displayName = "ThemeProvider";
export function useTheme() {
    return useContext(ThemeContext);
}
