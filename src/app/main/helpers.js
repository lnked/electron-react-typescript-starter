import isDev from 'electron-is-dev';

if (!isDev) {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}
