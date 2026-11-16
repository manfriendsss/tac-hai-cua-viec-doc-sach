/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sanguine: {
          50: '#fdfbf7',
          100: '#fcf6ee',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ea580c',
          600: '#c2410c',
          700: '#9a3412',
          800: '#7c2d12',
          900: '#521b0a',
          red: '#991b1b',
          redLight: '#b91c1c',
          dark: '#521b0a',
          terracotta: '#7c2d12',
          amber: '#d97706',
        }
      },
      fontFamily: {
        'davinci-title': ['Cinzel', 'Palatino Linotype', 'Book Antiqua', 'Georgia', 'serif'],
        'davinci-note': ['Georgia', '"Times New Roman"', 'serif'],
        'davinci-mono': ['"Courier New"', 'Courier', 'monospace'],
        serif: ['Georgia', 'Palatino', 'serif'],
      },
      boxShadow: {
        'sanguine-sm': '0 2px 8px rgba(124, 45, 18, 0.08)',
        'sanguine-md': '0 8px 24px rgba(124, 45, 18, 0.12)',
        'sanguine-lg': '0 16px 40px rgba(124, 45, 18, 0.18)',
      }
    },
  },
  plugins: [],
}
