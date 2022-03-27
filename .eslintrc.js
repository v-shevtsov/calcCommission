module.exports = {
  env: {
    node: true,
    browser: false,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        js: 'always',
      },
    ],
  },
};
