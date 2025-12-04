import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme' // <--- 1. Import default theme

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // 2. Add fallback fonts after your variable
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        'archivo-black': [
          'var(--font-archivo-black)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
export default config