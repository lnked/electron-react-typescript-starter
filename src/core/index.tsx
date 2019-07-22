import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Global } from '@emotion/core';
import { hot } from 'react-hot-loader/root';
import { createHashHistory } from 'history';

const history = createHashHistory();

import { Loader } from '@components';

import { HeaderNavigation } from '@navigations';

import Home from '@screens/home';

import GlobalStyle from './styles';

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
    <HeaderNavigation />

    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" render={(props: any) => <Home {...props} />} />
        <Route
          path={'/about'}
          render={(props: any) => <About {...props} />}
        />
        <Route path="*" render={(props: any) => <NoMatch {...props} />} />
      </Switch>
    </React.Suspense>

    <Global styles={GlobalStyle} />
  </Router>
);

export default hot(App);
