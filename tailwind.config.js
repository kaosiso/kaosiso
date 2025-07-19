/** @type {import('tailwindcss').Config} */
export default {
  // Use export default for ES modules in Vite
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This is crucial for React components
  ],
  theme: {
    extend: {
      keyframes: {
        sparkFadeOut: {
          "0%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0) translateY(-50px)",
          },
        },
      },
      animation: {
        spark: "sparkFadeOut 0.6s forwards ease-out",
      },
    },
  },
  plugins: [],
};
