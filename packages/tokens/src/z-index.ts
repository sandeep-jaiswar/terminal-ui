/**
 * Z-index tokens for Bloomberg Terminal-inspired UI
 *
 * Provides consistent layering system for overlays and positioned elements
 * Ensures proper stacking context across all components
 *
 * @example
 * ```typescript
 * import { zIndex } from '@sandeep-jaiswar/tokens/z-index'
 *
 * // Using z-index values
 * const modalZ = zIndex.modal     // 1050
 * const tooltipZ = zIndex.tooltip // 1090
 * ```
 */

export const zIndex = {
  /** Auto z-index - browser default */
  auto: "auto",
  /** Base z-index - default layer */
  base: 0,
  /** Docked elements - sticky headers */
  docked: 10,
  /** Dropdown menus and selects */
  dropdown: 1000,
  /** Sticky positioned elements */
  sticky: 1020,
  /** Banners and announcements */
  banner: 1030,
  /** Overlays and backdrops */
  overlay: 1040,
  /** Modal dialogs */
  modal: 1050,
  /** Popovers and date pickers */
  popover: 1060,
  /** Skip navigation links */
  skipLink: 1070,
  /** Toast notifications */
  toast: 1080,
  /** Tooltips - highest priority */
  tooltip: 1090,
} as const;
