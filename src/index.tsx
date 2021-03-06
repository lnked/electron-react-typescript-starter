import * as React from 'react';
import * as ReactDom from 'react-dom';

import App from '@/initial';

const renderApp = () => {
  ReactDom.render(<App />, document.getElementById('app-root'));
};

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
