module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width' : 'width',
        'spacing': 'margin, padding'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
