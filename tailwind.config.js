/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        fakewhite : "#E1EEEC",
        darkbg : "#27232C",
        lighttext : "#1F2428",
        // lighttext : "#254B43 ",
        gd_text_l : "#4CA5FF",
        gd_text_r : "#B475F8",
        cardlight : "#5F9EA0",
        carddark : "#F7F874",
        darktext : "#9AAFC9",
        dark1_bg: "#262626",
        gray_1: "#BCB4B4",
        deep_dark: "#1E1E1E",
        gray_2: "#363636",
      },
      transform: ['hover', 'focus'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}