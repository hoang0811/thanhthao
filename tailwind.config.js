/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#07111F',
          paper: '#0A1728',
          surface: '#101F33',
          accent: '#6CF5E5',
          coral: '#9B8CFF',
          line: '#26364B',
          text: '#F2F7FF',
          muted: '#A1B0C3',
        },
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Noto Sans', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Be Vietnam Pro', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}