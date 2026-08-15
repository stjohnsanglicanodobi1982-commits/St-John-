/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anglican: {
          blue: '#1B365D', // Royal Anglican Blue
          'blue-dark': '#0F2342',
          'blue-light': '#2B5084',
          'blue-subtle': '#EEF4FC',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
