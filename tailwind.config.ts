import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStopPositions: {
        50: '50%',
      }
    },
  },
  plugins: [],
} satisfies Config;
