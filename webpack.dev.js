const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'index.[hash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true, //gzip 压缩
    host: "0.0.0.0",
    open: true,
    progress: true,
    port: 37321,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    })
  ]
})