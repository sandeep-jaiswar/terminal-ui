import { dirname, join, resolve } from "path";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {},

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    const aliases = [
      {
        find: "@sandeep-jaiswar/ui",
        replacement: resolve(__dirname, "../../../packages/ui/src"),
      },
      {
        find: "@sandeep-jaiswar/card",
        replacement: resolve(__dirname, "../../../packages/card/src"),
      },
      {
        find: "@sandeep-jaiswar/icons",
        replacement: resolve(__dirname, "../../../packages/icons/src"),
      },
      {
        find: "@sandeep-jaiswar/badge",
        replacement: resolve(__dirname, "../../../packages/badge/src"),
      },
      {
        find: "@sandeep-jaiswar/button",
        replacement: resolve(__dirname, "../../../packages/button/src"),
      },
      {
        find: "@sandeep-jaiswar/input",
        replacement: resolve(__dirname, "../../../packages/input/src"),
      },
      {
        find: "@sandeep-jaiswar/modal",
        replacement: resolve(__dirname, "../../../packages/modal/src"),
      },
      {
        find: "@sandeep-jaiswar/tokens",
        replacement: resolve(__dirname, "../../../packages/tokens/src"),
      },
      {
        find: "@sandeep-jaiswar/theme",
        replacement: resolve(__dirname, "../../../packages/theme/src"),
      },
      {
        find: "@sandeep-jaiswar/utils",
        replacement: resolve(__dirname, "../../../packages/utils/src"),
      },
      {
        find: "@sandeep-jaiswar/navigation",
        replacement: resolve(__dirname, "../../../packages/navigation/src"),
      },
      {
        find: "@sandeep-jaiswar/trading",
        replacement: resolve(__dirname, "../../../packages/trading/src"),
      },
      {
        find: "@sandeep-jaiswar/charts",
        replacement: resolve(__dirname, "../../../packages/charts/src"),
      },
      {
        find: "@sandeep-jaiswar/dashboard",
        replacement: resolve(__dirname, "../../../packages/dashboard/src"),
      },
      {
        find: "@sandeep-jaiswar/data-grid",
        replacement: resolve(__dirname, "../../../packages/data-grid/src"),
      },
      // Legacy alias for backward compatibility
      {
        find: "ui",
        replacement: resolve(__dirname, "../../../packages/ui/src"),
      },
    ];

    return {
      ...config,
      define: { "process.env": {} },
      resolve: {
        ...config.resolve,
        alias: aliases,
      },
    };
  },

  docs: {
    autodocs: true,
  },
};

export default config;
