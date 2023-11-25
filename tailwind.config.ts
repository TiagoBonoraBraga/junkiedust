<<<<<<< HEAD
// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     screens: {
//       ss: { max: '1030px'},
//       s:  '820px',
//       sm: '640px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1280px',
//     },
//     colors: {
//       black:{
//         500: '#000000',
//       },
//       white: {
//         500: '#ffffff',
//       },
//       purple: {
//         500: '#800080'
//       },
//       blue: {
//         100: '#6274e5',
//         200: '#4a64d2',
//         300: '#3155c0',
//         400: '#1945ad',
//         500: '#00359a',
//       },
    
//     },
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
// export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
};

=======
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      ss: { max: '1030px'},
      s:  '820px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      black:{
        500: '#000000',
      },
      white: {
        500: '#ffffff',
      },
      purple: {
        500: '#800080'
      },
      blue: {
        100: '#6274e5',
        200: '#4a64d2',
        300: '#3155c0',
        400: '#1945ad',
        500: '#00359a',
      },
    
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
>>>>>>> 434c1bc9a8f3f3f9d60c497df5d621381ddeb1fd
