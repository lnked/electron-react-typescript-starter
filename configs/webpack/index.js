const webpackMerge = require('webpack-merge')

const { environment } = require('./options')

const common = require('./environments/common.config.js')
const configs = require(`./environments/${environment}.config.js`)

module.exports = webpackMerge(
  common,
  configs,
)
