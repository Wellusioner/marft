/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      dark: '#181817',
      DEFAULT: '#181817',
      warning: "#F6D88C",
      grey: "#6F6F6F",
      light: "#F8F3EC"
    },
    extend: {
      screens: {
        'sm': '576px',
      },
    },
  },
  plugins: [],
}