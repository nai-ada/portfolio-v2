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
          },
        },
      },
    }),
  ],
};
