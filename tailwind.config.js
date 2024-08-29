/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        homeBackground: '#2c2c2c',
        orangeContrast: '#ec8800',
        littleGray: '#474747',
        midNightBlue: '#14213d',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 1s ease-out forwards',
      },
    },
    screens: {
      ssm: { max: "479px" },
        // =>	@media (min-width: 479px) { ... }

      sm: { max: "639px" },
        // =>	@media (min-width: 640px) { ... }
      
      md: { max: "767px" },
        // => @media (min-width: 768px) { ... } 
      
      lg: { max: "1024px" },
        // =>	@media (min-width: 1024px) { ... }
      
      xl: { max: "1280px" },
        // =>	@media (min-width: 1280px) { ... }

      "2xl": { max: "1535px" },
        // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

