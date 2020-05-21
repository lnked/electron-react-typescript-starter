const { resolve } = require('path');
const { parseArguments } = require('./tools/helpers');

const environment = process.env.NODE_ENV || 'development';
const root = resolve(process.cwd());
const options = parseArguments(process.argv);

process.env.NODE_ENV = process.env.BABEL_ENV = environment;

const production = environment === 'production';
const development = environment === 'development';

const destName = 'dest';
const publicName = 'public';
const publicPath = '';
const staticName = 'static';

const hashName = development
  ? '[name]'
  : '[name].[contenthash:4]';

module.exports = {
  root,
  hashName,
  destName,
  staticName,
  publicPath,
  production,
  development,
  environment,
  sourceMap: false,
  release: options.release || options.analyze || false,
  analyze: options.analyze || false,
  compression: options.release || false,
  dest: resolve(root, destName),
  public: resolve(root, publicName),
  staticFolder: staticName,
  staticPath: resolve(destName, staticName),
  sourcePath: resolve(root, 'src'),
  serverPath: resolve(root, 'src/server'),
  cacheDirectory: resolve(root, '.cache'),
}
