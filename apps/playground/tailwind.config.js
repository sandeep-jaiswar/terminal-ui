/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@sandeep-jaiswar/tokens/tailwind-preset')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/*/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
