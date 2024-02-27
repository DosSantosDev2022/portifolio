import type { Config } from 'tailwindcss'
import { blackA } from '@radix-ui/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { blackA },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-animated')],
}
export default config
