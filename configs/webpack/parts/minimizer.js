const TerserPlugin = require('terser-webpack-plugin');

const options = require('../options');
const terserOptions = require('../settings/terser-options');

module.exports = () => {
  return [
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      cache: true,
      parallel: true,
      sourceMap: options.sourceMap, // Must be set to true if using source-maps in production
      extractComments: false,
      terserOptions,
    }),
  ]
}
