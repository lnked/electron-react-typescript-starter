const webpackMerge = require('webpack-merge');

const mode = require('../parts/mode');
const node = require('../parts/node');
const entry = require('../parts/entry');
const stats = require('../parts/stats');
const target = require('../parts/target');
const output = require('../parts/output');
const devtool = require('../parts/devtool');
const resolve = require('../parts/resolve');
const modules = require('../parts/module');
const externals = require('../parts/externals');

const plugins = require('../plugins/common');

module.exports = webpackMerge(
  mode,
  node,
  stats,
  entry,
  target,
  devtool,
  modules,
  output,
  plugins,
  resolve,
  externals,
);
