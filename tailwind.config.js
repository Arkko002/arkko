/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      height: {
        minContent: "min-content",
        maxContent: "max-content",
      },
      width: {
        cardImgW: "90%",
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
};
