/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "root-100" : "#4ABA6F",
        "root-200" : "#3aad60",

        "light-100" : "#ECFAEE",
        "light-200" : "#dbf3df",

        "shadow-100" : "#F7F7F7",
      },
      width : {
        '478' : '29.87rem'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },

}

