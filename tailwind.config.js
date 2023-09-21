/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter': ["Inter",'sans-serif'],
        'Rubik': ['Rubik','sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
        'Open Sans' : ['Open Sans', 'sans-serif'],
        'Poppins' : ['Poppins', 'sans-serif'],
        'Roboto' : ['Roboto', 'sans-serif']
      },
      screens:{
        '400': '400px',
        '580': '580px',
        '600' :'600px',
        '767' : {'max':'767px'},
        '760' : '760',
        '1535' : {'max':'1535px'}
      }
    },
  },
  plugins: [],
}


