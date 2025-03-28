export default [
    {
      ignores: ['node_modules'],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        // Add specific rules here
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
      },
    },
  ];
