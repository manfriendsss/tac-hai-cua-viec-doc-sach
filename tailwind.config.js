/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#fcfaf5',
          100: '#f8f3e8',
          200: '#f0e5cf',
          300: '#ebdcb9',
          400: '#dec79b',
          500: '#cbb07e',
          600: '#b89662',
          700: '#9b794a',
          800: '#7d5f38',
          900: '#5c4426',
        },
        codex: {
          ink: '#291305',
          sepia: '#451a03',
          brown: '#6b3e1b',
          crimson: '#801414',
          gold: '#b45309',
          goldLight: '#d97706',
          paper: '#ebdcb9',
        }
      },
      fontFamily: {
        cursive: ['"Snell Roundhand"', '"Brush Script MT"', '"Apple Chancery"', '"Playfair Display"', 'Georgia', 'cursive', 'serif'],
        serif: ['Palatino', '"Palatino Linotype"', '"Book Antiqua"', 'Georgia', 'serif'],
        title: ['Cinzel', 'Palatino', 'Georgia', 'serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      boxShadow: {
        'parchment-sm': '0 2px 8px rgba(41, 19, 5, 0.08)',
        'parchment-md': '0 8px 24px rgba(41, 19, 5, 0.12)',
        'parchment-lg': '0 16px 40px rgba(41, 19, 5, 0.18)',
        'parchment-inner': 'inset 0 0 50px rgba(69, 26, 3, 0.45)',
      }
    },
  },
  plugins: [],
}
