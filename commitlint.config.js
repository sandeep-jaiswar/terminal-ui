module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Scope validation - all component and package names
    'scope-enum': [
      2,
      'always',
      [
        // Component packages
        'button',
        'input',
        'badge',
        'card',
        'modal',
        'navigation',
        'data-grid',
        'charts',
        'trading',
        'dashboard',

        // Foundation packages
        'tokens',
        'theme',
        'utils',
        'icons',
        'ui',

        // Apps
        'docs',
        'playground',

        // Tools
        'eslint-config',
        'tsconfig',
        'jest-config',

        // Meta
        'ci',
        'deps',
        'release',
        'config',
        'monorepo',
        'root',
      ],
    ],

    // Type validation
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation only changes
        'style',    // Code style changes (formatting, etc.)
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf',     // Performance improvements
        'test',     // Adding or updating tests
        'build',    // Changes to build system or dependencies
        'ci',       // Changes to CI configuration
        'chore',    // Other changes that don't modify src or test files
        'revert',   // Revert a previous commit
      ],
    ],

    // Subject case should be lowercase
    'subject-case': [2, 'never', ['upper-case', 'pascal-case']],

    // Subject should not end with a period
    'subject-full-stop': [2, 'never', '.'],

    // Subject should not be empty
    'subject-empty': [2, 'never'],

    // Type should not be empty
    'type-empty': [2, 'never'],

    // Body should have a leading blank line
    'body-leading-blank': [1, 'always'],

    // Footer should have a leading blank line
    'footer-leading-blank': [1, 'always'],

    // Header max length
    'header-max-length': [2, 'always', 100],
  },
};
