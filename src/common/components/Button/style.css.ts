import { vars } from '@/app.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  padding: '0.5rem 0.75rem',
  backgroundColor: vars.color.main,
  color: vars.color.white,
  borderRadius: '0.375rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  display: 'flex',
  alignItems: 'center',
});
