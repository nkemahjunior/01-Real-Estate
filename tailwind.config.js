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
      },

      keyframes:{
        slide:{
          '0%':{transform : 'translateX(120rem)'},
          '100%':{transform : 'translateX(0rem)'},
        },
        slideBack:{
          'from':{transform : 'translateX(0rem)'},
          'to':{transform : 'translateX(120rem)'},
        },
        expand:{
          'from':{height : '0px',width: '0px',marginTop:'20dvh', marginLeft:'50%'},
          'to' :{height:'95dvh', width: '100%'}
        },
        small:{
          'from' : {height:'95dvh', width: '100%'},
          'to' : {height : '1px',width: '1px',marginTop:'20dvh', marginLeft:'50%'}
        },
        slideBig:{
          '0%':{transform : 'translateY(50rem)'},
          '100%':{transform : 'translateY(0rem)'},
        },
        slideBackBig:{
          'from':{transform : 'translateY(0rem)'},
          'to':{transform : 'translateY(50rem)'},
        },




      },
      

      animation:{
        slide:'slide 2s ease-in-out',
        slideBack:'slideBack 2s ease-in-out',
        expand:'expand 0.5s ease',
        small:'small 0.5s ease',
        slideBig:'slide 1s ease-in-out',
        slideBackBig:'slideBack 1s ease-in-out',

      }
    },
  },
  plugins: [],
}


