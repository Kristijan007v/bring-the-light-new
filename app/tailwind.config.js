module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Fredoka", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "save-ua": "url('/img/header.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
