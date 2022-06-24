# @astrouxds/angular

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
