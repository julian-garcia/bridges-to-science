/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,php}", "./parts/**/*.{html,php}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["serif"],
    },
    extend: {
      screens: {
        "2xs": "380px",
        xs: "480px",
        sm: "600px",
        md: "782px",
        lg: "960px",
        xl: "1080px",
        "2xl": "1280px",
        "3xl": "1440px",
      },
      colors: {
        primary: "#55BBD4",
        "primary-dark": "#427C90",
        title: "#427C90",
        "accent-fresh-green": "#8AD260",
        "accent-sun-yellow": "#FAE052",
        "accent-amber": "#EFD029",
        "accent-spartan-gray": "#666666",
        "accent-bubblegum": "#DF65B2",
        "accent-shade-red": "#BD0000",
        "accent-mango": "#EF9C4C",
        "accent-red": "#EA3328",
      },
      fontFamily: {
        main: ["Spartan", "sans-serif"],
      },
      maxWidth: {
        limit: "1200px",
      },
      flexBasis: {
        fit: "fit-content",
      },
    },
  },
  plugins: [],
  safelist: [
    "!inline-flex",
    "hide-mobile",
    "show-mobile",
    "hide-to-large",
    "show-to-large",
  ],
};
