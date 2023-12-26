/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-section': "url('/src/assets/4249454.jpg')" 
      }
    },
  },
  plugins: [],
}

