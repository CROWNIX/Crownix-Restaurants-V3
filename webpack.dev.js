// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, 'dist'),
  },
});
