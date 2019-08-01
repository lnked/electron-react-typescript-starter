import * as React from 'react';

import { Section } from './styled';

export interface OuterProps {
  children?: JSX.Element | JSX.Element[] | string;
}

const ButtonGroup: React.FC<OuterProps> = ({ children, ...props } = {}) => {
  return (
    <Section {...props}>
      {children}
    </Section>
  );
};

export default ButtonGroup;
