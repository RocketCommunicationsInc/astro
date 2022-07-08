# @astrouxds/angular

## 7.0.0-beta.3

### Major Changes

- a7296b6b: Our /dist/custom-elements build has been removed in favor of a faster treeshakeable /dist/components build. We anticipate very few people are using this build. To check if your project is affected, you can do a global find for 'astro-web-components/dist/custom-elements' in your project. If you are using this build, switch to 'astro-web-components/dist/loader' instead.
- 27b72893: Modal has been removed. It has been renamed to Dialog to align with our Design System naming and shares the exact same API as Modal.

  Migration: You can do a global find/replace on your project for:

  `rux-modal` -> `rux-dialog`
  `ruxmodalclosed` -> `ruxdialogclosed`
  `ruxmodalopened` -> `ruxdialogopened`

### Minor Changes

- f9b842f7: Modal is now deprecated and will be removed in 7.0. It is being renamed to Dialog to align with our Design System naming and which shares the exact same API as Modal. It is recommended that you migrate to Dialog before 7.0. You can do a global find/replace on your project for:

  `rux-modal` -> `rux-dialog`
  `ruxmodalclosed` -> `ruxdialogclosed`
  `ruxmodalopened` -> `ruxdialogopened`

- 3c0cd2b8: Updates help text to use text-secondary to align with design

### Patch Changes

- f9b842f7: Fixed an issue with modal emitting an extra 'ruxmodalclosed' event when closed by an off click.
- f9b842f7: Fixed an issue where rux-tab border would not style correctly when rux-tabs was set to small.
- Updated dependencies [a7296b6b]
- Updated dependencies [f9b842f7]
- Updated dependencies [3c0cd2b8]
- Updated dependencies [f9b842f7]
- Updated dependencies [f9b842f7]
- Updated dependencies [27b72893]
  - @astrouxds/astro-web-components@7.0.0-beta.3

## 7.0.0-beta.2

### Major Changes

#### CSS Custom Properties

The majority of our CSS Custom Properties have been removed. See the MIGRATION.md file for more information.

#### Angular

The angular wrapper has been updated and will no longer be compatible with Angular versions less than 12.

#### Pop Up Menu

Pop Up Menu has been re-written to take a slotted trigger element and slotted content. Now changes placement based on available space. Replaces all methods with two new methods, show and hide.

#### Clock

- The following styles have been removed from the :host element:

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

#### Notification

- Host styles have been moved to the shadow dom. If you were previously styling the <rux-notification> element, use shadow parts instead

### Minor Changes

#### Notification

- add `--height` css custom property
- add prefix, default, and actions slots

#### Clock

- add `container` CSS Shadow Part
