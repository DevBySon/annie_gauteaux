import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        sideways: "sideways 60s linear infinite",
      },
      keyframes: {
        sideways: {
          from: {
            'transform': 'translateY(0) rotate(0deg)',
            'opacity': '1',
            'border-radius': '20%',
          },
          to: {
            'transform': 'translateY(-100%) rotate(720deg)',
            'opacity': '0.1',
            'border-radius': '50%',
          },
        },
      }
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
    "prettier-plugin-tailwindcss",
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            "text-shadow": (value: string) => ({
              textShadow: value,
            }),
          },
          { values: theme("textShadow") },
      );
    }),
    // ...
  ],
}
export default config
