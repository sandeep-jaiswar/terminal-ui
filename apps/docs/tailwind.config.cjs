/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    '../../packages/*/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Terminal colors
        'terminal-black': '#000000',
        'terminal-dark-gray': '#1a1a1a',
        'terminal-medium-gray': '#333333',
        'terminal-light-gray': '#666666',
        'terminal-white': '#ffffff',
        
        // Primary colors
        'terminal-blue': '#0068ff',
        'terminal-green': '#4af6c3',
        'terminal-red': '#ff433d',
        'terminal-orange': '#fb8b1e',
        'terminal-yellow': '#ffd60a',
        
        // Semantic colors
        background: {
          primary: '#000000',
          secondary: '#1a1a1a',
          tertiary: '#333333',
        },
        text: {
          primary: '#ffffff',
          secondary: '#999999',
          muted: '#666666',
          disabled: '#444444',
        },
        border: {
          default: '#333333',
          muted: '#222222',
          hover: '#444444',
        },
        state: {
          success: '#4af6c3',
          error: '#ff433d',
          warning: '#fb8b1e',
          info: '#0068ff',
        },
      },
      fontFamily: {
        'terminal-mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Consolas', 'monospace'],
        'terminal-sans': ['Inter', 'SF Pro Display', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'xs': ['10px', '14px'],
        'sm': ['12px', '16px'],
        'base': ['14px', '20px'],
        'lg': ['16px', '22px'],
        'xl': ['18px', '26px'],
        '2xl': ['20px', '28px'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
      },
      boxShadow: {
        'terminal-card': '0 4px 6px rgba(0, 0, 0, 0.5)',
        'terminal-modal': '0 8px 16px rgba(0, 0, 0, 0.7)',
        'glow-blue': '0 0 10px rgba(0, 104, 255, 0.5)',
        'glow-green': '0 0 10px rgba(74, 246, 195, 0.5)',
        'glow-red': '0 0 10px rgba(255, 67, 61, 0.5)',
        'glow-orange': '0 0 10px rgba(251, 139, 30, 0.5)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
    },
  },
  plugins: [],
}
