import React from "react";

/**
 * Icon SVG path data
 * All icons are designed on a 24x24 viewBox for consistency
 */
export const iconPaths: Record<string, React.ReactNode> = {
  // Navigation icons
  "chevron-up": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  ),
  "chevron-down": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  ),
  "chevron-left": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  ),
  "chevron-right": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  ),

  // Financial icons
  "trending-up": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  ),
  "trending-down": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
    />
  ),
  "dollar-sign": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2v20m5-17H9a3 3 0 000 6h6a3 3 0 010 6H7"
    />
  ),

  // Trading icons
  buy: (
    <>
      <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.1} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v12m-6-6h12"
      />
    </>
  ),
  sell: (
    <>
      <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.1} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12h12"
      />
    </>
  ),
  "alert-triangle": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2L2 20h20L12 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v4m0 4h.01"
      />
    </>
  ),
  "alert-circle": (
    <>
      <circle cx={12} cy={12} r={10} strokeWidth={2} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4m0 4h.01"
      />
    </>
  ),

  // UI icons
  search: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  ),
  close: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  ),
  menu: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  ),
  settings: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317a1.724 1.724 0 012.573 1.066c.058.43.354.811.78.972l.257.097c.411.155.773.447.997.812.223.365.316.79.257 1.203-.058.43.19.821.58 1.02l.257.131c.39.199.662.543.747.942.085.4.014.82-.193 1.153-.207.333-.524.584-.908.68-.383.097-.79.082-1.17-.04l-.258-.097c-.399-.15-.856-.09-1.217.16l-.257.18a1.724 1.724 0 01-2.573-1.066 1.724 1.724 0 00-.78-.972l-.257-.097a1.724 1.724 0 01-.997-.812 1.724 1.724 0 01-.257-1.203c.058-.43-.19-.821-.58-1.02l-.257-.131a1.724 1.724 0 01-.747-.942 1.724 1.724 0 01.193-1.153c.207-.333.524-.584.908-.68.383-.097.79-.082 1.17.04l.258.097c.399.15.856.09 1.217-.16l.257-.18zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  ),
  check: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  ),
  info: (
    <>
      <circle cx={12} cy={12} r={10} strokeWidth={2} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 16v-4m0-4h.01"
      />
    </>
  ),

  // Data icons
  "chart-line": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 21V3h18v18H3zm0-6l4-4 3 3 5-5 4 4"
    />
  ),
  "chart-bar": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3v18M3 9h6M3 15h6M15 3v18M21 6h-6M21 12h-6M21 18h-6"
    />
  ),
  refresh: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  ),
  filter: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4h18M7 9h10M10 14h4"
    />
  ),
};
