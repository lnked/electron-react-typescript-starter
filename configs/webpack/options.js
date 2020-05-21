const { resolve } = require('path');
const { parseArguments } = require('./tools/helpers');

const environment = process.env.NODE_ENV || 'development';
const root = resolve(process.cwd());
const options = parseArguments(process.argv);

process.env.NODE_ENV = process.env.BABEL_ENV = environment;

const production = environment === 'production';
const development = environment === 'development';

const publicPath = '';

const hashName = development
  ? '[name]'
  : '[name].[contenthash:4]';

module.exports = {
  root,
  hashName,
  publicPath,
  production,
  development,
  environment,
  sourceMap: false,
  release: options.release || options.analyze || false,
  analyze: options.analyze || false,
  compression: options.release || false,
  dest: resolve(root, 'dest'),
  public: resolve(root, 'public'),
  sourcePath: resolve(root, 'src'),
  serverPath: resolve(root, 'src/server'),
  cacheDirectory: resolve(root, '.cache'),
}
