import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Layout, Box } from './styled';
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
  Switcher,
  // Toast,
  // Toggle,
} from '@/components';

export interface OuterProps extends RouteComponentProps {}

const About: React.FC<OuterProps> = ({ ...props }) => {
  const [page, setPage] = React.useState(1);

  return (
    <Layout {...props}>
      <Box>
        <Input />
      </Box>

      <Box>
        <ButtonGroup>
          <Button>Success button</Button>
          <Button success>Success button</Button>
          <Button primary>Primary button</Button>
          <Button danger>Danger button</Button>
          <Button warning>Warning button</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Checkbox />

        <Checkbox>
          Checkbox with label
        </Checkbox>
      </Box>

      {/* <Dropdown /> */}

      {/* <Loader /> */}

      <Box>
        <Pagination
          page={page}
          limit={10}
          total={100}
          onClick={(page: number) => setPage(page)}
        />
      </Box>

      <Box>
        <RadioGroup checked={2} name="test">
          <Radio value={1} />
          <Radio value={2} />
          <Radio value={3} />
        </RadioGroup>
      </Box>

      <Box>
        <Radio name="test2" value={1}>
          Radio with label
        </Radio>
      </Box>

      <Box>
        <Switcher />
      </Box>

      {/* <Toast /> */}

      {/* <Toggle /> */}
    </Layout>
  );
};

export default About;
