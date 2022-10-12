/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "main-blue": "#2563EB",
        "main-black": "#0F172A",
        "night-bg": "#2E3643",
        "night-cyan": "#78FFF7",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
