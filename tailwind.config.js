const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    // minHeight: {
    //   '0': '0',
    //   '11': '2.75rem',
    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //   'full': '100%',
    //  },
    colors: {
      red: {
        // darkest: '#1f2d3d',
        // dark: '#8B0021',
        DEFAULT: '#F53838',
        light: '#F53855',
        lightest: '#FFDCDD',
      },
      grey: {
        DEFAULT: '#878787',
        lightest: '#BBB',
        light: '#E6E6E6',
        dark: '#F6F6F6',
        darkest: '#DDDDDD',
      },
      white: {
        DEFAULT: '#fff',
        light: '#E5E5E5',
      },
      blue: {
        DEFAULT: '#0B132A',
        light: '#4F5665',
      }
    },
    screens: {
      'sm': '640px',
      'md': '900px',
      // 'lg': '1024px',
      'lg': '1024px',
      'xl': '1250px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'sans': ['Rubik','Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  // variants: {
  //   extend: {

  //   },
  // },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
