module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_900_99: "#15172299",
        orange_100_01: "#ffd0a0",
        blue_gray_900_6c: "#2325366c",
        gray_50: "#f7f8fa",
        black_900_01: "#060606",
        black_900: "#0d0d0d",
        gray_900_a0: "#151722a0",
        white_A700_ab: "#ffffffab",
        deep_orange_900: "#a44e2b",
        deep_orange_800: "#cd5423",
        gray_900_a2: "#151722a2",
        deep_orange_300: "#db9853",
        blue_gray_800: "#494a53",
        blue_gray_900: "#232536",
        gray_100_90: "#f5f2f090",
        black_900_05: "#00000005",
        gray_900_02: "#161722",
        white_A700_a0: "#ffffffa0",
        black_900_c1: "#060606c1",
        gray_900_03: "#1d212f",
        gray_900_04: "#1d1b1b",
        white_A700_a2: "#ffffffa2",
        gray_900: "#151722",
        gray_900_67: "#15172267",
        gray_900_01: "#1c1d28",
        gray_900_99_01: "#1d1b1b99",
        yellow_50: "#fff5ea",
        orange_200: "#f2c79b",
        orange_100: "#ffd1a3",
        gray_100: "#f5f2f0",
        white_A700_63: "#ffffff63",
        blue_gray_900_90: "#23253690",
        white_A700_26: "#ffffff26",
        white_A700: "#ffffff",
      },
      fontFamily: { robotocondensed: "Roboto Condensed", roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(187deg ,#060606,#00000005)",
        gradient1: "linear-gradient(187deg ,#060606c1,#00000005)",
        gradient2: "linear-gradient(162deg ,#a44e2b,#db9853)",
        gradient3: "linear-gradient(162deg ,#cd5423,#ffd0a0)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
