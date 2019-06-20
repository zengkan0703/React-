const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'index.[contenthash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new BundleAnalyzerPlugin()
  ]
})