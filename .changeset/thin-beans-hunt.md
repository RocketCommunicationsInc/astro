---
"@astrouxds/astro-web-components": minor
---

fix(rux-progress) fix the visual for lower percentages, this change alters the way border visuals are configured
What: Changed internal progress part to use box-shadow instead of border for border effect. 
Migration: If you are using the progress css shadow part to override border color, youll need to use box shadow to override border color instead.
