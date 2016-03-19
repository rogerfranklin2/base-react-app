var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};
