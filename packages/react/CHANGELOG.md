# @astrouxds/astro-web-components

## 6.5.0

### Minor Changes

- f803245f: Added different sizes to rux-select through a size prop.
- 270395cf: Adds a disabled prop to rux-option along with relevant styling.
- 12f8b250: Added date and datetime-local types to rux-input along with styling.
- 04cb102b: Created a new rux-tag component.
- c76c66a3: Added a prefix and suffix named slots to input, refactored password input types.

### Patch Changes

- e2c82384: Update components to use the new beta design tokens
- 3a000967: Moves width attribute out of shadow dom, can now be styled without CSS parts.
- 57028e86: fix(notification): Watch closeAfter to close when updated
- 167b3c1e: Changes the value logic on slider to accept float values.
- Updated dependencies [f803245f]
- Updated dependencies [e2c82384]
- Updated dependencies [3a000967]
- Updated dependencies [270395cf]
- Updated dependencies [57028e86]
- Updated dependencies [167b3c1e]
- Updated dependencies [12f8b250]
- Updated dependencies [04cb102b]
- Updated dependencies [c76c66a3]
  - @astrouxds/astro-web-components@6.5.0

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
