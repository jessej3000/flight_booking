var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './jsx/index.jsx',
  output: {
    path: __dirname,
    filename: '../../../go/src/actelligent/htdocs/env/default/js/bookinglist.js'
  },
  watch: true,
  module:{
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['es2015','react']
        }
      }
    ]
  },
};

