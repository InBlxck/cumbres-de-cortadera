/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070D17",
        card: "#0C1526",
        copper: "#B65A22",
        teal: "#1FA7A6",
        muted: "#9AA4B2",
        brand: "#1F4ED8"
      },
    },
  },
  plugins: [],
};
