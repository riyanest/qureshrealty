import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#061735",
          deep: "#030d1e",
          card: "#0b2247",
          hover: "#123061",
        },
        gold: {
          DEFAULT: "#d7a936",
          light: "#f3c85a",
          dark: "#b8861d",
        },
        cream: "#fbf8f0",
        ink: "#18243a",
        muted: "#667085",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
