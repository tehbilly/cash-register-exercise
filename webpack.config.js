'use strict';

let webpack = require('webpack');
let path = require('path');

// Webpack plugins
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let HtmlWebpackPlugin = require('html-webpack-plugin');
// let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function() {
  let config = {};

  config.entry = {
    polyfills: path.resolve(__dirname, 'app', 'polyfills.ts'),
    vendor: path.resolve(__dirname, 'app', 'vendor.ts'),
    app: path.resolve(__dirname, 'app', 'main.ts')
  };

  // used when we build things
  // If we get to that point!
  config.output = {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  };

  config.resolve = {
    cache: false,
    root: __dirname,
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.json', '.css', '.html']
  };

  config.module = {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },

      {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=fonts/[name].[ext]?'},

      {test: /\.json$/, loader: 'json'},

      {test: /\.html$/, loader: 'raw'}
    ]
  };

  config.devtool = 'source-map';

  config.devServer = {
    contentBase: path.resolve(__dirname, 'app', 'public'),
    stats: 'normal'
  };

  config.plugins = [
    // Common = better
    new CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),

    // Don't want to manually inject things
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app', 'public', 'index.html'),
      inject: 'body',
      chunksSortMode: htmlPackageSort(['polyfills', 'vendor', 'app'])
    })

    // For copying! use this for actually building if I make it that far
    // new CopyWebpackPlugin([{from: path.resolve(__dirname, 'app')}])
  ];

  config.debug = true;

  return config;
}();

// used to make sure files are loaded properly
function htmlPackageSort(packages) {
  // let packages = ['polyfills', 'vendor', 'app']
  let len = packages.length - 1;
  let first = packages[0];
  let last = packages[len];
  return function sort(a, b) {
    // polyfills always first
    if (a.names[0] === first) {
      return -1;
    }
    // main always last
    if (a.names[0] === last) {
      return 1;
    }
    // vendor before app
    if (a.names[0] !== first && b.names[0] === last) {
      return -1;
    } else {
      return 1;
    }
  }
}
