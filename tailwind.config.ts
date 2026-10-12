import type { Config } from "tailwindcss";

/**
 * One fixed light palette. Unlike the 88win5.tw code base this site has no
 * theme switcher — it is an information/verification site, and a single
 * calm palette reads as more trustworthy than a choice of four.
 *
 * `brand` is the 88WIN blue used across the platform; `ink` is the navy used
 * for the header, headings and body copy. Status colours (verified / warning)
 * use Tailwind's built-in emerald / amber / red scales.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e8fe",
          200: "#b4d1fc",
          300: "#7cb2fb",
          400: "#4a92f4",
          500: "#2f7fed",
          600: "#1c63d6",
          700: "#1a4fad",
          800: "#1b438a",
          900: "#1b3a70",
        },
        ink: {
          50: "#f6f8fc",
          100: "#eef2f8",
          200: "#dfe6f0",
          300: "#c3cedd",
          400: "#8e9bb0",
          500: "#64728a",
          600: "#46536b",
          700: "#2f3b52",
          800: "#1a2744",
          900: "#0d1a38",
          950: "#071229",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "PingFang TC",
          "Microsoft JhengHei",
          "Noto Sans TC",
          "Hiragino Sans CNS",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1160px",
        prose: "760px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(13, 26, 56, 0.06), 0 8px 24px -16px rgba(13, 26, 56, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
