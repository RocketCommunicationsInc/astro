# @astrouxds/astrouxds

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

## 6.12.0

### Minor Changes

#### Slider

- Added `ruxchange` event

## 6.11.0

### Minor Changes

#### Tree

- Added two new events to rux-tree-node: ruxtreenodeexpanded and ruxtreenodecollapsed.

## 6.10.0

### Minor Changes

#### Modal

- Modal is now deprecated and will be removed in 7.0. It is being renamed to Dialog to align with our Design System naming and which shares the exact same API as Modal. It is recommended that you migrate to Dialog before 7.0. You can do a global find/replace on your project for:

  `rux-modal` -> `rux-dialog`
  `ruxmodalclosed` -> `ruxdialogclosed`
  `ruxmodalopened` -> `ruxdialogopened`

- 3c0cd2b8: Updates help text to use text-secondary to align with design

- f9b842f7: Fixed an issue with modal emitting an extra 'ruxmodalclosed' event when closed by an off click.
- f9b842f7: Fixed an issue where rux-tab border would not style correctly when rux-tabs was set to small.

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

## 7.0.0-beta.0

### Major Changes

#### Modal

- Modal will no longer close when clicking outside by default.

  - Why: To align with Astro UXDS compliance requirements 4.3.3: "Dialog Boxes shall be closed only with confirm or cancel Buttons."

  - Migration: If you still require this functionality, a new `clickToClose` property has been added. It defaults to `false` so this will be a breaking change.

- The following properties and attributes have been removed: `modalMessage`, `modalTitle`, `confirmText`, `denyText`.
  - Why: These have been replaced in favor of slots to provide greater flexibility.
  - Migration: Use the new `header`, `message`, and `footer` slots instead.

#### Progress

- Removed the indeterminate functionality from Progress
  - Why: this functionality has been moved to its own component, rux-indeterminate-progress.

### Minor Changes

#### Card

- New component

#### Indeterminate Progress

- New component

#### Container

- New component

### Patch Changes

### Patch Changes

#### GSB

- Fixed layout bug when used with classification marking

#### Modal / Dialog

- Fixed an issue with modal emitting an extra 'ruxmodalclosed' event when closed by an off click.

#### Tabs

- Fixed a styling bug with `small` variant

## 6.9.1

### Patch Changes

- Updates Angular dependencies and documentation

## 6.9.0

### Minor Changes

- !!! Deprecates CSS Custom Properties. See MIGRATION.md for more information !!!

#### Input

- Added support for `time` type

### Patch Changes

#### Modal

- Fixed issue with emitting a detail value when using default confirm/deny buttons.

#### Pop Up Menu

- Pop-up-menu will now position correctly if the anchor element is beyond a horizontal scrollbar.

## 6.8.0

### Minor Changes

#### Modal

- Added in slots for message, title and footer to allow for more customization.

#### Clock

- Added a 'date-in' prop that allows the clock to be set to increment from a specific date.

### Patch Changes

#### Switch

- Fixed issue where label was breaking out of the container

#### Select

- Updated styles for better use on Windows OS and Firefox browsers

## 6.7.0

### Minor Changes

#### Tree Node

- added nowrap/overflow hidden to prevent overflow with long names

#### Modal

- Added a new `dialog` shadow part attached to the native dialog element.

### Patch Changes

#### Tabs

- fixed issue where styles were not properly shadow dom encapsulated

#### Modal

- Removed the fix height on the dialog element that was preventing a long modal message.

#### Tree

- fixed regression where border styles were not being applied

#### Push Button

- fixed the hover styling

## 6.6.0

### Minor Changes

#### Timeline

- Added `timezone` property

### Patch Changes

#### Segmented Button

- fixed issue where the bottom border was being clipped when inside a container element.

#### Slider

- hides label if none is present

#### Form Elements

- Removed extra margin on form elements (checkbox, radio, slider, select, input, textarea) that didn't have a label.

## 6.5.1

### Patch Changes

#### Tag

- Added shadows to align with design.

#### Table

- Updated selected row styling to align with design.

#### Tree / Tree Node

- Updated styling to align with design.
- Added hover state.

## 6.5.0

> NOTE: This release renames many of our internal private CSS Custom Properties (--color-background). If you are using these to build your own UIs, this may be a breaking change for you.

### Minor Changes

#### Select

- Added `size` property.

#### Option

- Added a `disabled` property.

#### Input

- Added `date` and `datetime-local` types.
- Added a `prefix` and `suffix` named slots.

#### Tag

- Created a new Tag component.

