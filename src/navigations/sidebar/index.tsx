import * as React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarNavigation = () => (
  <nav>
    <ul style={{ margin: 0, padding: 0, listStyleType: 'none' }}>
      <li style={{ display: 'inline-block', marginRight: 15 }}>
        <NavLink exact to="/" activeStyle={{ color: 'red' }}>Home</NavLink>
      </li>

      <li style={{ display: 'inline-block', marginRight: 15 }}>
        <NavLink to="/about" activeStyle={{ color: 'red' }}>About</NavLink>
      </li>
    </ul>
  </nav>
);

export default sidebarNavigation;
