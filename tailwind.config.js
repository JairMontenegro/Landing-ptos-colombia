/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'principal': '#5f00cc',
        'black-principal': '#191919', 
        'white': '#ffffff',
        'Principal-yellow': '#FCB90D',
        'Secondary-yellow': '#FCC616',
        'gray' : '#D0D5DD',
        'black' : '#475467',
        'rose':'#DE0077'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'puntos-vid-prev': "url('https://landing.puntoscolombia.com/hubfs/Puntomania/2023/videopuntomania.webp')",
      }
    },
  },
  plugins: [],
}

