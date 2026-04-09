/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0f172a", // deep slate
        accent: "#22c55e", // neon green skate vibe
      },
    },
  },
  plugins: [],
};
