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
        'sm-plus': '500px',
        'sm-x': '740px',
        'md-plus': '850px',
        'md-x': '1065px',
        'lg-x': '1275px',
        'xl-x': '1460px',
        'lg-plus': '1600px',
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
            // Add NextUI semantic colors for dark theme
            primary: '#86A6F6',
            secondary: '#6490FF',
            background: '#161616', // your dark mode background
            foreground: '#ffffff', // your dark mode text color
            menuBackgroundColor: '#2D2D2D', // darker version for dark mode
          },
        },
        light: {
          colors: {
            lightBackground: '#ffffff',
            lightTextColor: 'black',
            navHoverColor: '#86A6F6',
            primary: '#86A6F6',
            menuBackgroundColor: '#F4F4F4',
            secondary: '#6490FF',
          },
        },
      },
    }),
  ],
};