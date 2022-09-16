/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      md: "998px",
      nav: "1120px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontFamily: {

      Playfair: ['Cormorant SC', "serif"],
      Rock: ["RocknRoll One", "sans-serif"],
      Play: ["Play", "sans-serif"],
      Ibm: ["IBM Plex Sans", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
      Rale: ["Raleway", "sans-serif"],

    },

    extend: {
      colors: {
        'hed': 'rgba(217, 217, 217, 0.39);',
      },
      backgroundImage: {
        "block-svg": 'url("/assets/Block.svg")',

        "ase": "linear-gradient(188.29deg, #1D1E3E 32.23%, #4DBF73 130.69%)",
        "sec": "radial-gradient(129.41% 129.41% at 64.45% 19.52%, #BFAF1C 0%, #B00000 64.57%)",
        "fis": "radial-gradient(71.66% 71.66% at 39.87% 31.82%, #34113F 0%, #1D1E3E 100%)",
        "wat": "linear-gradient(180deg, rgba(57, 117, 234, 0.38) -23.21%, rgba(214, 228, 255, 0.5) 125%);",
      },

    },
  },
});
