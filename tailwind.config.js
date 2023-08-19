/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: "4rem",
        h2: "3rem",
        h3: "2rem",
        h4: "1.5rem",
        h5: "1.25rem",
      },
    },
  },
  plugins: [],
}
