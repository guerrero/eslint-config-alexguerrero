'use strict'

module.exports = {
  rules: {
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', {functions: false}],
  }
}
