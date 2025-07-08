import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
});

export const Title = style({
  fontSize: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
