import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#183042",
        mist: "#eef7fb",
        ocean: "#1f7a9a",
        teal: "#168b87",
        skySoft: "#dff1f8"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(24, 48, 66, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
