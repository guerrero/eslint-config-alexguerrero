'use strict'

module.exports = {
  rules: {
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': ['error', 5],
    'consistent-return': 'error',
    'curly': ['error', 'multi', 'consistent'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    'no-caller': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': ['error', {commentPattern: 'break[\\s\\w]*omitted'}],
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-invalid-this': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal': 'error', // eslint:recommended
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error', // eslint:recommended
    'no-return-assign': 'error',
    'no-self-assign': 'error', // eslint:recommended
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    // 'no-unused-labels' implicit by `no-labels`
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'wrap-iife': 'error',
    'yoda': 'error'
  }
}
