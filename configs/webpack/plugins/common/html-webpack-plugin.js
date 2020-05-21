const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { configs } = require('../../settings/html-minify')
const { root, production } = require('../../options')

const options =
  production
  ? { hash: false,
      cache: true,
      inject: true,
      compile: false,
      preload: ['**/*.js'],
      prefetch: ['**/*.js'],
      chunksSortMode: 'dependency',
      production: production,
      minify: {
        ...configs,
      },
    }
  : { minify: false }

module.exports = () => {
  return [
    new HtmlWebpackPlugin({
      title: 'Kenguru',
      inject: true,
      filename: 'index.html',
      template: resolve(root, 'public/index.html'),
      description: 'Kenguru shopping',
      PUBLIC_URL: '',
      ...options
    }),
  ]
}
