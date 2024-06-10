import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': {
          DEFAULT: "#6EC94A",
          dark: "#5AB536",
        },
        'secondary': {
          DEFAULT: "#A89DE2",
          dark: "#291D62",
        },
        'accent': {
          DEFAULT: "#D067CF",
          dark: "#982F96",
        },
        'background': {
          DEFAULT: "#F9FCF8",
          dark: "#040703",
        },
        'text': {
          DEFAULT: "#091306",
          dark: "#EFF9EC",
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
