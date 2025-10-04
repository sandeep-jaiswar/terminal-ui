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
        
        // Primary colors (Blue)
        'terminal-blue': '#0068ff',
        primary: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b2ff',
          300: '#4d93ff',
          400: '#1a74ff',
          500: '#0068ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        
        // Success colors (Green)
        'terminal-green': '#4af6c3',
        success: {
          50: '#e8fffe',
          100: '#c3fffc',
          200: '#9ffffa',
          300: '#7afef8',
          400: '#55fdf6',
          500: '#4af6c3',
          600: '#2eb398',
          700: '#1f8a73',
          800: '#15614e',
          900: '#0a3829',
        },
        
        // Danger colors (Red)
        'terminal-red': '#ff433d',
        danger: {
          50: '#ffebea',
          100: '#ffb3b0',
          200: '#ff7b76',
          300: '#ff433d',
          400: '#ff0b03',
          500: '#cc2f27',
          600: '#99231c',
          700: '#661711',
          800: '#330b08',
          900: '#1a0604',
        },
        
        // Warning colors (Orange)
        'terminal-orange': '#fb8b1e',
        warning: {
          50: '#fff4e6',
          100: '#ffe0b3',
          200: '#ffcc80',
          300: '#ffb84d',
          400: '#ffa41a',
          500: '#fb8b1e',
          600: '#c86f18',
          700: '#955312',
          800: '#62370c',
          900: '#2f1b06',
        },
        
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
        'px': '1px',
        '0': '0px',
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
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
