/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '.src/pages/**/*.{js,ts,jsx,tsx}',
    '.src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        sm: '640px', // Small screens (default)
        md: '768px', // Medium screens (this is where the layout changes)
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
        '2xl': '1536px', // 2X extra large screens
      },
    },
    colors: {
      transparent: 'transparent',
      body: '#030E28',
      nav: '#2379BD',
      dropdown: '#030e2880',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      grid: '#1e1e1e66',
      cell: '#F2F2F21A',
      red: {
        500: '#ef4444',
      },
      orange: {
        500: '#f97316',
      },
      green: {
        500: '#22c55e',
      },
    },
  },
  plugins: [],
}
