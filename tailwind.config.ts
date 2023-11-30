/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";

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
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-supernought)']
      // },
    },
    
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
