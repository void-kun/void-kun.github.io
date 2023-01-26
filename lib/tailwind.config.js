module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'brown-dark': '#ad8b73',
      brown: '#ceab93',
      'brown-light': '#d7c0ae',
      blue: '#4895ef',
      text: '#000000',
      'text-light': '#505050',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
