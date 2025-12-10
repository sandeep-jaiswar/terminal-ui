import { type ReactNode } from "react";
export interface ThemeContextValue {
    theme: "dark" | "light";
}
export interface ThemeProviderProps {
    children: ReactNode;
    theme?: "dark" | "light";
}
/**
 * ThemeProvider component for Bloomberg Terminal-inspired UI.
 * Provides theme context to all child components.
 * Defaults to dark theme as per Bloomberg Terminal aesthetic.
 */
export declare function ThemeProvider({ children, theme, }: ThemeProviderProps): JSX.Element;
export declare namespace ThemeProvider {
    var displayName: string;
}
export declare function useTheme(): ThemeContextValue;
//# sourceMappingURL=ThemeProvider.d.ts.map