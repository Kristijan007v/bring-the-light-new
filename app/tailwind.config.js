module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Fredoka", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "header-image": "url('../src/img/example03.jpg')",
        "basic-image": "url('../src/img/example03.jpg')",
        "rare-image": "url('../src/img/example04.jpg')",
        "special-image": "url('../src/img/example05.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
