const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: 'index.[hash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true, //gzip 压缩
    host: "0.0.0.0",
    hot: true,
    open: true,
    hotOnly: true,
    progress: true,
    port: 3721,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    })
  ]
})