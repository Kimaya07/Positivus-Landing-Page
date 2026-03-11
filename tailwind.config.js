/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#B9FF66',
        dark: '#191A23',
        light: '#F3F3F3',
        'positivus-green': '#B9FF66',
        'positivus-dark': '#191A23',
        'positivus-light': '#F3F3F3',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}