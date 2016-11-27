'use strict'

module.exports = {
  rules: {
    'no-cond-assign': 'error', // eslint:recommended
    'no-constant-condition': ['error', {checkLoops: false}],
    'no-debugger': 'error', // eslint:recommended
    'no-dupe-args': 'error', // eslint:recommended
    'no-duplicate-case': 'error', // eslint:recommended
    'no-empty-character-class': 'error', // eslint:recommended
    'no-empty': 'error', // eslint:recommended
    'no-ex-assign': 'error', // eslint:recommended
    'no-extra-boolean-cast': 'error', // eslint:recommended
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false
    }],
    'no-extra-semi': 'error', // eslint:recommended
    'no-func-assign': 'error', // eslint:recommended
    'no-inner-declarations': 'error', // eslint:recommended
    'no-invalid-regexp': 'error', // eslint:recommended
    'no-irregular-whitespace': 'error', // eslint:recommended
    'no-obj-calls': 'error', // eslint:recommended
    'no-regex-spaces': 'error', // eslint:recommended
    'no-sparse-arrays': 'error', // eslint:recommended
    'no-unexpected-multiline': 'error', // eslint:recommended
    'no-unreachable': 'error', // eslint:recommended
    'no-unsafe-finally': 'error', // eslint:recommended
    'no-unsafe-negation': 'error', // eslint:recommended
    'use-isnan': 'error', // eslint:recommended
    'valid-typeof': 'error' // eslint:recommended
  }
}
