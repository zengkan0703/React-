const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'sass-loader',
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'file-loader'
        ]
      },
      {
        test: /.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'babel-loader'
        ]
      }
    ]
  }
};