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
      graphql,
    ],
  },
};
