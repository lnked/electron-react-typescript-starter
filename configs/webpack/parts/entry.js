const { resolve } = require('path');
const { sourcePath } = require('../options');

module.exports = {
  context: sourcePath,
  entry: resolve(sourcePath, 'index.tsx'),
}
