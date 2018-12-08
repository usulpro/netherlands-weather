const path = require('path');

const graphql = {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: 'graphql-tag/loader',
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      graphql,
    ],
  },
  graphql,
};
