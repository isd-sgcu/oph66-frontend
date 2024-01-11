const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

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
        red: {
          400: "#F55572",
        },
      },
      fontFamily: {
        libre: ["LibreBaskerville", ...defaultTheme.fontFamily.serif],
        ibm: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
        sans: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) =>
      addUtilities({
        ".radial-gradient-hero": {
          background:
            "radial-gradient(98.25% 94.81% at 50% 5.3%, #100C42 0%, #393570 20.46%, #CA4072 48.07%, #DE5C8E 70.46%, #DE87A8 100%)",
        },
      })
    ),
    addDynamicIconSelectors({
      iconSets: {
        custom: "./src/assets/icons/custom.json",
      },
    }),
  ],
};
