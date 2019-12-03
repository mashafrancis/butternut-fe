const cssNano = require('cssnano');
const merge = require('webpack-merge');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  output: {
    filename: '[name].min.js'
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new uglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new optimizeCSSAssetsPlugin({
        cssProcessor: cssNano,
        cssProcessorOptions: {
          reduceIdents: false,
        },
      })
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
});
