import React, { createContext, useContext, type ReactNode } from "react";

export interface ThemeContextValue {
  theme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextValue>({ theme: "dark" });

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: "dark" | "light";
}

/**
 * ThemeProvider component for Bloomberg Terminal-inspired UI.
 * Provides theme context to all child components.
 * Defaults to dark theme as per Bloomberg Terminal aesthetic.
 */
export function ThemeProvider({
  children,
  theme = "dark",
}: ThemeProviderProps): JSX.Element {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.displayName = "ThemeProvider";

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
