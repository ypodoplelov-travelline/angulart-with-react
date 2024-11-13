import type { Config } from 'tailwindcss'
import{ fontFamily } from "tailwindcss/defaultTheme"
import { colors } from './colors'

const config: Config = {
  darkMode: ["class"],
  content: ["**/*.{ts,tsx}"],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: colors,
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-in-out',
        fadeOut: 'fadeOut .5s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
