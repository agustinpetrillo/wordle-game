/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wordle: ["Roboto", "sans-serif"],
      },
      colors: {
        correct: "#538D4E",
        almost: "#B59F3B",
        darkMmode: "#121213",
        border: "#3A3A3C",
        keyboard: "#818384",
        lightMode: "#D3D6DA",
      },
    },
  },
  plugins: [],
};
