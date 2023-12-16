const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        pink: {
          400: "#DE87A8",
          500: "#DE5C8E",
          550: "#CA4072",
          600: "#DE2F72",
        },
        indigo: {
          950: "#100C42",
          900: "#393570",
        },
        violet: {
          950: "#211664",
        },
      },
      fontFamily: {
        libre: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
        ibm: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
        sans: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
