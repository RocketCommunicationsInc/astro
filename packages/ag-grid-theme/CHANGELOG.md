# Change Log

## 0.0.0-6.1-rc-20220114175111

### Minor Changes

- bf124a9a: Added a icon shadow part to rux-icon.
- fd46c955: Adds a container shadow part to rux-global-status-bar
- 870fc94a: Added a container shadow part to rux-pop-up-menu's ul.
- a4dc217b: Added shadow parts to rux-clock
- 0c572233: Added a container CSS part to rux-button-group
- 6984c56e: Adds a 'container' shadow part to rux-button
- fd46c955: Added username and app-state shadow parts to rux-global-status-bar
- f596ee2f: - Monitoring Progress Icon
  - Adds new CSS Shadow Parts for `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`, `container`, `icon-group`, `progress-display`, `radial-progress`, `status-icon`.
  - Monitoring Icon
    - Adds new CSS Shadow Parts for `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`.
- fb98893a: ** Input ** - Adds `readonly`, `spellcheck`, and `autocomplete` attributes.
- 37013b01: Moved the icon shadow part in rux-icon to be on the SVG element.
  Added exportparts to rux-icon in rux-monitoring-icon.
  Added label and icon shadow parts to rux-push-button.
  Added progress and output shadow shadow parts to rux-progress.
  Added confirm-button and deny-button to the modal's rux-buttons as shadow parts.
  Added label shadow part to rux-segmented-button
  Added switch shadow part to rux-switch. The pseudo selectors ::before select the track, ::after selects the button.
  Added input, form-field shadow parts to rux-input
  Added error-text and help-text parts to FormFieldMessage to allow styling of help/error text.
  Added form-field and label shadow parts to rux-checkbox.
  Added form-field and label shadow parts to rux-radio.
  Added label and select shadow parts to rux-select.
  Added input shadow part to rux-input.
  Added input shadow part to rux-slider
  Added texarea shadow part to rux-textarea
  Added container shadow part to rux-menu-item.
  Added container shadow part to rux-menu-item-divider
  Added exportparts to rux-icon inside of rux-global-status-bar
- fa57e891: Added tag and header part to classification banner/tag, added footer part and notice of deprecation of footer-banner

### Patch Changes

- fb98893a: Fixes issue [#121](https://github.com/RocketCommunicationsInc/astro/issues/121) where boolean attributes in React were not behaving as intended.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.4.5](https://github.com/RocketCommunicationsInc/ag-grid-theme/compare/v1.0.0...v4.4.5) (2021-10-20)

### Reverts

- Revert "v1.0.0" ([06dced8](https://github.com/RocketCommunicationsInc/ag-grid-theme/commit/06dced8207a425c9d778cf6bb6fedd6c96aadbb7))
