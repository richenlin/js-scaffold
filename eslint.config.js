const eslintConfigPrettier = require('eslint-config-prettier');
const importPlugin = require('eslint-plugin-import');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const nPlugin = require('eslint-plugin-n');
const promisePlugin = require('eslint-plugin-promise');

module.exports = [
  {
    // 全局配置
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // 相当于旧的env配置
        browser: true,
        es2024: true,
        node: true,
      },
    },
    // 插件
    plugins: {
      jsdoc: jsdocPlugin,
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
    },
    // 规则
    rules: {
      // 主流开源项目常见覆盖规则
      'import/prefer-default-export': 'off',
      'import/extensions': ['error', 'ignorePackages'],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreComments: true,
          ignoreUrls: true,
        },
      ],
      'no-await-in-loop': 'off',
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],
      'operator-linebreak': ['error', 'after'],
      'n/no-missing-import': [
        'error',
        {
          allowModules: ['node_modules'],
        },
      ],
      // 'jsdoc/require-description': 'warn',
      // 'jsdoc/check-examples': 'warn', // 此规则在ESLint 8+中不起作用，已禁用
      'jsdoc/check-param-names': 'error',
      'jsdoc/check-types': 'error',
      'jsdoc/require-param': ['error', { exemptedBy: ['see'] }],
      'jsdoc/require-param-type': 'error',
      'jsdoc/require-returns': 'warn',
      'jsdoc/require-returns-type': 'error',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs'],
        },
      },
    },
    // 忽略的文件
    ignores: ['**/*.config.js', 'node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  },
  // 导入eslint-config-prettier配置
  eslintConfigPrettier,
];
