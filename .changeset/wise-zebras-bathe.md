---
"angular-workspace": major
"@astrouxds/angular": major
"astro-angular": major
"astro-react": minor
"astro-vue": minor
"@astrouxds/react": minor
"@astrouxds/astro-web-components": minor
---

Upgrade dependencies and fix Angular 20 compatibility

**BREAKING CHANGE for Angular users:**

- `AstroComponentsModule` no longer exports individual components due to Angular 20 standalone component restrictions
- Migration: Import components individually instead of using the module: `import { RuxButton, RuxIcon } from '@astrouxds/angular'`

Other changes:

- Upgrade Angular from v13 to v20 with TypeScript 4.5→5.8 compatibility
- Resolve Dependabot security updates and package conflicts across monorepo
- Update Node.js requirement from 16 to 18 for modern dependency support
- Fix Netlify deployment configuration and build pipeline
- Ensure all packages build successfully with updated dependencies
