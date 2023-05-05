/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        discordGrey: {
          light:"#424549",
          std: "#36393e",
          dark: "#282b30",
          darker:"#1e2124",
        },
      },
      boxShadow: {
        innerWeaker: 'inset 0 0 10px rgba(0, 0, 0, 0.2)',
        innerStrong: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
        innerStronger: 'inset 0 0 10px rgba(0, 0, 0, 1)',
        strong: '0px 6px 6px 4px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)',
        stronger: '0px 6px 10px 8px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)',
        strongXl: '0 25px 50px -12px rgba(0, 0, 0, 2)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
