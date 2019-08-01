import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Layout } from './styled';
import {
  Button,
  ButtonGroup,
  Checkbox,
  // Dropdown,
  Input,
  // Loader,
  Pagination,
  Radio,
  RadioGroup,
  // Switcher,
  // Toast,
  // Toggle,
} from '@/components';

export interface OuterProps extends RouteComponentProps {}

const About: React.FC<OuterProps> = ({ ...props }) => {
  return (
    <Layout {...props}>
      <Input />

      <ButtonGroup>
        <Button>Test button</Button>
        <Button type="submit">Submit button</Button>
        <Button type="button">Default button</Button>
      </ButtonGroup>

      <Checkbox />

      {/* <Dropdown /> */}

      {/* <Loader /> */}

      <Pagination
        page={1}
        limit={10}
        total={100}
        onClick={(page: number) => alert(page)}
      />

      <RadioGroup checked={2} name="test">
        <Radio value={1} />
        <Radio value={2} />
        <Radio value={3} />
      </RadioGroup>

      {/* <Switcher /> */}

      {/* <Toast /> */}

      {/* <Toggle /> */}
    </Layout>
  );
};


export default About;
