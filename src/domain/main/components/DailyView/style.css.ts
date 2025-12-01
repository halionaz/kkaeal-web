import { css } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  height: '100%',
});

export const Header = css({
  flexShrink: 0,
});

export const List = css({
  display: 'flex',
  flexDir: 'column',
  flexGrow: 1,
});

export const Form = css({
  flexShrink: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
});

export const FormContainer = css({
  bgColor: 'bg.gray',
  padding: '1rem',
  rounded: '0.5rem',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDir: 'column',
  '& input': {
    alignSelf: 'stretch',
    border: 'none',
    outline: 'none',
    padding: '0.5rem',
  },
  '& button': {
    alignSelf: 'flex-end',
  },
});
