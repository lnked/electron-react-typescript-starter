import * as React from 'react';

import { Label, Field, Checker, Text } from './styled';

export interface OuterProps {
  name?: string;
  value: string | number;
  children?: JSX.Element | JSX.Element[] | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

const Radio: React.FC<OuterProps> = ({ value, children, onChange, ...props }) => {
  const forwardRef = React.createRef<HTMLInputElement>();

  const hangelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e, value.toString());
  }

  return (
    <Label>
      <Field value={value} onChange={hangelChange} type="radio" {...props} ref={forwardRef} />

      <Checker />

      {children && (
        <Text>
          {children}
        </Text>
      )}
    </Label>
  );
};

export default Radio;
