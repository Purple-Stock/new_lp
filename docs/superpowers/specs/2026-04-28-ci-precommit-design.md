# CI and Pre-commit Design

## Goal

Add a minimal local pre-commit flow and GitHub Actions workflow for `new_lp`
that block unformatted code, failing tests, lint errors, and broken builds.

## Scope

- Add a repository-local CI workflow in `.github/workflows/ci.yml`
- Add a repository-local Husky pre-commit hook in `.husky/pre-commit`
- Add the minimum package wiring needed to install Husky automatically

## Chosen Approach

Use one CI job with four existing project commands:

- `npm run format:check`
- `npm run test:ci`
- `npm run lint`
- `npm run build`

Use Husky for local git hooks with a `prepare` script so the hook is installed
after dependency install.

## Tradeoffs

This is intentionally simple.

- Pros: low maintenance, no new custom scripts, same commands locally and in CI
- Cons: pre-commit runs full test and lint suite, so commits are slower

## Success Criteria

- Pull requests and pushes to `main` run formatting, tests, lint, and build
- Developers get the same guardrails before commit via Husky
- No extra abstractions beyond the existing npm scripts
