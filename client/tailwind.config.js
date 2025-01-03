/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Nunito' : ['Nunito', 'serif'],
      'Montserrat' : ['Montserrat', 'serif'],
    },
    extend: {
      colors: {
        'border-color' : '#282828',
      }
    },
  },
  plugins: [],
}