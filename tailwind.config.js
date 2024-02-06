/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'FullSize': "100% 100%",
        'FullSize2': "173% 100%"
      },
      backgroundPosition: {
        'Lefttop': "27%"
      }
    },
  },
  plugins: [],
}

