const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '380px',
        'sm-plus': '390px',
        'md-plus': '414px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            darkBackground: '#161616',
            darkTextColor: '#ffffff',
            navHoverColor: '#86A6F6',
          },
        },
        light: {
          colors: {
            lightBackground: '#ffffff',
            lightTextColor: 'black',
            navHoverColor: '#86A6F6',
            primary: '#86A6F6',
            menuBackgroundColor: '#F4F4F4',
          },
        },
      },
    }),
  ],
};
