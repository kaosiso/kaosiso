/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/**/*.{html,js,css,jsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindScrollbar,
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),
  ],
};
