import eslint from '@eslint/js';
import jest from 'eslint-plugin-jest';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  jest.configs['flat/recommended'],
  eslint.configs.recommended,
  tseslint.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    commaDangle: 'always-multiline',
    braceStyle: '1tbs',
  }),
  {
    ignores: [
      '.idea/**',
      '**/node_modules/**',
      '**/dist/**',
      '.astro/**',
      'astro.config.mjs',
      'tailwind.config.mjs',
      'jest.config.ts',
    ],
  },
  {
    files: ['src/**/*.ts', 'src/**/*.mts', 'src/**/*.js'],
    rules: {
      '@stylistic/indent': ['error', 2, {
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
      }],
      '@typescript-eslint/no-explicit-any': 'off',
      'max-len': ['error', { code: 200 }],
      'no-irregular-whitespace': ['error', { skipRegExps: true }],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
      ],
    },
  },
);
