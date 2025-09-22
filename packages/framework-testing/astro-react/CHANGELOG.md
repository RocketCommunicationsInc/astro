# astro-react

## 0.7.0

### Minor Changes

- 62b0c3c7: Upgrade dependencies and fix Angular 20 compatibility

  **BREAKING CHANGE for Angular users:**

  - `AstroComponentsModule` no longer exports individual components due to Angular 20 standalone component restrictions
  - Migration: Import components individually instead of using the module: `import { RuxButton, RuxIcon } from '@astrouxds/angular'`

  Other changes:

  - Upgrade Angular from v13 to v20 with TypeScript 4.5→5.8 compatibility
  - Resolve Dependabot security updates and package conflicts across monorepo
  - Update Node.js requirement from 16 to 18 for modern dependency support
  - Fix Netlify deployment configuration and build pipeline
  - Ensure all packages build successfully with updated dependencies

## 0.6.1

### Patch Changes

- Remove console log

## 0.6.0

### Minor Changes

- 0016be82: Add compact property to rux-tabs
- 1a4c9735: Add compact prop to global status bar

## 0.5.1

### Patch Changes

- 4a5755ea: Backlog of neglected dependabot prs
- d633ea5b: Add li and ul parts to segmented buttons

## 0.5.0

### Minor Changes

- 95904ef7: Added several new props to rux-timeline. `show-secondary-ruler`, `ruler-position`, `show-grid`, and `hide-j-day`.

## 0.4.0

### Minor Changes

- 44237a22: Added minlength and maxlength to rux-input

## 0.3.1

### Patch Changes

- 6b6b0034: Adding actions slot to tab component and bumping Storybook up to 8 and rewriting all stories to match the new version.
- d1cb7d94: Fixed button bug when clicking and dragging over an icon-only, borderless button
- 4c4e3bc8: Added missing footer slot documentation to storybook

## 0.3.0

### Minor Changes

- e7acf582: Updated timeline BETA to support Month and Week intervals for displaying data and allow zoom to be < 1

## 0.2.1

### Patch Changes

- 2dc538f1: fix(rux-tabs) enhanced keyboard functionality with or without tab panels
