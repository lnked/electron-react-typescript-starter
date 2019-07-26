import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface OuterProps extends RouteComponentProps {
  match: any;
};

const NoMatch: React.FC<OuterProps> = ({ match, ...props }) => (
  <div>
    Error Page {JSON.stringify(match)}
  </div>
);

export default NoMatch;
