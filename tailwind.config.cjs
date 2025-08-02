/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #D4AF37, #B76E79)",
      },
    },
  },
  plugins: [],
};
