/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        textPrimary: "#04d7ab",
        hoverColor: "rgb(64, 215, 171, 0.1)",

        bodyColor: "#1b1b1a",
        textAmber: "#f59e0b",
        textGreen: "#04d6aa",
        textTeal: "#14b8a6",
        textCyan: "#06b6d4",
        textSky: "#0ea5e9",
        textBlue: "#3b82f6",
        textIndigo: "#6366f1",
        textViolet: "#8b5cf6",
        textPurple: "#a855f7",
        textPink: "#ec4899",
        textRose: "#f43f5e",
        textLight: "#ffff",
        textGray: "#bdbdbd",
        textDark: "#8892b0",

        hoverColor2: "#04d7ab",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
