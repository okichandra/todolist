/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 -2px 26px 0px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'main-color': '#292929',
        'second-color': '#3A3A3A',
        'second-text-color': '#A7A7A7',
        'semi-transparent': 'rgba(255,255,255,0.1)',
        'text-color': {
          100: '#313131',
          900: '#FFF',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}