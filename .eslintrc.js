module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'parser': 'babel-eslint',
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parserOptions': {
    'sourceType': 'module',
  },
  'settings': {
    'react': {
      'createClass': 'createReactClass',

      'pragma': 'React',
      'version': 'detect',

      'flowVersion': '0.53'
    },
    'propWrapperFunctions': [
      'forbidExtraProps',
      {'property': 'freeze', 'object': 'Object'},
      {'property': 'myFavoriteWrapper'}
    ],
    'linkComponents': [
      'Hyperlink',
      {'name': 'Link', 'linkAttribute': 'to'}
    ]
  },
  'rules': {
    'react/prop-types': 0,
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'indent': [
      'error',
      2,
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-unused-vars': [
      'warn',
    ],
    'no-console': 0
  },
};