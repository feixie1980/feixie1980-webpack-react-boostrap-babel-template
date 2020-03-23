const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  merge(common.libConfig, {
    devtool: 'source-map',
    mode: 'production'
  }),
  merge(common.appConfig, {
    devtool: 'source-map',
    mode: 'production'
  })
];