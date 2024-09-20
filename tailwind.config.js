/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#393e46",
        secondary: "#0d9eff",
        "secondary-hover": "#028ce6",
        tertiary: "#45566d",
        quaternary: "#f1faff",
        footer: "#4f545c",
      },
      width: {
        layout: "1100px",
      },
    },
  },
  plugins: [],
};
