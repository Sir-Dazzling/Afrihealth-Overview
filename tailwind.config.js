const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom2: ["Varela Round", ...defaultTheme.fontFamily.sans],
        visblyround: ["VisbyRoundRegular", ...defaultTheme.fontFamily.serif] 
      },
      height: {
        carousel: "800px"
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "one-bounce": "bounce 1s",
        "slow-bounce": "bounce 10s infinite"
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
