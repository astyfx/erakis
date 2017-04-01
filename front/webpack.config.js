const webpack = require('webpack')
const path = require('path')

const entry = process.env.NODE_ENV === 'production' ? [
  'babel-polyfill',
  './src/index'
] : [
  'react-hot-loader/patch',
  'babel-polyfill',
  './src/index'
]

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': entry
  },
  output: {
    path: path.resolve(__dirname, '../main/static'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
