/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'Poppins': ['Poppins'],
      'Monument': ['Monument'],
    }
  },
  plugins: [require('daisyui')],
};
