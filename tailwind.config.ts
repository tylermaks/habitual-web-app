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
        'forest-green': '#228B22',
        'sky-blue': '#87CEEB',
        'golden-yellow': '#FFD700',
        'brick-red': '#B22222',
        'royal-purple': '#6A5ACD',
        'off-white': '#F5F5F5',
        'slate-gray': '#708090',
        'neon-pink': '#FF69B4',
        'electric-cyan': '#00FFFF',
        'deep-gray': '#2E2E2E'
      },
    },
  },
  plugins: [],
};
export default config;
