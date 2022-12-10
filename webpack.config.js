var webpack = require('webpack');
var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: ['babel-polyfill', SRC_DIR + '/app/index.js'],
  output: {
    path: DIST_DIR + '/app',
    // filename: 'bundle.js',
    filename: '[name].[contenthash].js',
    // publicPath: '/app/',
    // publicPath: '/',
  },
  devtool: 'inline-source-map',
  // mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    disableHostCheck: true,
    stats: 'errors-only',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  node: { fs: 'empty' },
  externals: [
    {
      xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}',
    },
  ],
  module: {
    rules: [
      {
        test: /\.js?/,
        // include: SRC_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader'], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      {
        test: /\.css$/i,
        loader: 'style-loader!css-loader?modules',
        // use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: './src/app/images/BPDAlogo_sm.ico',
      template: './src/index.html',
    }),
  ],
};

module.exports = config;
