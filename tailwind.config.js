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
          accent: "#000",
          neutral: "#000",
          "base-100": "#FFFFFF"
        }
      },
      {
        dark: {
          "base-100": "#131516",
          accent: "#FFFFFF"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
