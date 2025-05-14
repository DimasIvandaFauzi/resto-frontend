/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['"DM Sans"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
       colors: {
        'primary': '#e29b77',
        'secondary': '#f5d2c1',
        'surface-primary':'#121212',
        'surface-secondary':'#282828',
      },
    },
  },
  plugins: [],
}
