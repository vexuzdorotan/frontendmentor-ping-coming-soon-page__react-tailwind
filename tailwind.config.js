/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    extend: {
      colors: {
        primaryBlue: 'hsl(223, 87%, 63%)',
        secondaryPaleBlue: 'hsl(223, 100%, 88%)',
        secondaryLightRed: 'hsl(354, 100%, 66%)',
        neutralGray: 'hsl(0, 0%, 59%)',
        neutralVeryDarkBlue: 'hsl(209, 33%, 12%)',
      },
    },
  },
  plugins: [],
}

// ### Primary

// - Blue: hsl(223, 87%, 63%)

// ### Secondary

// - Pale Blue: hsl(223, 100%, 88%)
// - Light Red: hsl(354, 100%, 66%)

// ### Neutral

// - Gray: hsl(0, 0%, 59%)
// - Very Dark Blue: hsl(209, 33%, 12%)
