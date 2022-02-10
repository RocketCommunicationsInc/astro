# @astrouxds/angular

## 0.0.0-timeline-alpha.0-20220210144104

### Minor Changes

- Fixed issue with reloading

### Patch Changes

- Updated dependencies
  - @astrouxds/astro-web-components@0.0.0-timeline-alpha.0-20220210144104

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
