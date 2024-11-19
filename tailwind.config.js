/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#21a663',
          light: '#2cbd71',
          dark: '#198f54',
        },
        background: {
          DEFAULT: '#003d07',
          light: '#002b05',
          dark: '#004f09',
        },
        accent: {
          DEFAULT: '#fffb00',
          light: '#fffc33',
          dark: '#e6e200',
        },
        secondary: {
          DEFAULT: '#b6f7bc',
          light: '#c4f9c9',
          dark: '#a3f5aa',
        },
        text: {
          DEFAULT: '#ecf3f0',
          dark: '#d9e8e3',
        },
      },
    },
  },
  plugins: [],
};