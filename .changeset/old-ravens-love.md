---
"@astrouxds/angular": major
"astro-website": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

Clock - The following styles have been removed from the :host element:

`margin: 0 1rem`

You may need to apply this to your element directly:

```
rux-clock {
  margin: 0 1rem;
}
```

`user-select: none`

If you wish to override this, use the new `container` CSS Shadow Part.

`height: 3.938rem`

If you wish to override this, use the new `container` CSS Shadow Part.

`display: flex`

The default `display` has been changed to `inline-block`. This can be overwritten by targeting the `rux-clock` host element.
