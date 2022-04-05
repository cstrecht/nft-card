module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      "soft-blue": "#8bacda",
      "main-bg": "#0d192b",
      "card-bg": "#14253d",
      "card-line": "#2f415b",
      white: "#ffffff",
      cyan: "#00fff7",
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
