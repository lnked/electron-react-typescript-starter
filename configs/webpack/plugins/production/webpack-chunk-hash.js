const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = () => {
  return [
    new WebpackChunkHash({
      algorithm: 'md5',
    }),
  ]
}
