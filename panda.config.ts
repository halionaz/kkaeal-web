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
          bg: { black: { value: '#101010' }, gray: { value: '#303030' } },
          white: { value: '#ffffff' },
          lightGray: { value: '#CCC' },
        },
      },
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
