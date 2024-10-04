/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '425px',
      },
      colors: {
        zinc: {
          300: '#d1d5db',
          400: '#a1a1aa',
        },
        gray: {
          800: '#1f2937',
        },
        red: {
          500: '#ef4444',
        },
        green: {
          500: '#22c55e',
        },
      },
    },
  },
  plugins: [],
}
