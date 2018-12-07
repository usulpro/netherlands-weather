const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/
      }
    ]
  }
};
