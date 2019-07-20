const { resolve } = require('path');

const { root, sourcePath } = require('../options');

const duplicates = {
  lodash: resolve(root, 'node_modules/lodash'),
  warning: resolve(root, 'node_modules/warning'),
  'react-is': resolve(root, 'node_modules/react-is'),
  'immutable': resolve(root, 'node_modules/immutable'),
  'rc-trigger': resolve(root, 'node_modules/rc-trigger'),
  'rc-animate': resolve(root, 'node_modules/rc-animate'),
  'create-react-context': resolve(root, 'node_modules/create-react-context'),
  'hoist-non-react-statics': resolve(root, 'node_modules/hoist-non-react-statics'),
  '@babel/runtime': resolve(root, 'node_modules/@babel/runtime'),
  '@emotion/serialize': resolve(root, 'node_modules/@emotion/serialize'),
  'react-dom': '@hot-loader/react-dom',
};

const noParse = {
  '@app': resolve(sourcePath, 'app'),
  '@i18n': resolve(sourcePath, 'i18n'),
  '@core': resolve(sourcePath, 'core'),
  '@store': resolve(sourcePath, 'store'),
  '@theme': resolve(sourcePath, 'theme'),
  '@utils': resolve(sourcePath, 'utils'),
  '@assets': resolve(sourcePath, 'assets'),
  '@screens': resolve(sourcePath, 'screens'),
  '@helpers': resolve(sourcePath, 'helpers'),
  '@services': resolve(sourcePath, 'services'),
  '@settings': resolve(sourcePath, 'settings'),
  '@components': resolve(sourcePath, 'components'),
  '@navigations': resolve(sourcePath, 'navigations'),
};

module.exports = {
  ...noParse,
  ...duplicates,
  '@': sourcePath,
};
