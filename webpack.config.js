const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Graph App',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
  mode: 'none',
}
