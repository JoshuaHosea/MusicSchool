/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7c3aed',
            800: '#6b21a8',
            900: '#581c87',
          },
        },
        animation: {
          'bounce-slow': 'bounce 3s infinite',
          'pulse-slow': 'pulse 3s infinite',
          'float': 'float 2s ease-out forwards',
        },
        keyframes: {
          float: {
            '0%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
            '100%': {
              opacity: '0',
              transform: 'translateY(-30px)',
            },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  }