const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  overrides: [
    ...eslint.react.overrides,
    {
      extends: [
        'plugin:@next/next/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended'
      ],
      plugins: ['@next/eslint-plugin-next'],
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
