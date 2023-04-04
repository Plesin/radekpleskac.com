/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        base: '#E0E9E5',
        dark: '#282F3F',
        primary: '#7BB62E',
        secondary: '#4E6785',
        light: '#6D98A8',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
