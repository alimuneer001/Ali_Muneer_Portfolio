export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./public/scripts/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#0D0D0D",
          dark: "#141414",
          gray: "#7A7A7A",
          light: "#F8F9FA",
          border: "#E5E5E5",
        },
      },
    },
  },
};
