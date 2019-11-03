import * as React from 'react';

import { Label, Checkbox, Toggler, Button } from './styled';

export interface OuterProps {}

const Switcher: React.FC<OuterProps> = ({ ...props } = {}) => {
  return (
    <Label {...props}>
      <Checkbox type="checkbox" />

      <Toggler>
        <Button />
      </Toggler>
    </Label>
  );
};

export default Switcher;
