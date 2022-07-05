/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,php}", "./parts/**/*.{html,php}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "600px",
        md: "782px",
        lg: "960px",
        xl: "1080px",
        "2xl": "1280px",
        "3xl": "1440px",
      },
    },
  },
  plugins: [],
};
