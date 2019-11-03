import * as React from 'react';

import { Label, Field, Checker, Text } from './styled';

export interface OuterProps {
  children?: JSX.Element | JSX.Element[] | string;
}

const Checkbox: React.FC<OuterProps> = ({ children, ...props } = {}) => {
  const forwardRef = React.createRef<HTMLInputElement>();

  return (
    <Label>
      <Field type="checkbox" ref={forwardRef} {...props} />

      <Checker />

      {children && (
        <Text>
          {children}
        </Text>
      )}
    </Label>
  );
};

export default Checkbox;
