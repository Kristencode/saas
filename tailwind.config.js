 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Example custom font
      },
    },
  },
  plugins: [],
}