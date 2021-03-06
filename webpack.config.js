/**
 * Import dependencies
 */
const auroraWebpackConfig = require('aurora-core/webpack.config.js');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const {
  apiUrl,
  hostname,
  nodeEnv,
} = require('./config');

/**
 * Environment
 */
const isProduction = nodeEnv === 'production';

/**
 * Export a webpack plugin that extends the one from aurora-core
 */
module.exports = Object.assign({}, auroraWebpackConfig, {
  /**
   * Source maps
   */
  devtool: isProduction ? 'cheap-source-map' : 'cheap-module-source-map',

  /**
   * Replace the entry file name
   */
  entry: auroraWebpackConfig.entry.slice().reverse().slice(1).reverse()
  .concat([
    './src/client-bootstrap',
  ]),

  /**
   * Extend the plugin array
   */
  plugins: auroraWebpackConfig.plugins.concat([
    new webpack.DefinePlugin({
      '__DEVELOPMENT__': JSON.stringify(!isProduction),
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
      'process.env.API_URL': JSON.stringify(apiUrl),
      'process.env.HOSTNAME': JSON.stringify(hostname),
    }),
  ]),

  /**
   * Extend the output to make it work with the dev-server
   */
  output: Object.assign({}, auroraWebpackConfig.output, {
    path: path.join(__dirname, '/public/static/'),
    publicPath: '/static/',
  }),

  /**
   * Add resolver aliases that
   * we want to ignore in our
   * webpack bundle
   *
   * NOTE: We just replace any server specific modules with a no-op (from npm)
   */
  resolve: Object.assign({}, auroraWebpackConfig.resolve, {
    alias: Object.assign({}, (auroraWebpackConfig.resolve || {}).alias, {
      'redis': 'no-op',
      'mmdb-reader': 'no-op',
      'big-integer': 'no-op',
    }),
    extensions: ['.js', '.jsx', '.json'],
  }),
});
