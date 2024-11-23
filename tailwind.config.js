/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/**/**/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maskImage: {
          'gradient-to-bottom': 'linear-gradient(to bottom, black, black, black, black, black, transparent)',
        },
      },
      fontFamily: {
        onest: ['var(--onestSans-font)'],
        notoNaskhArabic: ['var(--notoNaskhArabic-font)'],
        sacramento: ['var(--sacramento-font)'],
        cedarvilleCursive: ['var(--cedarvilleCursive-font)'],
        josefinSans: ['var(--josefinSans-font)'],
        emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  // daisyui: {
  //   themes: [
  //     "dark"
  //   ]
  // },
  daisyui: {
    themes: [
      // "dark",
      {
        dark: {
          primary: '#65c3c8',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          // neutral: '#291334',
          'base-100': '#161614',
          'base-200': '#171717',
          'base-300': '#818286',
        }
      },
    ],
  },
};
