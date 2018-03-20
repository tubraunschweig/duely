const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const clientConfig = require('./webpack.client.config')();

const serverConfig = {
  'context': path.resolve(__dirname, 'server'),

  'entry': {
    'app': './app.ts'
  },

  'output': {
    'path': path.resolve(__dirname, 'dist/server'),
    'filename': '[name].js'
  },

  'devtool': 'source-map',

  'resolve': {
    'modules': ['../node_modules'],
    'extensions': ['.ts', '.js']
  },

  'target': 'node',

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
      }
    ])
  ]
}

module.exports = [serverConfig, clientConfig];
