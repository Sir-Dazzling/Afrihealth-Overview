const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ["VisbyRoundCFBold", ...defaultTheme.fontFamily.serif],
        custom2: ["VisbyRoundCFRegular", ...defaultTheme.fontFamily.sans],
      },
      height: {
        carousel: "800px"
      },
      colors: {
        purple: {
          normal: "#56259b",
          light: "#ecdeff"
        },
        gray: {
          normal: "#f6f6f7",
          other: "#f5edff",
          heavy: "#ecdeff"
        },
        green: {
          normal: "#4e9f17",
          light: "#ddf8ca",
          lighter: "#f5fff4",
        },
        blue: {
          normal: "#2386ee",
          light: "#eaf3fc"
        },
        yellow: {
          normal: "#f7b026"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
