/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Brightorange: 'hsl(31, 77%, 52%)',
        Darkcyan: 'hsl(184, 100%, 22%)',
        Verydarkcyan: 'hsl(179, 100%, 13%)',
        Transparenwhite: 'hsla(0, 0%, 100%, 0.75)',
        Verylightgray: 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        lexenddeca: ['"Lexend Deca"', 'sans-serif'],
        shoulders: ['"Big Shoulders Display"', 'sans-serif'],
      },
      fontSize:{
        body: '15px'
      },
      fontWeight: {
        primary: '400',
        secondary: '700'
      }
    },
  },
  plugins: [],
}

