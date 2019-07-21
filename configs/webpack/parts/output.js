const { resolve } = require('path');

const options = require('../options');

module.exports = {
  output: {
    path: options.dist,
    pathinfo: false,
    jsonpFunction: 'WJ',
    hotUpdateFunction: 'UF',
    filename: `static/${options.hashName}.m.js`,
    publicPath: options.publicPath,
    chunkFilename: `static/${options.hashName}.c.js`,
    sourceMapFilename: '[name].js.map',
    crossOriginLoading: 'anonymous',
  },
}
