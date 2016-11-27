'use strict'

module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/jsx.js',
    './rules/node.js',
    './rules/promise.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js'
  ].map(require.resolve)
}
