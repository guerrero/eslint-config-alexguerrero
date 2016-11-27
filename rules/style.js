'use strict'

module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'camelcase': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration'],
    'indent': ['error', 2],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],
    'keyword-spacing': ['error', {before: true, after: true}],
    'linebreak-style': ['error', 'unix'],
    'max-depth': ['error', 4],
    'max-len': ['error', 86, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'max-lines': ['error', {
      max: 512,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-nested-callbacks': ['error', 2],
    'max-params': ['error', 3],
    'max-statements-per-line': ['error', {max: 1}],
    'multiline-ternary': ['error', 'never'],
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      properties: true
    }],
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'], // eslint:recommended
    'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true
    }],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed', {unnecessary: false, numbers: true}],
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'semi': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
  }
}
