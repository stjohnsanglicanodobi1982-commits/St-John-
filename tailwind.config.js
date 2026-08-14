/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        anglican: {
          blue: '#1B365D', // Royal Anglican Navy Blue
          'blue-dark': '#0F2342', // Deep Navy
          'blue-light': '#2B5084', // Slate Blue
          'blue-subtle': '#EEF4FC', // Light blue background tint
          gold: '#D4AF37', // Warm Regal Gold
          'gold-dark': '#B8860B', // Deep Gold
          'gold-light': '#F3E5AB', // Soft Gold
          'gold-subtle': '#FFFBEB', // Very light gold background tint
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
