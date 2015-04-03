var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
          { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
          { test: /\.sass/, loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'sass?indentedSyntax'
                ) }
      ]
    },
    plugins: [
          new ExtractTextPlugin("main.css")
      ]
};