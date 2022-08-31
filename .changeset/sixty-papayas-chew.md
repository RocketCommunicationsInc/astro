---
"angular-workspace": major
"@astrouxds/angular": major
"astro-website": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

feat(rux-push-button)
WHAT: part 'label' has been renamed to 'container'
WHY: to bring consistency between styling push buttons and standard buttons
HOW TO MIGRATE: If you were previously using ::part(label) to style your push button please change to ::part(container)
