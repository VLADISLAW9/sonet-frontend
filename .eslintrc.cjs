const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  overrides: [
    ...eslint.react.overrides,
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      settings: {
        atomPostfix: ''
      },
      parserOptions: {
        tsconfigRootDir: __dirname
      }
    }
  ]
};