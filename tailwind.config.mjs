import { addDynamicIconSelectors } from "@iconify/tailwind";
import tailwindAnimate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        libre: ["LibreBaskerville", ...defaultTheme.fontFamily.serif],
        ibm: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
        sans: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    tailwindAnimate,
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
