module.exports = {
    entry: "./app/Application/index.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
          { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
        {
        test: /\.sass$/,
        loader: "style!css!sass?indentedSyntax"
      }
      ]
    }
};