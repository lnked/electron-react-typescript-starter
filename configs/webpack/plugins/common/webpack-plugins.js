const webpack = require('webpack');

const options = require('../../options');

const environment = require('../../tools/env').config
const formatter = require('../../tools/formatter').formatter

module.exports = () => {
  return [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      process: Object.assign({
        env: Object.assign(formatter(environment, true), {
          BROWSER: true,
          NODE_ENV: JSON.stringify(options.environment),
          BABEL_ENV: JSON.stringify(options.environment),
        }),
        nextTick: function(callback) {
          if (typeof callback !== 'function') {
            console.trace(typeof callback + ' is not a function');
          }

          return process.nextTick.apply(process, arguments);
        },
        __DEV__: options.development,
        __PROD__: options.production,
      }),
    }),
  ]
}
