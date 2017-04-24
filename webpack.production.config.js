'use strict'
const config = require('./webpack.config.js')
const webpack = require('webpack')

config.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'moment': 'moment',
  'moment-timezone': 'moment',
}

config.devtool = 'cheap-source-map'
config.debug = false

config.plugins.push(new webpack.optimize.DedupePlugin())
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compressor: {
    warnings: false
  },
  comments: false
}))

module.exports = config
