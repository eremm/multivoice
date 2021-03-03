const webpackConfig = require('./webpack-config');
const path = require('path');

module.exports = {
  ...webpackConfig,
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, '/'),
    publicPath: '/',
    filename: 'orderFormInvoicer.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 9001,
    publicPath: 'http://localhost:9001/',
    hotOnly: true
  },
  devtool: 'inline-source-map',
}