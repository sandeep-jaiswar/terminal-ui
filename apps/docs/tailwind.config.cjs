/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../packages/tokens/dist/tailwind-preset.js')],
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    '../../packages/*/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
