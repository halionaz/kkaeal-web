import { style } from '@vanilla-extract/css';

export const Container = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
});

export const Wrapper = style({
  width: '100%',
  maxWidth: '550px',
});
