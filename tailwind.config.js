/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#212329',
        'light-blue': '#377DFF',
        'dark-blue': '#212429',
        'light-gray': '#282B2F'
      },
      fontFamily: {
        'Pac': ['Pacifico'],
        'Mont': ['Montserrat'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

