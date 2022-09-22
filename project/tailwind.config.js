/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bsc: ["Barlow Semi Condensed", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        scissors: 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        paper: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        rock: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      },
      colors: {
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        outline: 'hsl(217, 16%, 45%)',

        'button-shadow': '#babfd3',
        'scissors-shadow': '#c76c1b',
        'paper-shadow': '#2845bf',
        'rock-shadow': '#9e1430'
      }
    },
  },
  plugins: [],
}