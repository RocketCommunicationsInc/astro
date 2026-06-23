---
"angular-workspace": major
"@astrouxds/astro-web-components": major
"@astrouxds/angular": major
"@astrouxds/react": major
---

Updated core dependencies; Moved node support to v26; Fixed rux-clock bug; Fixed Angular standalone form components

After a long wait we've updated dependencies to move towards better supported versions. That includes dropping support for super old versions of node.

Fixed a bug in rux-clock where passed-in dates would incorrectly increment seconds.

Angular standalone components now work properly in forms, and can be imported wholesale with AstroComponentsModule, or individually.
