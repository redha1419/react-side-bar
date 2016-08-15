
// import WebpackDevServer from 'webpack-dev-server'
var webpack = require('webpack');

var config = {
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config