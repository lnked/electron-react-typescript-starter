import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Layout } from './styled';

export interface OuterProps extends RouteComponentProps {}

const Home: React.FC<OuterProps> = ({ ...props }) => {
  return (
    <Layout {...props}>
      Home
    </Layout>
  );
};

export default Home;
