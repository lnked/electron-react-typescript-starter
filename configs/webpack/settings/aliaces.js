const { resolve } = require('path');

const { root, sourcePath } = require('../options');

const duplicates = {
  lodash: resolve(root, 'node_modules/lodash'),
  warning: resolve(root, 'node_modules/warning'),
  'react-is': resolve(root, 'node_modules/react-is'),
  'immutable': resolve(root, 'node_modules/immutable'),
  'rc-trigger': resolve(root, 'node_modules/rc-trigger'),
  'rc-animate': resolve(root, 'node_modules/rc-animate'),
  'inspectpack': resolve(root, 'node_modules/inspectpack'),
  'create-react-context': resolve(root, 'node_modules/create-react-context'),
  'hoist-non-react-statics': resolve(root, 'node_modules/hoist-non-react-statics'),
  'react-dom': '@hot-loader/react-dom',
  // '@babel/runtime': resolve(root, 'node_modules/@babel/runtime'),
  // '@emotion/serialize': resolve(root, 'node_modules/@emotion/serialize'),
  // 'history': 'node_modules/history',
  // 'value-equal': 'node_modules/value-equal',
};

const noParse = {
  '@': sourcePath,
};

module.exports = {
  ...noParse,
  ...duplicates,
};
