import * as React from 'react';

import { routes } from './routes'
import { Navigation, Hamburger, List, ListItem, Link } from './styled';

const HeaderNavigation = () => (
  <Navigation>
    <List>
      {routes.map(({ path, name, ...extraProps }) => (
        <ListItem>
          <Link to={path} activeClassName="active" {...extraProps}>{name}</Link>
        </ListItem>
      ))}
    </List>

    <Hamburger />
  </Navigation>
);

export default HeaderNavigation
