const WebpackPlugins = require('./webpack-plugins');
const WebpackChunkHash = require('./webpack-chunk-hash');
const CompressionPlugin = require('./compression-webpack-plugin');
const WebpackCleanupPlugin = require('./webpack-cleanup-plugin');
const WorkboxWebpackPlugin = require('./workbox-webpack-plugin');
const BundleAnalyzerPlugin = require('./webpack-bundle-analyzer');
const ImageminWebpackPlugin = require('./imagemin-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('./script-ext-html-webpack-plugin');

module.exports = {
  plugins: [
    ...WebpackPlugins(),
    ...WebpackCleanupPlugin(),
    ...WebpackChunkHash(),
    ...ScriptExtHtmlWebpackPlugin(),
    ...WorkboxWebpackPlugin(),
    ...ImageminWebpackPlugin(),
    ...CompressionPlugin(),
    ...BundleAnalyzerPlugin(),
  ].filter(Boolean),
};
