const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = [
  merge(common.libConfig, {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, common.DIST)
    },
    mode: 'development'
  }),
  
  merge(common.appConfig, {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, common.DIST)
    },
    mode: 'development'
  })
];