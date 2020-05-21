const { resolve } = require('path');

const { dest, staticName, hashName, publicPath } = require('../options');

module.exports = {
  output: {
    path: dest,
    pathinfo: false,
    jsonpFunction: 'WJ',
    hotUpdateFunction: 'UF',
    filename: `${staticName}/${hashName}.m.js`,
    publicPath: publicPath,
    chunkFilename: `${staticName}/${hashName}.c.js`,
    sourceMapFilename: '[name].js.map',
    crossOriginLoading: 'anonymous',
  },
}
