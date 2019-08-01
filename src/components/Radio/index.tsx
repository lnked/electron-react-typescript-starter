import * as React from 'react';

import { Field } from './styled';

export interface OuterProps {
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

const Radio: React.FC<OuterProps> = ({ value, onChange, ...props }) => {
  const forwardRef = React.createRef<HTMLInputElement>();

  const hangelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e, value.toString());
  }

  return (
    <Field {...props} value={value} onChange={hangelChange} type="radio" ref={forwardRef} />
  );
};

export default Radio;
