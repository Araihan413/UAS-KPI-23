/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "primer": ["Lora", "serif"],
      "sekunder": ["Yantramanav", "serif"]
    },
    backgroundImage: {
      "wall": "url('/background/bg-wall.svg')",
    }
  },
  plugins: [],
}