/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#160E49"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })]
}
