/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "sea-blue": "#0D9FB1",
        "main-white": "#fff",
        "black-one": "#262B35",
        "black-two": "#252525",
        // "white" : "#F2F2F3",
        "light-gray": "#E9E9EB",
        "main-gray": "#BBBBBB",
        "dark-black": "#1D2226",
        orangered: "orangered",
        blueviolet: "blueviolet",
        tetiary: "#ea61a724",
        shadow: "#0000001a",
        btnShadow: "#00000030",
        lightGray: "#0000000a",
        gray: "#80808080",
      },
      gridTemplateColumns: {
        "1fr-3fr": "1fr 3fr",
      },
    },
  },
  plugins: [],
};
