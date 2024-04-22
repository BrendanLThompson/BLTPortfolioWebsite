/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#acd7ec",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        blue: "#ACD7EC",
        blue2: "#00B5B8",
        blue3: "#96D7EC",
        blue4: "#048BA8",
        blue5: "#386FA4",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/topography.svg')",
      },
    },
  },
  plugins: [],
};
