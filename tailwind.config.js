/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: '#ef7c00',
      secondary: '#ffffff',
      animation: {
        'border': 'border 3s linear infinite',
      },
      keyframes: {
        'border': {
          'to': { '--border-angle': '360deg' },
        }
      },
    },
  },
  plugins: [],
}