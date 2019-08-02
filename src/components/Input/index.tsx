import * as React from 'react';

import { Wrapper, Label, Field, Title } from './styled';

export interface OuterProps {}

const Input: React.FC<OuterProps> = ({ ...props }) => {
  const forwardRef = React.createRef<HTMLInputElement>();

  return (
    <Label>
      <Title>
        Example
      </Title>

      <Wrapper>
        <Field type="text" {...props} ref={forwardRef} />
      </Wrapper>
    </Label>
  );
};

export default Input;
