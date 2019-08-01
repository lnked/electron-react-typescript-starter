const { resolve } = require('path');
const { sourcePath } = require('../options');

module.exports = {
  context: sourcePath,
  entry: {
    app: [
      'core-js', resolve(sourcePath, 'index.tsx'),
    ],
  },
}
