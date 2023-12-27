/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-section': "url('/src/assets/4249454.jpg')",
        'hero-section': "url('/src/assets/sportsman-running-dark-smoke.jpg')",
        'service': "url('/src/assets/71cpVJRK8JL.jpg')",
        'service1': "url('/src/assets/neon-sign-with-no-pain-no-gain-motivation-phrase-blowing-in-red-in-a-white-brick-wall-pixelme-photography.jpg')"
      }
    },
  },
  plugins: [],
}

