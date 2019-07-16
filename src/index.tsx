import * as React from 'react';
import * as ReactDom from 'react-dom';
import { setConfig } from 'react-hot-loader';

import { environment } from './settings';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

ReactDom.render(
  <div>
    React App
  </div>,
  document.getElementById('app-root')
);

if (environment.development && module.hot) {
  module.hot.accept();
}

if (environment.development) {
  ReactEmitter();
}
