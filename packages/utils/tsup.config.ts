import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/index.ts",
    "src/cn.ts",
    "src/accessibility.ts",
    "src/format.ts",
    "src/hooks/index.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  ...options,
}));
