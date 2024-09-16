/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        navLinks: ["Oswald", 'sans-serif'],
        submission: ['Poppins', 'sans-serif'],
      },
      textShadow: {
        textLg: ["2px 2px 6px rgba(0, 0, 0, 0.6)"],
        textMd: ["1px 1px 4px rgba(0, 0, 0, 0.5)"],
      },
    },
  },
  plugins: [],
}
