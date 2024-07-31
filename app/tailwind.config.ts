import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        "dark-blue": "var(--dark-blue)",
        "light-blue": "var(--light-blue)",
        "slightly-darker-blue": "var(--slightly-darker-blue)",
        "green": "#489B2B"
      },
    },
  },
  plugins: [],
};
export default config;
