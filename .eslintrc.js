const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  extends: ['eslint-config-airbnb', 'plugin:jest/recommended', 'prettier'],
  plugins: ['prettier', 'jest', 'json','graphql'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  rules: {
    'no-console': ignore,
    'jest/no-disabled-tests': ignore,
    'import/no-extraneous-dependencies': ignore,
    'import/prefer-default-export': ignore,
    'prettier/prettier': [
      warn,
      {
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    "graphql/template-strings": [error, {
      env: 'apollo',
      validators: 'all',
      // TODO: Import schema
      // Import your schema JSON here
      // schemaJson: require('./schema.json'),

      // OR provide absolute path to your schema JSON
      // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),

      // OR provide the schema in the Schema Language format
      // schemaString: printSchema(schema),

      tagName: 'gql'
    }]
  }
};
