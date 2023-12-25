/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        gray2: "#F2F2F2",
        gray3: "#4F4F4F",
        primary2: "#144E9D",
      },
    },
  },
  plugins: [],
};
