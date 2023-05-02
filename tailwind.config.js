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
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
