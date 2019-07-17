const file = require('../loaders/file-loader');
const cache = require('../loaders/cache-loader');
const options = require('../options');

const use = [
  cache()
];

if (options.production) {
  use.push(file({ prefix: 'configs' }))
}

module.exports = () => {
  return [
    {
      test: /\.json$/,
      type: 'javascript/auto',
      exclude: /(node_modules)/,
      use,
    },
  ];
};
