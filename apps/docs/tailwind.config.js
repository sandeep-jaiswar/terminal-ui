/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@sandeep-jaiswar/tokens/tailwind-preset')],
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    '../../packages/*/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
