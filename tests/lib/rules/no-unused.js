'use strict';

const rule = require('../../../lib/rules/no-unused').noUnused,
  RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    sourceType: 'module',
    project: './tests/tsconfig.json',
  },
});

ruleTester.run('no-unused', rule, {
  valid: [],

  invalid: [
    {
      code: 'const x = {a: 1};',
      errors: [{message: "'a' is never used", type: 'Identifier'}],
      filename: 'tests/file.ts',
    },
  ],
});
