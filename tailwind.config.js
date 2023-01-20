/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  variants: {},
  theme: {
    extend: {},
  },
  darkMode: false,
};
