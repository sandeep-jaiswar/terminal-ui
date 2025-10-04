# GitHub Actions Workflows

This directory contains comprehensive GitHub Actions workflows for the @sandeep-jaiswar/ui monorepo.

## 📋 Workflows Overview

### Core Development Workflows

#### 1. CI (`ci.yml`)
**Trigger**: Push to main/develop, Pull Requests
- **Lint**: Runs ESLint and Prettier checks
- **Type Check**: TypeScript type checking across all packages
- **Build**: Builds all packages with Turborepo
- **Test**: Runs Jest tests with coverage reporting

**Features**:
- Concurrency control to cancel redundant runs
- Artifact uploads for build outputs
- Codecov integration for coverage reports
- Uses pnpm v8.15.0 for dependency management

#### 2. PR Checks (`pr-checks.yml`)
**Trigger**: Pull Request events (opened, synchronize, reopened)
- Validates PR title follows semantic commit conventions
- Checks for changesets (required for package changes)
- Runs affected lint, type-check, tests, and builds
- Analyzes bundle size changes
- Validates required labels

**Features**:
- Skips draft PRs automatically
- Bundle size analysis in PR comments
- Breaking change detection
- Label validation

#### 3. Security (`security.yml`)
**Trigger**: Push, Pull Requests, Daily at 2 AM UTC
- **Dependency Audit**: pnpm audit for vulnerabilities
- **CodeQL Analysis**: GitHub's security scanning
- **Secret Scanning**: TruffleHog for exposed secrets
- **Dependency Review**: Checks new dependencies in PRs
- **License Check**: Validates license compliance

**Permissions**: Requires security-events:write

#### 4. Performance (`performance.yml`)
**Trigger**: Pull Requests, Push to main
- **Bundle Analysis**: Package size tracking
- **Size Comparison**: Compares PR changes with base branch
- **Bundle Limits**: Enforces maximum bundle sizes
- **Performance Benchmarks**: Placeholder for custom benchmarks

**Features**:
- Automatic PR comments with size reports
- Size limit enforcement (500KB default)
- Historical size tracking

---

### Quality Assurance Workflows

#### 5. Visual Regression (`visual-regression.yml`)
**Trigger**: Push, Pull Requests
- **Chromatic**: Visual regression testing with Chromatic
- **Component Screenshots**: Automated screenshot generation
- **Storybook Testing**: Validates all stories render correctly

