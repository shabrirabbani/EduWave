/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      "dark-green": "#19363B",
      primary: "#1AA47B",
      secondary: "#F1FFF8 ",
    },
  },
  plugins: [require("flowbite/plugin")],
};
