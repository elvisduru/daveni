const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        dark: '#202020',
        darkgrey: '#3F3F3F',
        lightgrey: '#707070',
        primary: '#ecaa2c',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Cinzel Decorative', ...defaultTheme.fontFamily.serif],
        mono: ['Permanent Marker', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
