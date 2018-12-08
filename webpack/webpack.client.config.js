const path = require('path');
const {
  module: { rules },
} = require('./webpack.config');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'client.bundle.js',
  },
  module: {
    rules,
  },
};
