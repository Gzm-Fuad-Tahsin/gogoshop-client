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
        "root-200" : "#3aad60"
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

