import { css } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export const Header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '3rem',
  color: 'white',
});

export const Title = css({
  color: 'lightGray',
  fontSize: '1.5rem',
  fontWeight: 700,
});
