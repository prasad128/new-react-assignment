module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "9/10": "93%",
      },
      spacing: {
        18: "4.5rem",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["odd", "even"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
