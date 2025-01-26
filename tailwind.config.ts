import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(auth)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(auth)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/error.tsx",
    "./src/app/not-found.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "#eee",
        white: "#ffffff",
        mutedText: "#525d73",
        accentGreen: "#02983e",
        severe: "#e5372b",
        down: "#ff9500",
        ok: "#02983e",
        lightPurple: "#f2edff",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "0.938rem",
        lg: "1.5rem",
        xl: "1.7rem",
      },
      spacing: {
        "4.7rem": "4.7rem",
        "1.7rem": "1.7rem",
        "13.5rem": "13.5rem",
        "8rem": "8rem",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "0.8rem",
        xl: "0.938rem",
        full: "50%",
      },
      boxShadow: {
        sidebar:
          "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 7.5px 0 rgba(0, 0, 0, 0.19)",
      },
      lineHeight: {
        normal: "normal",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
