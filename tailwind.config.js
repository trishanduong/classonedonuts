/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['CabinetGrotesk-Variable', 'sans-serif'],
      },
      colors: {
        'pblue': '#b8dee6ff',
        'pbrown': '#b99169ff',
        'dbrown': '#7d5c3bff',

        'ppink': '#f6d6d8ff',
        'dpink': '#E89BA2',
        'xdpink': '#D95963',

        'beige-white':'#F9F5F1',
      },
    },
  },
  plugins: [],
}

