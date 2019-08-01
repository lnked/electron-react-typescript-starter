import * as React from 'react';

import { Section } from './styled';

interface RadioPropsInternal {
  name?: string;
  value?: string;
  checked?: boolean;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

export interface OuterProps {
  name: string;
  checked?: string | number;
  children?: React.ReactNode | React.ReactNode[];
}

const RadioGroup: React.FC<OuterProps> = ({ name, children, checked, ...props }) => {
  const [value, handleChange] = React.useState(checked);

  const items = React.Children.map(children, (radio: any): JSX.Element => {
    const isChecked = value === radio.props.value.toString();

    return React.cloneElement<RadioPropsInternal>(radio, {
      name,
      checked: isChecked,
      onChange: (_, value) => handleChange(value),
    })
  });

  return (
    <Section {...props}>
      <div>value: {value}</div>
      {items}
    </Section>
  );
};

export default RadioGroup;
