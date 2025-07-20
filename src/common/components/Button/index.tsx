import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as s from './style.css';

interface Props extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}
const Button = ({ children, ...props }: Props) => {
  return (
    <button className={s.Container} {...props}>
      {children}
    </button>
  );
};
export default Button;
