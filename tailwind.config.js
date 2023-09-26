/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
        950: "#172554",
      },
      primaryDarkBlue: "rgb(var(--primaryDarkBlue-rgb) / <alpha-value>)",
      primaryLightBlue: "rgb(var(--primaryLightBlue-rgb) / <alpha-value>)",
      primaryBlue: "rgb(var(--primaryBlue-rgb) / <alpha-value>)",
      primaryBlack: "rgb(var(--primaryBlack-rgb) / <alpha-value>)",
      secondaryOliveDark: "rgb(var(--secondaryOliveDark-rgb) / <alpha-value>)",
      secondaryOlive: "rgb(var(--secondaryOlive-rgb) / <alpha-value>)",
      secondaryOliveLight:
        "rgb(var(--secondaryOliveLight-rgb) / <alpha-value>)",
      secondaryGreenDark: "rgb(var(--secondaryGreenDark-rgb) / <alpha-value>)",
      secondaryGreen: "rgb(var(--secondaryGreen-rgb) / <alpha-value>)",
      secondaryRedDark: "rgb(var(--secondaryRedDark-rgb) / <alpha-value>)",
      secondaryRed: "rgb(var(--secondaryRed-rgb) / <alpha-value>)",
      secondaryOrange: "rgb(var(--secondaryOrange-rgb) / <alpha-value>)",
      secondaryBlueDark: "rgb(var(--secondaryBlueDark-rgb) / <alpha-value>)",
      secondaryBlue: "rgb(var(--secondaryBlue-rgb) / <alpha-value>)",
      secondaryBlueLight: "rgb(var(--secondaryBlueLight-rgb) / <alpha-value>)",
      secondaryWarmGrayDark:
        "rgb(var(--secondaryWarmGrayDark-rgb) / <alpha-value>)",
      secondaryWarmGray: "rgb(var(--secondaryWarmGray-rgb) / <alpha-value>)",
      secondaryWarmGrayLight:
        "rgb(var(--secondaryWarmGrayLight-rgb) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
