const { graphql } = require('../webpack/webpack.config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: { parser: 'javascript' },
          },
        ],
        enforce: 'pre',
      },
      {
        test: /\.svg$/,
        loaders: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      },
      graphql,
    ],
  },
};
