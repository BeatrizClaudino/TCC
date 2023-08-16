/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //NÃO FUNCIONOU
          gradiente: "bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-[#CE44D1]"
      },
      spacing: {
        'space-between': 'space-between',
      }
    },
  },
  variants: {},
  plugins: [],

}