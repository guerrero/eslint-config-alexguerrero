'use strict'

module.exports = {
  plugins: [
    'promise'
  ],
  rules: {
    'promise/catch-or-return': 'error',
    'promise/always-return': 'error',
    'promise/param-names': 'error',
  }
}
