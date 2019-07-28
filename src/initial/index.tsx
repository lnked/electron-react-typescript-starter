import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { createHashHistory } from 'history';

import { Loader } from '@/components';

import { HeaderNavigation } from '@/navigations';

import Home from '@/screens/home';

import GlobalStyle from './styled';

const About = React.lazy(() => import(/* webpackChunkName: "about" */ '@/screens/about'));
const NoMatch = React.lazy(() => import(/* webpackChunkName: "nomatch" */ '@/screens/nomatch'));

const history = createHashHistory();

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

    <GlobalStyle />
  </Router>
);

export default hot(App);
