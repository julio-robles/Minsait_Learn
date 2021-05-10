const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './index.html'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/app.bundle.js',
  },
  devServer: {
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /.(jpg|jpeg|png|svg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/app.bundle.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './imgs/', to: 'assets' },
      ],
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: ['popper.js', 'default']
    })
  ],
};