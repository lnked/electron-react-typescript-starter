import * as React from 'react';

import { Button as Btn } from './styled';

export interface OuterProps {
  type?: 'button' | 'submit';
}

const Button: React.FC<OuterProps> = ({ type, ...props } = {}) => {
  return (
    <Btn type={type} {...props} />
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
