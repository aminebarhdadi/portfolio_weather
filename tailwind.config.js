/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require("@iconify/tailwind")


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/flyonui/dist/js/*.js',
    "./src/*.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      padding: '1rem',
    },
  },
  plugins: [
    require('flyonui'),
    require('flyonui/plugin'),
    addDynamicIconSelectors()
  ],
  flyonui: {
    themes: [{
      light: {
        ...require("flyonui/src/theming/themes")["light"],
        primary: "#b40000",
        secondary: "#2F4154",
      },
      
    }]
  }
};
