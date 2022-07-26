/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    backgroundImage: {
      'map': "url('/images/map.webp')"
    },
    extend: {},
    colors: {
      'yellow': {
        100: '#fdfaf2',
        200: '#f9f1d7',
        300: '#f2e3af',
        400: '#eeda95',
        500: '#ead17a',
        600: '#bba762',
        700: '#92794d',
        800: '#8c7d49',
        900: '#463f25',
      },
      'gray': {
        100: "#ffffff",
        200: "#e6e6e6",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a",
      },
      'white': '#fff',
    }
  },
  plugins: [],
}
