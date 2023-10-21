/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    colors: {
      'primary': '#1d4ed8',
      'black': '#1e293b',
      'blue': {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd'
      },
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#eeeeee',
      'white': '#fff',
      'emerald': {
        50: '#F9FAFB',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7'
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

