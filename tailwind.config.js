/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js", //can be removed if not used
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#005893", //Stadlerblau
      black: "#000000",
      white: "#ffffff",
      darkBlue: "#004170",
      midBlue: "#789AAA",
      brightBlue: "#00B5E2",
      darkGreen: "#728427",
      midGreen: "#A8AD00",
      brightGreen: "#D6E10A",
      /* example: {
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
      }, */
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        stadlergradient:
          "linear-gradient(135deg, #000407 0%, #005994 50.61%, #0181C2 100%);",
        "hero-career": "url('/career1.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
