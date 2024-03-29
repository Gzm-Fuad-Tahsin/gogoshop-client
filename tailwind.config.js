/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important : "#root",
  theme: {
    extend: {
      colors : {
        "root-100" : "#4ABA6F",
        "root-200" : "#3aad60",

        "light-100" : "#ECFAEE",
        "light-200" : "#dbf3df",

        "shadow-100" : "#F7F7F7",
        
        "light-black-100" : '#666666',
        "light-black-200" : '#5a5a5a',
      },
      width : {
        '478' : '29.87rem',
        '30' : '7.5rem',
      },
      screens:{
        'xmd' : '650px',
        
        '3xl' : '1680px',
        '4xl' :'1920px',
        '5xl' :'2560px',
        '6xl' :'3440px',
      }
    },
  },
  plugins: [],


}