### Patch Changes

- Updated components to use the new beta design tokens

#### Button

- Moved `width` attribute out of shadow dom, can now be styled without CSS parts.

#### Notification

- Watch closeAfter to close when updated

#### Slider

- Updated to accept float values.

## 6.4.0

### Minor Changes

- Added text underline to link hover states globally.

#### Select

- Added `multiple` support

#### Timeline [Beta]

- New beta component Timeline is now available

#### Slider

- Added `axis-labels` and `ticks-only` properties, providing tick mark and label support.

#### Textarea

- Added a `size` property. Removed unused `small` property. (This property had no effect so this is not a breaking change)

### Patch Changes

#### Switch

- Updated thumb hover state color to align with design.

#### Clock

- Updated the clock labels to align with design.

#### Tabs

- Updated to align with design

## 6.3.0

### Minor Changes

#### Notification

- Added a `small` prop allowing for a smaller variant.

#### Segmented Button

- Added `size` prop which accepts small, medium or large.

### Patch Changes

#### Notification

- Updated the padding around message and icon to match design.

#### Segmented Button

- Updated hover state styling to match design.

#### Push Button

- Added hover state styling to match design.

#### Monitoring Icon

- Updated the min height and width to match design.

#### Status

- Changed the overall size to be 12px to match design.

## 6.2.0

### Minor Changes

#### Button

- Adds a borderless prop to rux-button, enabling borderless styling.

#### Checkbox Group/Radio Group/Select/Textarea

- Adds required props and functionality to checkbox group, radio group, select and textarea.

### Patch Changes

#### Clock

- Updated margin-left on AOS from 16px to 17px.

#### Classification Marking

- Updated the overall height of classification-tags to match Figma designs. Overall height has gone from 20px -> 22px

#### Button

- Secondary button now has the correct text color on hover.

## 6.1.0

### Minor Changes

#### Icon

- Added new CSS Shadow Part `icon`
- Moved the `icon` shadow part in `rux-icon` to be on the SVG element.

#### Global Status Bar

- Added new CSS Shadow Parts: `icon`, `container`, `username`, and `app-state`

#### Pop Up Menu

- Added new CSS Shadow Part `container`

#### Clock

- Added new CSS Shadow Parts `date`, `date-label`, `time`, `time-label`, `aos`, `aos-label`, `los`, `los-label`.
- Clock now displays the julien date as always 3 digits

#### Button Group

- Added new CSS Shadow Part `container`

#### Button

- Added new CSS Shadow Part `container`

#### Monitoring Progress Icon

- Added new CSS Shadow Parts: `icon`, `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`, `container`, `icon-group`, `progress-display`, `radial-progress`, `status-icon`.

#### Monitoring Icon

- Added new CSS Shadow Parts: `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`.

#### Input

- Added `readonly`, `spellcheck`, and `autocomplete` attributes.
- Added new CSS Shadow Parts: `input`, `form-field`, `error-text`, and `help-text`.

#### Checkbox Group

- Added new CSS Shadow Parts: `error-text` and `help-text`.

#### Radio Group

- Added new CSS Shadow Parts: `error-text` and `help-text`.

#### Slider

- Added new CSS Shadow Parts: `input`, `error-text` and `help-text`.

#### Select

- Added new CSS Shadow Parts: `label`, `select`, `error-text` and `help-text`.

#### Textarea

- Added new CSS Shadow Parts: `textarea`, `error-text` and `help-text`.

#### Push Button

- Added new CSS Shadow Parts: `label` and `icon`.

#### Checkbox

- Added new CSS Shadow Parts: `form-field` and `label`.

#### Radio

- Added new CSS Shadow Parts: `form-field` and `label`.

#### Progress

- Added new CSS Shadow Parts: `progress` and `output`.

#### Modal

- Added new CSS Shadow Parts: `confirm-button` and `deny-button`.

#### Segmented Button

- Added new CSS Shadow Part `label`.

#### Switch

- Added new CSS Shadow Part `switch`. The pseudo selectors ::before select the track, ::after selects the button.

#### Menu Item

- Added new CSS Shadow Part `container`.

#### Menu Item Divider

- Added new CSS Shadow Part `container`.

#### Classification Marking

- Added new CSS Shadow Parts: `footer`, `tag`, and `header`.
- Deprecated CSS Shadow Part `footer-header`. Use `footer` instead.

### Patch Changes

- Fixes issue [#121](https://github.com/RocketCommunicationsInc/astro/issues/121) where boolean attributes in React were not behaving as intended.
