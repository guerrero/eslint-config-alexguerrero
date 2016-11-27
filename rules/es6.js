'use strict'

module.exports = {
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {before: true, after: true}],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {before: true, after: false}],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', {before: true, after: false}],

    'no-dupe-keys': 'error', // eslint:recommended
    'no-case-declarations': 'error', // eslint:recommended
    'no-template-curly-in-string': 'error',
    'no-empty-pattern': 'error', // eslint:recommended
    'class-methods-use-this': 'error',
    'no-return-await': 'error',
  }
}