**Setup Required**:
- Add `CHROMATIC_PROJECT_TOKEN` to repository secrets
- Sign up at [chromatic.com](https://www.chromatic.com)

#### 6. Accessibility (`accessibility.yml`)
**Trigger**: Push, Pull Requests
- **Storybook A11y**: Automated accessibility testing
- **Axe Tests**: Jest-axe integration
- **WCAG Validation**: Pa11y compliance checks
- **Keyboard Navigation**: Tests keyboard accessibility
- **Screen Reader**: ARIA label validation
- **Color Contrast**: Ensures WCAG AA/AAA compliance

**Standards**:
- WCAG 2.1 Level AA compliance
- Section 508 compliance

#### 7. E2E Tests (`e2e.yml`)
**Trigger**: Push, Pull Requests, Daily at 3 AM UTC
- **Playwright**: Cross-browser testing (Chromium, Firefox, WebKit)
- **Storybook E2E**: Tests all component stories
- **Interaction Tests**: Component behavior validation
- **Smoke Tests**: Critical path verification

**Features**:
- Multi-browser testing matrix
- Automatic screenshot capture on failures
- Test result artifacts

#### 8. Lighthouse (`lighthouse.yml`)
**Trigger**: Push, Pull Requests, Weekly on Sundays
- **Storybook Audit**: Performance, accessibility, SEO
- **Playground Audit**: Next.js app performance
- **Performance Budget**: Enforces performance thresholds
- **Core Web Vitals**: LCP, FID, CLS monitoring

**Targets**:
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 90+

---

### Release & Publishing Workflows

#### 9. Release (`release.yml`)
**Trigger**: Push to main
- **Build & Test**: Validates before release
- **Changesets**: Creates version PRs or publishes
- **NPM Publish**: Publishes to npm registry
- **GitHub Release**: Creates GitHub releases

**Setup Required**:
- `NPM_TOKEN`: npm authentication token
- `GITHUB_TOKEN`: Automatic (provided by GitHub)

#### 10. Changeset (`changeset.yml`)
**Trigger**: Pull Request events
- **Changeset Verification**: Ensures changesets exist
- **Status Report**: Shows affected packages
- **Format Validation**: Validates changeset files
- **Auto Comments**: Adds helpful PR comments

**Usage**:
```bash
pnpm changeset
```

#### 11. Docs Deploy (`docs-deploy.yml`)
**Trigger**: Push to main, Pull Requests
- **Vercel Deployment**: Deploys Storybook to Vercel
- **GitHub Pages**: Alternative deployment to GitHub Pages
- **Preview URLs**: PR-specific preview deployments

**Setup Required** (for Vercel):
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

#### 12. Examples Deploy (`examples-deploy.yml`)
**Trigger**: Push to main, Pull Requests
- **Playground**: Deploys Next.js playground
- **Examples**: Deploys example applications
- **Preview URLs**: PR-specific previews

**Setup Required** (for Vercel):
- `VERCEL_PLAYGROUND_PROJECT_ID`
- `VERCEL_EXAMPLES_PROJECT_ID`

---

### Maintenance Workflows

#### 13. Dependency Updates (`dependency-update.yml`)
**Trigger**: Weekly on Mondays, Manual
- **Dependency Updates**: Automatic updates via pnpm
- **Renovate Bot**: Intelligent dependency management
- **Security Updates**: Auto-fixes security vulnerabilities
- **Outdated Check**: Reports outdated packages

**Features**:
- Automatic PR creation
- Test validation before PR
- Security-focused updates

#### 14. Cleanup (`cleanup.yml`)
**Trigger**: Daily at midnight UTC, Manual
- **Cache Cleanup**: Removes old caches (>7 days)
- **Artifact Cleanup**: Removes old artifacts (>30 days)
- **Workflow Runs**: Removes old runs (>90 days)
- **Storage Report**: Provides usage metrics

#### 15. Health Check (`health-check.yml`)
**Trigger**: Daily at 8 AM UTC, Manual
- **Code Health**: Lines of code, test coverage
- **Dependency Health**: Vulnerabilities, outdated packages
- **PR Health**: Open PRs, stale PRs
- **Issue Health**: Open issues, bugs, stale issues
- **Workflow Health**: Success/failure rates

**Features**:
- Automatic issue creation on failures
- Comprehensive health metrics
- Daily monitoring

---

## 🔐 Required Secrets

### NPM Publishing
- `NPM_TOKEN`: npm authentication token
  - Create at: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
  - Type: Automation token

### Vercel Deployment
- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Storybook project ID
- `VERCEL_PLAYGROUND_PROJECT_ID`: Playground project ID
- `VERCEL_EXAMPLES_PROJECT_ID`: Examples project ID

### Chromatic (Optional)
- `CHROMATIC_PROJECT_TOKEN`: Chromatic project token
  - Sign up at: https://www.chromatic.com

## 🎯 Workflow Status Badges

Add these badges to your README:

```markdown
[![CI](https://github.com/sandeep-jaiswar/terminal-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/sandeep-jaiswar/terminal-ui/actions/workflows/ci.yml)
[![Security](https://github.com/sandeep-jaiswar/terminal-ui/actions/workflows/security.yml/badge.svg)](https://github.com/sandeep-jaiswar/terminal-ui/actions/workflows/security.yml)
[![Release](https://github.com/sandeep-jaiswar/terminal-ui/actions/workflows/release.yml/badge.svg)](https://github.com/sandeep-jaiswar/terminal-ui/actions/workflows/release.yml)
```

## 📚 Best Practices

### For Contributors
1. **Always create a changeset** when making user-facing changes
2. **Follow semantic commit conventions** in PR titles
3. **Add appropriate labels** to PRs
4. **Wait for all checks** to pass before merging
5. **Review bundle size changes** in PR comments

### For Maintainers
1. **Review security alerts** promptly
2. **Monitor health check reports** daily
3. **Keep dependencies updated** via Renovate
4. **Review and merge version PRs** created by Changesets
5. **Monitor workflow success rates**

## 🔧 Customization

### Adjusting Bundle Size Limits
Edit `performance.yml`:
```yaml
MAX_SIZE=500  # Change to desired KB limit
```

### Modifying Cleanup Schedules
Edit retention periods in `cleanup.yml`:
```yaml
maxAge = 7 * 24 * 60 * 60 * 1000;  # 7 days for caches
maxAge = 30 * 24 * 60 * 60 * 1000; # 30 days for artifacts
maxAge = 90 * 24 * 60 * 60 * 1000; # 90 days for workflow runs
```

### Changing Dependency Update Schedule
Edit `.github/renovate.json`:
```json
"schedule": ["before 9am on Monday"]
```

## 🐛 Troubleshooting

### Workflow Failing?
1. Check the workflow run logs in GitHub Actions
2. Review the summary report at the bottom of each run
3. Ensure all required secrets are configured
4. Verify pnpm version matches (8.15.0)

### Bundle Size Limit Exceeded?
1. Review the bundle size report in PR comments
2. Identify large dependencies
3. Consider code splitting or lazy loading
4. Use tree-shaking where possible

### Security Vulnerabilities?
1. Check `dependency-update.yml` runs
2. Review security audit reports
3. Update vulnerable packages
4. Consider alternative packages if needed

## 📖 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Changesets Documentation](https://github.com/changesets/changesets)
- [Renovate Documentation](https://docs.renovatebot.com/)
- [Chromatic Documentation](https://www.chromatic.com/docs/)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

When adding new workflows:
1. Follow the existing naming conventions
2. Add proper documentation in this README
3. Test the workflow in a fork first
4. Ensure proper error handling
5. Add helpful summary reports
