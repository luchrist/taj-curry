import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#FDF8EC",
        ink: "#1A1A1A",
        body: "#4A4A4A",
        sumi: {
          50: "#F7F7F7",
          100: "#E8E8E8",
          200: "#D4D4D4",
          300: "#A3A3A3",
          400: "#737373",
          500: "#404040",
          600: "#2E2E2E",
          700: "#1F1F1F",
          800: "#171717",
          900: "#0A0A0A"
        },
        sakura: {
          50: "#FFF4EC",
          100: "#FFE4D1",
          200: "#FFC59E",
          300: "#FBA266",
          400: "#F2823B",
          500: "#E0581B",
          600: "#C44712",
          700: "#9E380E",
          800: "#7C2A0B",
          900: "#5A1E07"
        },
        matcha: {
          50: "#FDF6E6",
          100: "#F8E6BD",
          200: "#EFD08A",
          300: "#E2B454",
          400: "#D29830",
          500: "#B47C1F",
          600: "#8E601A",
          700: "#6C4914",
          800: "#4F360E",
          900: "#372508"
        },
        indigo: {
          50: "#FAF1E5",
          100: "#F0DDC1",
          200: "#E1BC8E",
          300: "#CD9858",
          400: "#A87236",
          500: "#7A4B1E",
          600: "#5E3917",
          700: "#492B12",
          800: "#36200E",
          900: "#221409"
        },
        washi: "#F5F0E8",
        card: "#F2EDE5",
        border: "#E3DDD2"
      },
      fontFamily: {
        display: ["var(--font-noto-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
