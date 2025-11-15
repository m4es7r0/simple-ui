# simple-ui — React component library

simple-ui is a collection of accessible, composable UI components for React, built on top of Base UI and styled with Tailwind CSS. It includes:

- A ready-to-run Storybook with docs and a11y
- Unit tests (Vitest + Testing Library)
- Visual regression tests (Playwright)
- ESM library build with type declarations
- Changesets for semantic versioning

## Tech stack

- React 19, TypeScript, Vite
- Base UI primitives (`@base-ui-components/react`)
- Tailwind CSS 4
- Storybook 10
- Vitest + @testing-library/react
- Playwright
- Changesets

## Project structure (key paths)

- `src/components/ui/` — component source
- `src/lib/utils.ts` — shared utilities
- `src/index.ts` — barrel exports for the library
- `.storybook/` — Storybook configuration
- `src/components/ui/**/__stories__/*.stories.tsx` — stories
- `src/components/ui/**/__tests__/*.test.tsx` — unit tests
- `tests/visual/` — Playwright visual tests

## Using as a component library

The library is built as ESM and exposes types. React and other heavy deps are peer dependencies for optimal bundle size.

Peer dependencies you must have in your app:

- `react`, `react-dom`
- `@base-ui-components/react`
- `tailwindcss`

1. Install the package

- Local file install during development:

```bash
npm i file:../simple-ui
```

- Or Git install:

```bash
npm i git+ssh://git@github.com:<your-org>/<your-repo>.git#main
```

2. Import components

```tsx
import { Button, Card, Input } from "simple-ui";

export default function Example() {
  return (
    <Card className="p-4">
      <Button>Click me</Button>
      <Input placeholder="Type..." />
    </Card>
  );
}
```

3. Styles
   Components rely on Tailwind CSS tokens/variables. Ensure your host app has Tailwind configured and includes its base layers. These components do not ship global CSS by default; copy or adapt the styles you need (see `src/index.css`) into your app’s Tailwind setup.

## Development

Start Storybook:

```bash
npm run storybook
```

Run all tests:

```bash
npm test
```

Run Storybook-driven tests (in-browser):

```bash
npm run test:storybook
```

Run visual tests (first install browsers):

```bash
npx playwright install --with-deps
npm run test:visual
```

- Visual snapshots are stored under `tests/visual/__screenshots__/`.
- Update snapshots when UX changes are expected:

```bash
npx playwright test --update-snapshots
```

Build the library (ESM + types):

```bash
npm run build:lib
```

Outputs to `dist/` with tree-shakeable ESM (`sideEffects: false`) and `.d.ts` declarations.

## Storybook

- Stories live next to components under `__stories__`.
- Addons enabled: Docs, A11y, Vitest integration.

## Testing approach

- Unit tests: lightweight smoke/assertion tests with @testing-library/react to validate rendering and basic props/roles.
- Storybook tests: integration via the Vitest addon to execute stories in a browser environment.
- Visual regression: Playwright opens Storybook iframe for each “Default” story and compares screenshots against baselines.

## Versioning & releases (Changesets)

This repo uses Changesets to manage semantic versioning and changelogs.

Record changes:

```bash
npx changeset
```

Version and publish:

```bash
npm run release
```

Notes:

- `package.json` is currently `"private": true`; set it to `false` when you are ready to publish.
- Publishing requires proper registry auth and may need `access` config tweaks in `.changeset/config.json`.

## Build details

- ESM only (`module` and `exports.import` point to `dist/index.js`)
- Types at `dist/index.d.ts`
- Externals: `react`, `react-dom`, `@base-ui-components/react`, `class-variance-authority`, `clsx`, `tailwind-merge`
- Alias `@` -> `./src`

## Scripts

- `storybook` — start Storybook
- `build-storybook` — static Storybook build
- `test` — run unit tests
- `test:storybook` — run Storybook integration tests
- `test:visual` — run Playwright visual tests
- `build:lib` — emit types and ESM bundle
- `release` — Changesets versioning + publish
