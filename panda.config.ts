import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          main: { value: '#111827' },
          white: { value: '#fff' },
        },
      },
    },
  },
  globalFontface: {
    Pretendard: {
      src: 'url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css") format("font-woff2")',
      fontWeight: 400,
      fontStyle: 'normal',
    },
  },
  globalCss: {
    html: {
      fontFamily: 'Pretendard',
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
