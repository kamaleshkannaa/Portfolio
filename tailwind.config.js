/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        darkBg: '#0b1121',
        darkCard: '#151e32',
        accentBlue: '#00f0ff',
        accentPurple: '#8a2be2',
        accentTeal: '#00ffcc',
      }
    },
  },
  plugins: [],
}

