import * as React from 'react';

import { Field } from './styled';

export interface OuterProps {}

const Checkbox: React.FC<OuterProps> = ({ ...props }) => {
  const forwardRef = React.createRef<HTMLInputElement>();

  return (
    <Field type="checkbox" ref={forwardRef} {...props} />
  );
};

export default Checkbox;
