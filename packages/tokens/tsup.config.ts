import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: [
    "src/index.ts",
    "src/colors.ts",
    "src/typography.ts",
    "src/spacing.ts",
    "src/shadows.ts",
    "src/radius.ts",
    "src/z-index.ts",
    "src/css-variables.ts",
    "src/tailwind-preset.js",
  ],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: [],
  treeshake: true,
  ...options,
}));
