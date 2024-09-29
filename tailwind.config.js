/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        first: "url('./src/img/first.jpg')",
        scrol: "url('./src/img/scrol.jpg')",
      },
    },
  },
  plugins: [],
});
