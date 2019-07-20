import * as React from 'react';

import { Navigation, Hamburger, List, ListItem, Link } from './styled';

const HeaderNavigation = () => (
  <Navigation>
    <List>
      <ListItem>
        <Link exact to="/" activeClassName="active">Home</Link>
      </ListItem>

      <ListItem>
        <Link to="/about" activeClassName="active">About</Link>
      </ListItem>
    </List>

    <Hamburger />
  </Navigation>
);

export default HeaderNavigation
