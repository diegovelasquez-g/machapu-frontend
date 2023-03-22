/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
      
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      lexend: ['Lexend', 'sans-serif']
    },
    extend: {
      colors: {
        'blueDarker': '#1B2845',
        
        
        'lightGreenHover': '#90ee90b8',
        'inputsLightBlue': '#94a3b882',
        'darkerGreen' : '#078322',
  
        'white': '#FFFFFF',
        'blueFondo': '#018ABC',
        'lightBlue': '#02C7DE',
        'paleBlue': '#CBE6EA',
        'paleSand': '#ECE5DB',
        'darkerBlueOpa' : '#274060b3',
        'lightGreen': '#5AB864',
        
        'errorAlert': '#edb2ba'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
