const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/'
        }
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'public/'),
      '@src': path.resolve(__dirname, 'src/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      'react-dom': '@hot-loader/react-dom',
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: './',
    filename: 'orderFormInvoicer.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      hash: true,
      filename: './index.html',
      template: './src/index.html.ejs',
      // favicon: './public/favicon.ico'
    })
  ]
}
