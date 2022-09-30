/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
        pop: ['Poppins'],
        noto: ['Noto Sans'],
      },
      boxShadow: {
        '3xl': '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
    }
  },
  plugins: [],
}
