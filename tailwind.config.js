const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/**/*.{js,ts,jsx,tsx}',
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
        'x-sm-plus': '630px',
        'sm-x': '740px',
        'md-plus': '850px',
        'md-x': '1065px',
        'lg-x': '1275px',
        'lg-img': '1365px',
        'lg': '1440px',
        'xl-x': '1460px',
        'lg-plus': '1600px',
        'xl-plus': '1700px',
        'full': '1920px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            darkBackground: '#0D0D0D',
            darkTextColor: '#ffffff',
            navHoverColor: '#86A6F6',
            primary: '#86A6F6',
            secondary: '#6490FF',
            background: '#161616',
            foreground: '#ffffff',
            menuBackgroundColor: '#2D2D2D',
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