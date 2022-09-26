const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      fonts: {
        sans: ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      colors: {
        neutral: {
          DEFAULT: '#F4F3F1',
          50: '#FDFDFC',
          100: '#F4F3F1',
          200: '#DBD8D2',
          300: '#C3BDB2',
          400: '#AAA293',
          500: '#918773',
          600: '#736A5A',
          700: '#534D41',
          800: '#343029',
          900: '#141310',
        },
        blue: {
          DEFAULT: '#1F2630',
          50: '#B3BECE',
          100: '#A7B4C6',
          200: '#8E9EB6',
          300: '#7589A6',
          400: '#5F7593',
          500: '#4F617A',
          600: '#3F4D62',
          700: '#2F3A49',
          800: '#1F2630',
          900: '#090B0E',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addVariant }) => addVariant('children', '& > *')),
  ],
};
