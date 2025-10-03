/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets 'Inter' as the default font for the app
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}