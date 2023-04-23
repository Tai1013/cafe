/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  safelist: [],
  theme: {
    extend: {},
    colors: {
      paimary: '#C16500',
      secondary: '#191414',
      ...colors
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      }
    }
  },
  plugins: []
}
