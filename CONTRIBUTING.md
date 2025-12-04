# Contributing to @sandeep-jaiswar/ui

Thank you for your interest in contributing to our Bloomberg Terminal-inspired React UI component library! This guide will help you get started with contributing to this open-source project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Testing Requirements](#testing-requirements)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Component Development Guide](#component-development-guide)
- [Documentation](#documentation)

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. Please be respectful and constructive in all interactions.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 18.20.0 (use `.nvmrc` file with `nvm use`)
- **pnpm**: >= 8.0.0 (required package manager)
- **Git**: Latest version

### Initial Setup

1. **Fork and clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/terminal-ui.git
cd terminal-ui
```

2. **Use the correct Node.js version**

```bash
nvm use
# or if you don't have nvm
# Ensure you're using Node.js 18.20.0
```

3. **Install dependencies**

```bash
pnpm install
```

4. **Build all packages**

```bash
pnpm build
```

5. **Run tests to verify setup**

```bash
pnpm test
```

## 🔄 Development Workflow

### Running Development Mode

```bash
# Run all packages in watch mode
pnpm dev

# Run specific package in dev mode
pnpm --filter @sandeep-jaiswar/button dev

# Run Storybook for component development
pnpm --filter docs dev
```

### Building Packages

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @sandeep-jaiswar/button build
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run tests for specific package
pnpm --filter @sandeep-jaiswar/utils test
```

### Linting and Formatting

```bash
# Lint all files
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format all files
pnpm format

# Check formatting
pnpm format:check
```

### Type Checking

```bash
# Type check all packages
pnpm type-check
```

### Bundle Size Checks

```bash
# Check bundle sizes
pnpm size

# Analyze why bundle is large
pnpm size:why
```

### Version Management

```bash
# Check for version mismatches
pnpm check-versions

# Fix version mismatches
pnpm fix-versions
```

## 📁 Project Structure

```
@sandeep-jaiswar/ui/
├── .github/              # GitHub workflows and configurations
├── .husky/               # Git hooks
├── .vscode/              # VS Code workspace settings
├── apps/
│   ├── docs/            # Storybook documentation
│   └── playground/      # Development playground
├── packages/
│   ├── button/          # Button component
│   ├── input/           # Input components
│   ├── badge/           # Badge component
│   ├── card/            # Card component
│   ├── modal/           # Modal component
│   ├── navigation/      # Navigation components
│   ├── data-grid/       # DataGrid component
│   ├── charts/          # Chart components
│   ├── trading/         # Trading-specific components
│   ├── dashboard/       # Dashboard components
│   ├── tokens/          # Design tokens
│   ├── theme/           # Theme provider
│   ├── utils/           # Utility functions
│   ├── icons/           # Icon library
│   └── ui/              # Meta package (exports all)
└── tools/
    ├── eslint-config/   # Shared ESLint configuration
    ├── tsconfig/        # Shared TypeScript configs
    └── jest-config/     # Shared Jest configuration
```

## 💻 Coding Standards

### TypeScript

- ✅ Use **TypeScript strict mode** (enabled by default)
- ✅ **No `any` types** - use `unknown` if type is truly unknown
- ✅ Define proper **interfaces** for all props and types
- ✅ Use **type inference** where appropriate
- ✅ Export types from component files

### Code Style

- ✅ **2 spaces** for indentation
- ✅ **Semicolons required**
- ✅ **Double quotes** for strings
- ✅ **Trailing commas** in ES5-compatible places
- ✅ **Arrow functions** for callbacks
- ✅ **Named exports** for components (no default exports in packages)

### Component Guidelines

````typescript
import React from 'react';
import { cn } from '@sandeep-jaiswar/utils';

export interface ComponentProps {
  /** Primary visual variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  /** Size of the component */
  size?: 'sm' | 'md' | 'lg';
  /** Child elements */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  'data-testid'?: string;
}

/**
 * A professional component for financial trading applications.
 *
 * @example
 * ```tsx
 * <Component variant="primary" size="md">
 *   Content
 * </Component>
 * ```
 */
export const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'component-base',
          `component-${variant}`,
          `component-${size}`,
          className
        )}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';
````

### Accessibility (WCAG 2.1 AA)

- ✅ **Semantic HTML** elements
- ✅ **ARIA attributes** where needed
- ✅ **Keyboard navigation** support
- ✅ **Focus indicators** (2px minimum)
- ✅ **Screen reader** compatibility
- ✅ **Color contrast** minimum 4.5:1

## 🧪 Testing Requirements

### Unit Tests (Jest + React Testing Library)

- ✅ **90% minimum coverage** (branches, functions, lines, statements)
- ✅ Test **all prop variants**
- ✅ Test **user interactions** (click, keyboard, etc.)
- ✅ Test **accessibility** with jest-axe
- ✅ Test **edge cases** and error states

### Example Test

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick handler', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is accessible', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## 📝 Commit Guidelines

We use **Conventional Commits** with commitlint to maintain a clear history.

### Commit Message Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system or dependencies
- `ci`: CI/CD changes
- `chore`: Other changes
- `revert`: Revert previous commit

### Scopes

Use the package name: `button`, `input`, `badge`, `modal`, `data-grid`, `utils`, `tokens`, `docs`, `ci`, `deps`, etc.

### Examples

```bash
feat(button): add loading state with spinner
fix(data-grid): resolve virtualization scrolling issue
docs(readme): update installation instructions
test(modal): add accessibility tests
perf(charts): optimize large dataset rendering
chore(deps): update dependencies
```

