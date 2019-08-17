module.exports = {
  json: './dist/docs/assets/api.json',
  readme: 'none',
  includes: [
    '/projects/lithium/**/*.ts'
  ],
  exclude: [
    '**/node_modules/**',
    './projects/docs/**/*',
    '**/*.e2e-spec.*',
    '**/*.po.*',
    '**/*.spec.*',
    '**/*.d.*',
    '**/*.styles.*',
    '**/code-example.element.*'
  ],
  includeDeclarations: false,
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  excludeProtected: true
};