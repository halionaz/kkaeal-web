import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { globalFontFace } from '@vanilla-extract/css';

const pretendard = 'Pretendard-Regular';

globalFontFace(pretendard, {
  src: 'url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff")',
  fontWeight: 400,
  fontStyle: 'normal',
});

globalStyle('html', {
  fontFamily: pretendard,
});

export const vars = createGlobalTheme(':root', {
  color: {
    main: '#111827',
    white: '#fff',
  },
});
