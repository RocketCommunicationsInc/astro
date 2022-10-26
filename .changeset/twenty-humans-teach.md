---
"angular-workspace": patch
"@astrouxds/angular": patch
"astro-website": patch
"@astrouxds/react": patch
"@astrouxds/astro-web-components": patch
---

Fixing classification marking for when a non-standard classification is put in Something besides cui, controlled, confidential, secret, top secret, top secret//sci or unclassified. The marking would appear blank in this scenario, now it will show up as 'unclassified'.
