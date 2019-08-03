import * as React from 'react';

import { OuterProps } from './types';
import { Button as StyledButton } from './styled';

const Button: React.FC<OuterProps> = ({ type, ...props } = {}) => {
  return (
    <StyledButton type={type} {...props} />
  );
};

Button.defaultProps = {
  type: 'button',
  success: false,
  primary: false,
  warning: false,
  danger: false,
};

export default Button;
