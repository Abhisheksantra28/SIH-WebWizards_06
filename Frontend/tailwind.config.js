/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#010851",
        "secondary":"#9A7AF1",
        "tartiary":"#707070",
        "pink":"#EE9AE5"
      },
      boxShadow: {
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.15)',
      },
   
    },

    screens:{
      "ss":"525px",
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}