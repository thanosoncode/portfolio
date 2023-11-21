import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        appGreen: {
          400: "#23C69A",
        },
        appBlue: {
          400: "#495BEE",
        },
        appPurple: {
          400: "#C19AF8",
        },
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "background-color": "var(--background-color)",
      },
    },
  },
  plugins: [],
};
export default config;
