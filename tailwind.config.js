/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',

  theme: {
    extend: {
      screens:{
        "other": {'min': '340px', 'max': '1280px'}
      },
      colors:{
        darkbg: "#1E293B",
        blue : {
          850: "#7dd3fc"
        }
        }
      
    },
  },
  plugins: [],
}

