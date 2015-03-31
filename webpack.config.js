var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./app/Application/index.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
          { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
          { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
      ]
    },
    plugins: [
          new ExtractTextPlugin("[name].css")
      ]
};