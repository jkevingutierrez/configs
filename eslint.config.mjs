import * as graphql from '@graphql-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import defaultConfig, { languageOptions, plugins, rules } from '../../eslint.config.mjs';

export default tseslint.config(
  defaultConfig,
  {
    files: ['src/**/*.{js,jsx,mjs,ts,tsx}', '**/*.{ts,tsx,mts}'],
    plugins: {
      ...plugins,
      '@graphql-eslint': graphql,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...rules,
      ...react.configs.all.rules,
      ...reactHooks.configs.recommended.rules,

      // Disabled, because `void` type is required for proper type deriving in modals.ts
      '@typescript-eslint/no-invalid-void-type': 'off',

      // Most of the rules were turned off because they were generating a bunch of
      // errors.
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
      'react/destructuring-assignment': 'off',
      'react/forbid-component-props': 'off',
      'react/iframe-missing-sandbox': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-handler-names': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-newline': 'off',
      'react/jsx-no-bind': 'off',
      'react/jsx-no-literals': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': 'off',
      'react/no-danger': 'off',
      'react/no-multi-comp': 'off',
      'react/prefer-read-only-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',

      // React specific rules with custom config
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-unstable-nested-components': [
        'error',
        {
          allowAsProps: true,
        },
      ],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-depth': ['error', { max: 8 }],
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
        },
      ],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: true }],
    },
  },
  // Add GraphQL ESLint configuration for TypeScript files
  {
    name: 'apply graphql processor to all graphql-related typescript files',
    files: ['src/graphql/entities/**/*.{ts,tsx,mts}'],
    languageOptions,
    processor: graphql.processors.graphql,
  },

  {
    name: 'lint all virtual graphql files created from previous step',
    files: ['**/*.graphql'],
    plugins: {
      '@graphql-eslint': graphql,
    },
    languageOptions: {
      parser: graphql.parser,
      parserOptions: {
        graphQLConfig: {
          schema: '../backend/assets/schema/schema.graphql',
          documents: ['src/graphql/entities/**/*.ts'],
        },
      },
    },
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      ...graphql.configs['operations-recommended'].rules,
      '@graphql-eslint/no-deprecated': 'off',
      // We store some reusable fragments in separate files, so we need to disable this rule.
      '@graphql-eslint/no-unused-fragments': 'off',

      // This rule was taken from 'operations-recommended' rule set
      // but modified to remove 'Get' from forbiddenPrefixes for Operations.
      // Apparently, it's against the convention, but who cares.
      '@graphql-eslint/naming-convention': [
        'error',
        {
          VariableDefinition: 'camelCase',
          OperationDefinition: {
            style: 'PascalCase',
            forbiddenPrefixes: ['Query', 'Mutation', 'Subscription'],
            forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
          },
          FragmentDefinition: {
            style: 'PascalCase',
            forbiddenPrefixes: ['Fragment'],
            forbiddenSuffixes: ['Fragment'],
          },
        },
      ],
    },
  },
);
