/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        almostwhite: 'hsl(0, 0%, 98%)',
        MediumGray: 'hsl(0, 0%, 41%)',
        AlmostBlack: 'hsl(0, 0%, 8%)',

      },
      fontFamily:{
        Epilogue: ['Epilogue']
      }

    },
  },
  plugins: [],
}
