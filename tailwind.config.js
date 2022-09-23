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
      backgroundImage:{
        dCuriousity:`url("../public/images/desktop/image-curiosity.jpg")`,
        dDeepEarth:`url("../public/images/desktop/image-deep-earth.jpg")`,
        dFishEye:'url("../public/images/desktop/image-fisheye.jpg")',
        dFromAbove:`url("../public/images/desktop/image-from-above.jpg")`,
        dGrid:`url("../public/images/desktop/image-grid.jpg")`,
        dHero:`url("../public/images/desktop/image-hero.jpg")`,
        dInteractive:`url("../public/images/desktop/image-interactive.jpg")`,
        dNightArcade:`url("../public/images/desktop/image-night-arcade.jpg")`,
        dPocketBorealis:`url("../public/images/desktop/image-pocket-borealis.jpg")`,
        dSoccerTeam:`url("../public/images/desktop/image-soccer-team.jpg")`,

      },
    },
  },
  plugins: [],
}
