'use strict'
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: ['./client/src'],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/public'),
    pathInfo: true,
    publicPath: '/topics/public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        exclude: '/node_modules',
        include: __dirname
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/js'], {
      verbose: true
    })
  ]
}
