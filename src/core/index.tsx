import * as React from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { createHashHistory } from 'history';

const history = createHashHistory();

import Home from '@screens/home';

export const About = React.lazy(() => import(
  /* webpackChunkName: "about" */
  '@screens/about'
));

export const NoMatch = React.lazy(() => import(
  /* webpackChunkName: "nomatch" */
  '@screens/nomatch'
));

const App = () => (
  <Router history={history}>
    <nav>
      <ul style={{ margin: 0, padding: 0, listStyleType: 'none' }}>
        <li style={{ display: "inline-block", marginRight: 15 }}><NavLink exact to="/" activeStyle={{ color: 'red' }}>Home</NavLink></li>
        <li style={{ display: "inline-block", marginRight: 15 }}><NavLink to="/about" activeStyle={{ color: 'red' }}>About</NavLink></li>
      </ul>
    </nav>

    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" render={(props: any) => <Home {...props} />} />
        <Route
          path={'/about'}
          render={(props: any) => <About {...props} />}
        />
        <Route path="*" render={(props: any) => <NoMatch {...props} />} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default hot(App);
