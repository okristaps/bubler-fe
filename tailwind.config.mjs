/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "lofi", "cyberpunk"],
  },
  theme: {
    extend: {
      fontFamily: {
        fuzzy: ["var(--font-fuzzy-bubbles)", "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography"), require("daisyui")],
};
