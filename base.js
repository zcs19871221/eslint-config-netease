module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        // 尽可能添加尾随逗号
        trailingComma: 'all',
        // 超过了换行显示数
        printWidth: 120,
        // 留白字符
        tabWidth: 2,
      },
      {
        usePrettierrc: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-await-in-loop': 'off',
    'valid-jsdoc': 'error',
    'class-methods-use-this': 'error',
    'consistent-return': 'off',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'no-magic-numbers': [
      'error',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-catch-shadow': 'error',
    'no-mixed-requires': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'args', 'Vue', 'config', 'options'],
      },
    ],
    'require-jsdoc': 'error',
    'require-await': 'error',
    'vars-on-top': 'error',
    'init-declarations': 'off',
    'global-require': ['off', false],
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-sync': 'off',
    'no-bitwise': 'off',
    'no-prototype-builtins': 'error',
    'no-alert': 'error',
    'no-eq-null': 'error',
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-ternary': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: false,
      },
    ],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
  },
};
