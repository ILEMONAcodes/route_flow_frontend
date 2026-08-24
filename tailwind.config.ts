import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F294A", // RouteFlow Dark Blue
          light: "#1E3A6E",
          dark: "#08162B",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#111C2E", // Deep navy for dark mode
        },
        background: {
          light: "#F8FAFC",
          dark: "#0B1320",
        },
        routeText: {
          light: "#0F172A",
          dark: "#F8FAFC",
        },
        routeMuted: {
          light: "#64748B",
          dark: "#94A3B8",
        },
        brandGreen: "#10B981", // Success / online driver indicator
      },
    },
  },
  plugins: [],
};

export default config;