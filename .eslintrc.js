module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-native',
    'prettier',
    '@typescript-eslint',
    'react-hooks',
  ],

  rules: {
    'prettier/prettier': [
      0,
      {
        semi: false,
        bracketSpacing: false,
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    semi: 0,
    eqeqeq: [1, 'always'],
    quotes: [1, 'single'],
    'jsx-quotes': [2, 'prefer-double'],
    'no-undef': 0,
    'no-console': 1,
    'no-control-regex': 0,
    'no-void': 0,
    'global-require': 0,

    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': 1,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-duplicates': 0,
    'import/newline-after-import': 1,
    'import/no-named-as-default-member': 0,
    'import/namespace': 0,
    'import/named': 0,
    'import/order': 1,
    'import/no-mutable-exports': 0,
    'import/no-named-default': 0,

    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'ignore',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-spacing': 0,
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-no-bind': 0,
    'react/require-default-props': 0,
    'react/display-name': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'react/state-in-constructor': 0,
    'react/sort-comp': 0,
    'react/jsx-fragments': 0,
    'react/no-did-update-set-state': 0,
    'react/no-array-index-key': 0,

    'react-native/no-unused-styles': 2,

    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-angle-bracket-type-assertion': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 1,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-floating-promises': [1, { ignoreVoid: true }],

    'react-hooks/rules-of-hooks': 'error',

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
  },
}
