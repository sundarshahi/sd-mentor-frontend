/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust depending on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#f43f5e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
