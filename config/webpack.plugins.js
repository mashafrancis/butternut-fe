const dotenv = require('dotenv');

// importing webpack dependencies
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

// instantiating webpack dependencies
const cleanWebpack = new CleanWebpackPlugin();
const htmlWebpack = new htmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
  title: 'Butternut',
  favicon: './public/favicon.png',
  materialIcons: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
});
const miniCssExtract = new miniCssExtractPlugin();
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const hashedPlugin = new webpack.HashedModuleIdsPlugin();

// call dotenv and it will return an Object with a parsed key
// const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

const definePlugin = new webpack.DefinePlugin({
  'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
  'process.env.BUTTERNUT_API': JSON.stringify(process.env.BUTTERNUT_API),
  'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
});

module.exports = {
  cleanWebpack,
  definePlugin,
  htmlWebpack,
  miniCssExtract,
  miniCssExtractPlugin,
  hotModuleReplacementPlugin,
  hashedPlugin,
};
