const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/render.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'client.bundle.js',
    library: 'client',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }
    ]
  }
};
