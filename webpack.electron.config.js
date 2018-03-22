const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const clientConfig = require('./webpack.client.config')(true);

const electronConfig = {
  'context': path.resolve(__dirname, 'electron'),

  'entry': {
    'index': './main.ts'
  },

  'output': {
    'path': path.resolve(__dirname, 'dist/electron'),
    'filename': '[name].js'
  },

  'devtool': 'source-map',

  'resolve': {
    'modules': ['../node_modules'],
    'extensions': ['.ts', '.js']
  },

  'target': 'electron',

  'node': {
    '__dirname': false,
    '__filename': false
  },

  'module': {
    'loaders': [
      {
        'test': /\.ts$/,
        'loaders': ['awesome-typescript-loader']
      }
    ]
  },

  'plugins': [
    new CopyWebpackPlugin([
      {
        'from': 'package.json'
      },
      {
        'from': 'manifest.json'
      },
      {
        'from': path.resolve(__dirname, 'LICENSE')
      }
    ])
  ]
}

module.exports = [electronConfig, clientConfig];
