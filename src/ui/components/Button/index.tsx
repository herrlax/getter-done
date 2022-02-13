import React from 'react';
import colors from '../Colors';
import { BUTTON } from './styles';

export type ButtonVariant = 'primary' | 'secondary';

type Props = {
  variant?: ButtonVariant;
};

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'secondary',
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      css={BUTTON(colors, variant, disabled)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
