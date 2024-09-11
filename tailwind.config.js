/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Playwrite CU', 'sans-serif'],
        // Puedes añadir más opciones si lo deseas
      },
      colors: {
        azulito: {
          DEFAULT: '#47CACC', // El valor hexadecimal del azulito
        },
      },
    },
  },
  plugins: [],
}