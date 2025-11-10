---
description: Step-by-step development workflow for contributors, listing prerequisites, pnpm scripts, quality gates, and contribution guidelines.
---

# Development Workflow

## Prerequisites
- Node.js 20+
- pnpm 10+ (`package.json` pins `pnpm@10.20.0`)
- `pnpm install` from repo root

## Scripts
| Command | Description |
| --- | --- |
| `pnpm dev` | Vitest watch mode with coverage + heap usage logging. |
| `pnpm test` | Vitest suite with coverage reports in `coverage/`. |
| `pnpm bench` | Runs benchmarks in `test/benchmarks/`. Update the README there after each round. |
| `pnpm lint` | ESLint auto-fix over `src/`. |
| `pnpm build` | Builds ESM + IIFE bundles and `.d.ts` files. |
| `pnpm docs` | Launches VitePress for this `docs/` folder. |
| `pnpm release` | Test + build + changelog generation via `changelogen`. |
| `pnpm clean` | Removes `node_modules/` and `dist/`. |

## Workflow tips
1. Run `pnpm dev` while editing core structures to catch regressions quickly.
2. Update docs (README + VitePress pages) alongside API changes to avoid stale instructions.
3. Execute `pnpm bench` after performance-sensitive tweaks and log results.
4. Run `pnpm docs` locally to verify sidebar/content structure before publishing.

## Contribution guidelines
- Maintain backward compatibility for exported classes/types; introduce breaking changes behind major version bumps.
- Add or update tests in `test/` (and benchmarks if applicable) when fixing bugs or adding features.
- Document meaningful behavior changes in `CHANGELOG.md` before releasing.
