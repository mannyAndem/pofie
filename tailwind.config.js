/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f",
        gray: "#B0B0B0",
        darkGray: "#4E4949",
      },
      fontFamily: {
        "back-home": "back-home",
      },
    },
  },
  plugins: [],
};
