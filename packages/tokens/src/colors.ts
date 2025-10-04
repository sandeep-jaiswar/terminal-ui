/**
 * Color tokens for Bloomberg Terminal-inspired UI
 *
 * Provides a comprehensive color palette with:
 * - Terminal base colors (black, grays, white)
 * - Financial semantic colors with full shade scales
 * - Semantic color mappings for consistent usage
 *
 * @example
 * ```typescript
 * import { colors, semanticColors } from '@sandeep-jaiswar/tokens/colors'
 *
 * // Using base colors
 * const bgColor = colors.terminal.black
 *
 * // Using semantic colors
 * const textColor = semanticColors.text.primary
 * ```
 */

/**
 * Terminal base colors - optimized for trading applications
 */
export const colors = {
  // Terminal Base Colors
  terminal: {
    black: "#000000",
    "dark-gray": "#1a1a1a",
    "medium-gray": "#333333",
    "light-gray": "#666666",
    white: "#ffffff",
  },

  // Financial Semantic Colors - Primary (Blue)
  primary: {
    50: "#e6f0ff",
    100: "#b3d1ff",
    200: "#80b2ff",
    300: "#4d93ff",
    400: "#1a74ff",
    500: "#0068ff", // Main blue
    600: "#0052cc",
    700: "#003d99",
    800: "#002966",
    900: "#001433",
  },

  // Financial Semantic Colors - Success (Green)
  success: {
    50: "#e8fffe",
    100: "#c3fffc",
    200: "#9ffffa",
    300: "#7afef8",
    400: "#55fdf6",
    500: "#4af6c3", // Main green
    600: "#2eb398",
    700: "#1f8a73",
    800: "#15614e",
    900: "#0a3829",
  },

  // Financial Semantic Colors - Danger (Red)
  danger: {
    50: "#ffebea",
    100: "#ffb3b0",
    200: "#ff7b76",
    300: "#ff433d", // Main red
    400: "#ff0b03",
    500: "#cc2f27",
    600: "#99231c",
    700: "#661711",
    800: "#330b08",
    900: "#1a0604",
  },

  // Financial Semantic Colors - Warning (Orange)
  warning: {
    50: "#fff4e6",
    100: "#ffe0b3",
    200: "#ffcc80",
    300: "#ffb84d",
    400: "#ffa41a",
    500: "#fb8b1e", // Main orange
    600: "#cc6e15",
    700: "#99520f",
    800: "#66370a",
    900: "#331b05",
  },
} as const;

/**
 * Semantic color mappings for consistent usage across components
 *
 * Maps design intent to specific color values
 */
export const semanticColors = {
  background: {
    primary: colors.terminal.black,
    secondary: colors.terminal["dark-gray"],
    tertiary: colors.terminal["medium-gray"],
  },

  text: {
    primary: colors.terminal.white,
    secondary: colors.terminal["light-gray"],
    muted: colors.terminal["medium-gray"],
  },

  border: {
    default: colors.terminal["medium-gray"],
    muted: colors.terminal["dark-gray"],
    strong: colors.terminal["light-gray"],
  },

  state: {
    info: colors.primary[500],
    success: colors.success[500],
    warning: colors.warning[500],
    danger: colors.danger[300],
  },
} as const;
