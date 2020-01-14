const dotenv = require('dotenv');

// importing webpack dependencies
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Parses environment variables into a format acceptable by the webpack DefinePlugin
 * @param {object} configs Object literal containing configuration variables to
 * parse before sending them to react
 */
const parseConfigs = configs => Object.keys(configs || {}).reduce(
  (acc, val) => ({ ...acc, [val]: JSON.stringify(configs[val]) }),
  {},
);

// fetch system environment variables
const systemVariables = parseConfigs(process.env);

// fetch environment variables from the dotenv file
const { parsed: dotenvConfigs } = dotenv.config();

// process the environment variables from the dotenv file
const processedDotenvConfigs = parseConfigs(dotenvConfigs);

const definePlugin = new webpack.DefinePlugin({
  'process.env': { ...processedDotenvConfigs, ...systemVariables },
});

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

// const definePlugin = new webpack.DefinePlugin({
//   'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
//   'process.env.BUTTERNUT_API': JSON.stringify(process.env.BUTTERNUT_API),
//   'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
//   'process.env.SASS_PATH': JSON.stringify(process.env.SASS_PATH),
// });

module.exports = {
  cleanWebpack,
  definePlugin,
  htmlWebpack,
  miniCssExtract,
  miniCssExtractPlugin,
  hotModuleReplacementPlugin,
  hashedPlugin,
};
