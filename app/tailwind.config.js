module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Fredoka", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "header-image": "url('/header-min.webp')",
        "header-mobile-image": "url('/example03.webp')",
        "basic-image": "url('/example03.webp')",
        "rare-image": "url('/example04.webp')",
        "special-image": "url('/example05.webp')",
      },
      backdropBlur: {
        custom: "6px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
