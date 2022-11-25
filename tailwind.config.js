const { neutral } = require('daisyui/src/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        recycleHubTheme: {
          primary: "#ff5200",
          secondary: "#ddd",
          accent: "rgb(229 231 235)",
          neutral: "#000",
          info: "#b5b5b5b5",
          "base-100": "#FFFFFF"
        }
      },
      {
        dark: {
          "base-100": "#131516",
          accent: "rgb(31 41 55)",
          info: "rgb(31 41 55)",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
