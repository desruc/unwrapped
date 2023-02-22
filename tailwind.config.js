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
        ...colors,
        green: {
          50: "#E5FBEC",
          100: "#CAF7DA",
          200: "#9AEFB8",
          300: "#65E792",
          400: "#34DF70",
          500: "#1DB954",
          600: "#179644",
          700: "#116E32",
          800: "#0C4B22",
          900: "#062310"
        },
        heading: "#ffffff",
        paragraph: "#a7a7a7",
        body: {
          50: "#E8E8E8",
          100: "#CFCFCF",
          200: "#A1A1A1",
          300: "#707070",
          400: "#424242",
          500: "#121212",
          600: "#0F0F0F",
          700: "#0A0A0A",
          800: "#080808",
          900: "#030303"
        },
        card: {
          50: "#E8E8E8",
          100: "#D1D1D1",
          200: "#A3A3A3",
          300: "#757575",
          400: "#474747",
          500: "#181818",
          600: "#141414",
          700: "#0F0F0F",
          800: "#0A0A0A",
          900: "#050505"
        }
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
