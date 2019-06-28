const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack'); // access .env variables.
// const webpack = require('webpack'); // to include webpack's built-in plugins.

const config = {
  mode: 'production',     // set mode option, 'development' or 'production'
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8081,
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,      
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(mp4|webm|ogv|png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: './src/favicon.ico'
    }),
    new Dotenv()
    ]
};

module.exports = config
