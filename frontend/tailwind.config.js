/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      light_purple: '#ddd5ea',
      purple: '#590bd8',
      dark_purple: '#490AB0',
      white: '#ffffff',
      walter_white: '#f5f5f5',
      gray: '#717171',
      light_gray: '#bbbfbf',
      red: '#fe3838',
      black: '#000000',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
