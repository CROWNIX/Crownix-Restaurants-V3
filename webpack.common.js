/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ImageminWebpack = require('imagemin-webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Crownix restaurants',
      short_name: 'Crown',
      start_url: './index.html',
      description: 'List Crownix restaurants',
      background_color: '#ffffff',
      theme_color: '#f2f2f2',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('./src/public/images/favicon/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('images/icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve('./src/public/images/favicon/logo.png'),
          sizes: '1024x1024',
          destination: path.join('images/icons', 'maskable'),
          purpose: 'maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
      exclude: [
        /\.png$/,
        /\.webp$/,
        /\.jpg$/,
      ],
    }),
    new ImageminWebpack({
      include: /\.jpg$/,
      name: '[path][name].[ext]',
      imageminOptions: {
        plugins: [
          [
            'mozjpeg',
            {
              progressive: true,
              quality: 50,
            },
          ],
        ],
      },
    }),
    new BundleAnalyzerPlugin(),
  ],
};