### Commit Message Validation

Commits are automatically validated by commitlint via Husky git hooks. Invalid commits will be rejected.

## 🔀 Pull Request Process

### Before Submitting

1. ✅ **Create a feature branch** from `develop`

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feat/button-loading-state
   ```

2. ✅ **Make your changes** following coding standards

3. ✅ **Write tests** with 90%+ coverage

4. ✅ **Add Storybook stories** for visual documentation

5. ✅ **Run all checks locally**

   ```bash
   pnpm lint
   pnpm type-check
   pnpm test
   pnpm build
   pnpm format
   ```

6. ✅ **Check bundle size impact**

   ```bash
   pnpm size
   ```

7. ✅ **Create a changeset** (for version bumping)
   ```bash
   pnpm changeset
   ```

### Submitting Pull Request

1. **Push your branch**

   ```bash
   git push origin feat/button-loading-state
   ```

2. **Open a Pull Request** on GitHub
   - Base: `develop`
   - Compare: `feat/button-loading-state`

3. **Fill out PR template** with:
   - Description of changes
   - Related issues
   - Screenshots/videos (for UI changes)
   - Breaking changes (if any)
   - Checklist completion

4. **Add appropriate labels**:
   - `enhancement`, `bug`, `documentation`, `dependencies`, `breaking-change`

### PR Review Process

- ✅ All CI checks must pass (lint, test, build, type-check)
- ✅ Code review approval required
- ✅ Visual regression tests must pass (Chromatic)
- ✅ Bundle size must be within limits
- ✅ Accessibility tests must pass
- ✅ Coverage threshold maintained (90%+)

### After Approval

- Squash and merge to `develop`
- Delete feature branch
- Changesets will be processed automatically

## 🎨 Component Development Guide

### Creating a New Component

1. **Create package directory**

   ```bash
   mkdir packages/my-component
   cd packages/my-component
   ```

2. **Create package.json**

   ```json
   {
     "name": "@sandeep-jaiswar/my-component",
     "version": "0.0.0",
     "main": "./dist/index.js",
     "module": "./dist/index.mjs",
     "types": "./dist/index.d.ts",
     "exports": {
       ".": {
         "types": "./dist/index.d.ts",
         "import": "./dist/index.mjs",
         "require": "./dist/index.js"
       }
     }
   }
   ```

3. **Create component structure**

   ```
   packages/my-component/
   ├── src/
   │   ├── MyComponent.tsx
   │   ├── index.ts
   │   └── types.ts
   ├── __tests__/
   │   ├── MyComponent.test.tsx
   │   └── setup.ts
   ├── package.json
   ├── tsconfig.json
   ├── tsup.config.ts
   ├── jest.config.js
   └── .eslintrc.js
   ```

4. **Add to workspace**
   - Package is automatically picked up by pnpm workspace

5. **Create Storybook stories**

   ```typescript
   // apps/docs/stories/my-component.stories.tsx
   import type { Meta, StoryObj } from "@storybook/react";
   import { MyComponent } from "@sandeep-jaiswar/my-component";

   const meta: Meta<typeof MyComponent> = {
     title: "Components/MyComponent",
     component: MyComponent,
   };

   export default meta;
   type Story = StoryObj<typeof MyComponent>;

   export const Default: Story = {
     args: {
       children: "My Component",
     },
   };
   ```

### Component Checklist

- ✅ TypeScript interfaces with JSDoc comments
- ✅ Proper prop types with defaults
- ✅ Forward refs for DOM access
- ✅ Accessibility attributes
- ✅ Responsive design
- ✅ Dark theme support (Bloomberg Terminal aesthetic)
- ✅ Unit tests (90%+ coverage)
- ✅ Storybook stories
- ✅ Bundle size optimized

## 📚 Documentation

### JSDoc Comments

Use JSDoc for all exported components, functions, and types:

````typescript
/**
 * A professional button component for financial trading applications.
 *
 * Features Bloomberg Terminal-inspired styling with:
 * - High contrast colors optimized for terminal environments
 * - Financial semantic variants (success for buy, danger for sell)
 * - Screen reader announcements for trading actions
 * - Loading states with terminal-style spinners
 *
 * @example
 * ```tsx
 * <Button variant="success" onClick={handleBuy} loading={isExecuting}>
 *   Buy 100 AAPL
 * </Button>
 * ```
 */
export const Button = ...
````

### README Files

Each package should have a README with:

- Installation instructions
- Usage examples
- API documentation
- Props table
- Accessibility notes

## 🐛 Bug Reports

Use GitHub Issues with the bug template:

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos
- Environment details

## 💡 Feature Requests

Use GitHub Issues with the feature template:

- Use case description
- Proposed API/interface
- Alternative solutions considered
- Financial trading context (if applicable)

## 🏷️ Version Management

We use Changesets for version management:

```bash
# Create a changeset
pnpm changeset

# Version packages (maintainers only)
pnpm changeset:version

# Publish to npm (maintainers only)
pnpm changeset:publish
```

## 🙏 Thank You!

Thank you for contributing to @sandeep-jaiswar/ui! Your contributions help build better tools for financial trading applications worldwide.

## 📞 Questions?

- 💬 GitHub Discussions
- 🐛 GitHub Issues
- 📧 sandeep.jaiswar.dev@gmail.com

---

**Happy coding!** 🚀
