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
      },
    },
  },
  plugins: [],
};
