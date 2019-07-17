const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = () => {
  return [
    new WebpackCleanupPlugin(),
  ]
}
