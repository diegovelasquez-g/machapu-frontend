/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'blueDarker': '#1B2845',
      
      
      'lightGreenHover': '#90ee90b8',
      'inputsLightBlue': '#94a3b882',
      'darkerGreen' : '#078322',

      'white': '#FFFFFF',
      'blue': '#018ABC',
      'lightBlue': '#02C7DE',
      'paleBlue': '#CBE6EA',
      'paleSand': '#ECE5DB',
      'darkerBlueOpa' : '#274060b3',
      'lightGreen': '#5AB864'



    },  
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      lexend: ['Lexend', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
