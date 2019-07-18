const options = require('../options');

module.exports = options.development && {
  devServer: {
    port: 8081,
    hot: true,
    open: false,
    inline: true,
    overlay: true,
    compress: true,
    writeToDisk: true,
    publicPath: '/',
    contentBase: './dist',
    historyApiFallback: true,
    clientLogLevel: 'error',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
}
