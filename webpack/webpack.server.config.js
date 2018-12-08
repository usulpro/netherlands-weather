const path = require('path');
const {
  module: { rules },
} = require('./webpack.config');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/render.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'client.bundle.js',
    library: 'client',
    libraryTarget: 'umd',
  },
  module: {
    rules,
  },
};
