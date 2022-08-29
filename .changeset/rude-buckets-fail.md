---
"angular-workspace": major
"@astrouxds/angular": major
"astro-website": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

WHAT: Global status bar no longer automaticall uppercases the app domain and name.
WHY: This was changed in order to match design.
HOW TO MIGRATE: If you are reliant on the app state and domain being in all caps, simply pass the `app-domain` and `app-state` an all uppercase version.
