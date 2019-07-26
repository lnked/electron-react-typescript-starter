import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Layout } from './styled';
import { Loader } from '@/components';

export interface OuterProps extends RouteComponentProps {}

const About: React.FC<OuterProps> = ({ ...props } = {}) => {
  return (
    <Layout>
      About
      <Loader />
    </Layout>
  );
};

export default About;
