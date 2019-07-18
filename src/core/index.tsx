import * as React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { createHashHistory } from 'history';

const history = createHashHistory();

import Home from '@/screens/home';

export const About = React.lazy(() => import(
  /* webpackChunkName: "about" */
  '@/screens/about'
));

export const NoMatch = React.lazy(() => import(
  /* webpackChunkName: "nomatch" */
  '@/screens/nomatch'
));

const App = () => (
  <Router history={history}>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>

    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" render={(props: any) => <Home {...props} />} />
        <Route
          exact
          path={'/about'}
          render={(props: any) => <About {...props} />}
        />
        <Route path="*" render={(props: any) => <NoMatch {...props} />} exact />
      </Switch>
    </React.Suspense>
  </Router>
);

export default hot(App);
