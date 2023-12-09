/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'blue': '#3391FF',
      'white': '#ffffff',
      'black-10': '#262534',
      'black': '#000000',
      'red': '#F00',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  daisyui: {
    themes: []
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  
};
