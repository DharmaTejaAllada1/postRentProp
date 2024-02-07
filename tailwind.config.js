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
        blue_gray: { 800: "#254d4d", 900: "#273842" },
        white: { A700: "#ffffff" },
        gray: { 100: "#f4f9f7" },
      },
      fontFamily: { mulish: "Mulish" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
