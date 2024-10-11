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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          a0: 'var(--primary-a0)',
          a10: 'var(--primary-a10)',
          a20: 'var(--primary-a20)',
          a30: 'var(--primary-a30)',
          a40: 'var(--primary-a40)',
          a50: 'var(--primary-a50)',
        },
        surface: {
          a0: 'var(--surface-a0)',
          a10: 'var(--surface-a10)',
          a20: 'var(--surface-a20)',
          a30: 'var(--surface-a30)',
          a40: 'var(--surface-a40)',
          a50: 'var(--surface-a50)',
        },
        dark: {
          default: '#121212',  // Dark Gray Background
          ltGray: '#E0E0E0',    // Light Gray Text
          mdGray: '#B0B0B0',   // Medium Gray for secondary text
          blueAcc: '#1E88E5',     // Blue Accent
          greenAcc: '#43A047',    // Green Accent
          redAcc: '#E53935',      // Red Accent
          drkGray: '#333333', // Darker Gray for borders
          muted: '#757575',     // Muted Text
        },
      },
    },
  },
  plugins: [],
};
export default config;
