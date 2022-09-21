/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customDarkGray:`hsl(0, 0%, 55%)`,
        customVeryDarkGray: `hsl(0, 0%, 41%)`,
      },
    },
  },
  plugins: [],
}
