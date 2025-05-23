import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: "wave 2.5s infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(18deg)" },
          "20%": { transform: "rotate(-10deg)" },
          "30%": { transform: "rotate(18deg)" },
          "40%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(14deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      colors: {
        primary: "#f3bc2b",
        secondary: "#00d4ff",
      },
    },
  },
  plugins: [],
};
export default config;
