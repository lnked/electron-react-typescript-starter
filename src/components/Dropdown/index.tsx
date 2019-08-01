import * as React from 'react';

import { Spinner } from './styled';

export interface OuterProps {}

const Dropdown: React.FC<OuterProps> = ({ ...props } = {}) => {
  return (
    <Spinner {...props} />
  );
};

export default Dropdown;
