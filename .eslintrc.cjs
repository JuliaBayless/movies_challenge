// Matches .cjs, .mjs, .js, .jsx
const JS_FILES = '**/*.?([cm])js?(x)';

// Matches .cts, .mts, .ts, .tsx
const TS_FILES = '**/*.?([cm])ts?(x)';

const globalRuleOverrides = {
  'operator-linebreak': 'off',
  'implicit-arrow-linebreak': 'off',

  // https://eslint.org/docs/latest/rules/max-len
  'max-len': [
    'error',
    {
      code: 120,
      // ignores lines that contain a URL
      ignoreUrls: true,
      // ignores all trailing comments and comments on their own line
      ignoreComments: true,
      // ignores lines that contain a RegExp literal
      ignoreRegExpLiterals: true,
    },
  ],

  // We can either use this or 'require-await', but if we use both, they will conflict if an async
  // function has just a single async call, and the result of the promise is what is returned.
  // https://eslint.org/docs/latest/rules/return-await
  'return-await': 'off',

  'import/prefer-default-export': 'off',

  // Disable import rules that can cause perf issues, and are already covered by tsc
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/Troubleshooting.md
  'import/default': 'off',
  'import/named': 'off',
  'import/namespace': 'off',
  'import/no-named-as-default-member': 'off',

  // The following rules do not have equivalent checks in TypeScript, so we recommend that you only
  // run them at CI/push time, to lessen the local performance burden.
  // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/Troubleshooting.md
  // TODO: could wire these up to run via lint-staged or in ci
  'import/no-named-as-default': 'off',
  'import/no-cycle': 'off',
  'import/no-unused-modules': 'off',
  'import/no-deprecated': 'off',
};

/** @type { import('eslint').ESLint.BaseConfig } */
const eslint = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: ['build/', 'coverage/'],
  rules: {
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', {
      code: 120,
    }],
    'no-console': [2],
  },
  overrides: [
    {
      /** Javascript Overrides */
      extends: ['plugin:react/recommended', 'airbnb'],
      files: [JS_FILES],
      rules: {
        ...globalRuleOverrides,
      },
    },
    {
      /** Typescript Overrides */
      extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript'],
      parserOptions: {
        project: './tsconfig.json',
      },
      files: [TS_FILES],
      rules: {
        ...globalRuleOverrides,

        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
};

module.exports = eslint;
