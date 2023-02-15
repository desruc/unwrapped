const { colors } = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      screens: {
        "2xl": "2000px"
      }
    },
    extend: {
      colors: {
        ...colors
      },
      fontFamily: {
        sans: ["var(--font-figtree)", ...defaultTheme.fontFamily.sans]
      },
      flex: {
        0: "0 0 auto"
      }
    }
  }
};
