const { eslint } = require('@vladislaw9/eslint');

module.exports = {
  ...eslint.react,
  overrides: [
      ...eslint.react.overrides,
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      extends: [
        'plugin:@next/next/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended'
      ],
      plugins: ['@next/eslint-plugin-next'],
      settings: {
        atomPostfix: ''
      },
      parserOptions: {
        tsconfigRootDir: __dirname
      },
      rules: {
        "@typescript-eslint/no-misused-promises": "off"
      }
    }
  ]
};
