import type { Config } from "tailwindcss";
import { fontFamily, screens } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ...screens,
    },
    extend: {
      fontFamily: {
        texto: ["var(--font-geist-sans)", ...fontFamily.sans],
        codigo: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
