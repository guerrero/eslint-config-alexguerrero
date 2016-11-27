'use strict'

module.exports = {
  rules: {
    'callback-return': 'error',
    'handle-callback-err': ['error', '^(err|error)$'],
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-sync': 'error',
  }
}
