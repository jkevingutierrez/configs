import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const languageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    project: true,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    ...globals.browser,
  },
};

export const plugins = {
  '@typescript-eslint': tseslint.plugin,
  import: importPlugin,
  'no-relative-import-paths': noRelativeImportPaths,
  '@stylistic': stylistic,
};

export const rules = {
  ...eslint.configs.recommended.rules,

  // Most of the rules were turned off because they were generating a bunch of
  // errors.
  '@stylistic/indent-binary-ops': 'off',
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-dynamic-delete': 'off',
  '@typescript-eslint/no-misused-spread': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-unnecessary-condition': 'off',
  '@typescript-eslint/no-unnecessary-type-parameters': 'off',
  '@typescript-eslint/prefer-literal-enum-member': 'off',
  '@typescript-eslint/prefer-promise-reject-errors': 'off',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',

  'func-call-spacing': 'off',

  '@stylistic/arrow-parens': ['error', 'always'],
  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/comma-spacing': 'error',
  '@stylistic/func-call-spacing': 'error',
  '@stylistic/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: ['class', 'function', 'switch', 'interface', 'type'],
    },
  ],
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  '@stylistic/quote-props': ['error', 'as-needed'],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/space-before-blocks': 'error',

  '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
    },
  ],
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-use-before-define': ['warn', { functions: false }],
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: true,
      ignoreVoidReturningFunctions: true,
    },
  ],
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-unnecessary-template-expression': 'error',
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: false,
    },
  ],
  '@typescript-eslint/restrict-plus-operands': [
    'error',
    {
      allowAny: true,
    },
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
    },
  ],
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      minimumDescriptionLength: 3,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  '@typescript-eslint/prefer-nullish-coalescing': [
    'off',
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true,
      ignorePrimitives: true,
    },
  ],

  'array-bracket-spacing': ['error', 'never'],
  'array-callback-return': ['error', { allowImplicit: true }],
  'block-spacing': 'error',
  'brace-style': 'error',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-style': 'error',
  'computed-property-spacing': 'error',
  'constructor-super': 'error',
  curly: ['error', 'multi-line'],
  'arrow-parens': ['error', 'always'],
  'eol-last': 'error',
  eqeqeq: 'error',
  'generator-star-spacing': ['error', 'after'],
  'key-spacing': 'error',
  'linebreak-style': 'error',
  'max-classes-per-file': 'error',
  'max-params': ['error', 3],
  'new-parens': 'error',
  'no-array-constructor': 'error',
  'no-caller': 'error',
  'no-cond-assign': 'error',
  'no-debugger': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-empty': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-fallthrough': 'error',
  'no-invalid-this': 'error',
  'no-irregular-whitespace': 'error',
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-multiple-empty-lines': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-param-reassign': 'error',
  'no-redeclare': 'off',
  'no-return-await': 'error',
  'no-tabs': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-trailing-spaces': 'error',
  'no-undef-init': 'error',
  'no-undef': 'off',
  'no-unsafe-finally': 'error',
  'no-unused-labels': 'error',
  'no-unused-vars': 'off',
  'no-var': 'error',
  'no-with': 'error',
  'object-curly-spacing': ['error', 'always'],
  'object-shorthand': 'error',
  'one-var': ['error', 'never'],
  'padded-blocks': ['error', 'never'],
  'prefer-const': 'error',
  'prefer-promise-reject-errors': 'error',
  'prefer-rest-params': 'error',
  'prefer-template': 'error',
  'prefer-spread': 'error',
  'require-await': 'error',
  'rest-spread-spacing': 'error',
  'semi-spacing': 'error',
  'switch-colon-spacing': 'error',
  'sort-imports': [
    'error',
    {
      ignoreDeclarationSort: true,
      ignoreCase: true,
    },
  ],
  'space-in-parens': ['error', 'never'],
  'spaced-comment': [
    'error',
    'always',
    {
      markers: ['/'],
    },
  ],
  'valid-typeof': 'error',
  'yield-star-spacing': ['error', 'after'],

  'import/order': [
    'error',
    {
      groups: [['builtin', 'external', 'internal', 'unknown'], 'parent', ['sibling', 'index']],
      alphabetize: { order: 'asc', caseInsensitive: true },
      distinctGroup: true,
    },
  ],
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
};

export const ignores = [
  '**/dist/**',
  '**/node_modules/**',
  'vite.config.ts',
  'eslint.config.mjs',
];

const config = tseslint.config(
  {
    ignores,
  },
  stylistic.configs['recommended-flat'],
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
  {
    files: ['src/**/*.{js,jsx,mjs,ts,tsx}', '**/*.{ts,tsx,mts}'],
    languageOptions,
    plugins,
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules,
  },

  {
    files: ['**/*.{js,mjs,jsx}'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);

export default config;
