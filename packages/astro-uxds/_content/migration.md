---
path: /migration
date: Last Modified
layout: interior.template.njk
title: "Migration"
---

# Migration Guide

### High Impact Changes

- [Modal - Component Removed](/)
- [Pop Up Menu - Rewrite](/)

### Medium Impact Changes

- [Progress - Indeterminate Progress Component](/)
- [Angular - Drop Support for <= v11](/)
- [Component CSS Custom Properties](/)

### Low Impact Changes

- [Clock - Host Style Changes](/)
- [Checkbox Group - Host Style Changes](/)
- [Classification Marking - Host Style Changes](/)
- [Dialog - Click To Close](/)
- [Global Status Bar - Host Style Changes](/)
- [Global Status Bar - Text Case](/)
- [Icon - Label Removal](/)
- [Monitoring Progress Icon - Host Style Changes](/)
- [Notification - Host Style Changes](/)
- [Progress - Host Style Changes](/)
- [Push Button - Part Rename](/)
- [Segmented Button - Medium Default Size](/)
- [Switch - Host Style Changes](/)
- [Tab - Host Style Changes](/)
- [Table - Borders Removed](/)
- [Tree Node - Host Style Changes](/)

## CSS Custom Properties

> As part of 7.0, we have removed the majority of our component's CSS Custom Properties in order to provide a cleaner API. CSS Shadow Parts are now the preferred way to customize the look and feel of your components. The majority of these properties were created before Shadow Parts existed and, as a result, they are quite verbose and have their own limitations.

The following CSS Custom Properties have been deprecated and will be removed in 7.0. You should search your code base to see if you are using them and migrate to using the new parts syntax if you are.

| CSS Custom Prop                           | Migration                                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| --button-active-background-color          | `rux-button::part(container):active { background-color: red;}`                                                                  |
| --button-active-border-color              | `rux-button::part(container):active { border-color: red;}`                                                                      |
| --button-background-color                 | `rux-button::part(container) { background: red; }`                                                                              |
| --button-border-color                     | `rux-button::part(container) { border-color: red;}`                                                                             |
| --button-borderless-hover-color           | `rux-button[borderless]::part(container):hover { color: red;}`                                                                  |
| --button-borderless-text-color            | `rux-button[borderless]::part(container) { color: red;}`                                                                        |
| --button-secondary-background-color       | `rux-button[secondary]::part(container) { background-color: red;}`                                                              |
| --button-secondary-border-color           | `rux-button[secondary]::part(container) { border-color: red; }`                                                                 |
| --button-secondary-hover-background-color | `rux-button[secondary]::part(container):hover { background-color: red;}`                                                        |
| --button-secondary-hover-border-color     | `rux-button[secondary]::part(container):hover { border-color: red;}`                                                            |
| --button-secondary-hover-text-color       | `rux-button[secondary]::part(container):hover { color: red;}`                                                                   |
| --button-secondary-text-color             | `rux-button[secondary]::part(container) { color: red; }`                                                                        |
| --checkbox-label-color                    | `rux-checkbox::part(label) { color: red; }`                                                                                     |
| --checkbox-background-color               | `rux-checkbox::part(label)::before { background: green; }`                                                                      |
| --checkbox-border-color                   | `rux-checkbox::part(label)::before { border-color: green; }`                                                                    |
| --checkboxgroup-border-color              | `rux-checkbox-group::part(container) { border-color: green; }`                                                                  |
| --checkbox-checked-color                  | `rux-checkbox::part(label)::after { border-color: red; }`                                                                       |
| --checkbox-hover-border-color             | `rux-checkbox::part(label):hover::before { border-color: yellow;}`                                                              |
| --color-classification-text-light         | `rux-classification-marking::part(container) { color: red; }`                                                                   |
| --color-classification-text-dark          | `rux-classification-marking::part(container) { color: red; }`                                                                   |
| --clock-background-color                  | `rux-clock::part(date), rux-clock::part(time) { background-color: red; }`                                                       |
| --clock-border-color                      | `rux-clock::part(date), rux-clock::part(time) { border-color: red; }`                                                           |
| --clock-label-color                       | `rux-clock::part(date-label), rux-clock::part(time-label) { color: red; }`                                                      |
| --icon-default-color                      | `rux-icon::part(icon) { color: red;}`                                                                                           |
| --log-header-background-color             | Construct your own table and pass it in the `table` slot to have full control over the styling                                  |
| --log-filter-background-color             | `rux-log::part(log-notification) { background-color: red;}`                                                                     |
| --log-filter-text-color                   | `rux-log::part(log-notification) { color: red;}`                                                                                |
| --modal-title-color                       | `rux-modal::part(header) { color: red; }`                                                                                       |
| --notification-text-color                 | `rux-notification::part(container) { color: red;}`                                                                              |
| --pushbutton-background-color             | `rux-push-button::part(label) { background-color: red;}`                                                                        |
| --pushbutton-border-color                 | `rux-push-button::part(label) { border-color: red; }`                                                                           |
| --pushbutton-text-color                   | `rux-push-button::part(label) { color: red; }`                                                                                  |
| --radio-hover-border-color                | `rux-radio::part(label):hover::before { border-color: red; }`                                                                   |
| --radio-border-color                      | `rux-radio::part(label)::before { border-color: red; }`                                                                         |
| --radio-label-color                       | `rux-radio::part(label) { color: red;}`                                                                                         |
| --radio-background-color                  | `rux-radio::part(label)::before { background-color: red; }`                                                                     |
| --radio-selected-color                    | `rux-radio::part(label)::after { background-color: red; }`                                                                      |
| --radiogroup-border-color                 | `rux-radio-group::part(radiogroup) { border-color: green; }`                                                                    |
| --segmented-button-background-color       | `rux-segmented-button::part(label) { background-color: red; }`                                                                  |
| --segmented-button-text-color             | `rux-segmented-button::part(label) { color: red; }`                                                                             |
| --segmented-button-border-color           | `rux-segmented-button::part(label) { border-color: red; }`                                                                      |
| --segmented-button-hover-background-color | `rux-segmented-button::part(label):hover { background-color: red; }`                                                            |
| --segmented-button-hover-text-color       | `rux-segmented-button::part(label):hover { color: red; }`                                                                       |
| --select-menu-border-radius               | `rux-select::part(select) { border-radius: 0px; }`                                                                              |
| --select-menu-border-hover-color          | `rux-select::part(select):hover { border-color: red; }`                                                                         |
| --select-menu-border-focus-color          | `rux-select::part(select):focus { border-color: red; }`                                                                         |
| --select-menu-invalid-border-color        | `rux-select[invalid]::part(select) { border-color: yellow; }`                                                                   |
| --select-menu-text-color                  | `rux-select::part(select) { color: red; }`                                                                                      |
| --select-menu-label-color                 | `rux-select::part(label) { color: red; }`                                                                                       |
| --select-menu-border-color                | `rux-select::part(select) { border-color: red; }`                                                                               |
| --table-border-color                      | `rux-table { border-color: red; }` NOTE: Table styles are applied on the element `:host` and do not require parts               |
| --table-row-hover-text-color              | `rux-table-row:hover { color: red; }` NOTE: Table styles are applied on the element `:host` and do not require parts            |
| --table-row-hover-background-color        | `rux-table-row:hover { background-color: red; }` NOTE: Table styles are applied on the element `:host` and do not require parts |
| --table-row-border-color                  | `rux-table-cell { border-color: red; }` NOTE: Table styles are applied on the element `:host` and do not require parts          |
| --table-row-text-color                    | `rux-table { color: red; }` NOTE: Table styles are applied on the element `:host` and do not require parts                      |
| --table-row-background-color              | `rux-table { background-color: red; }` NOTE: Table styles are applied on the element `:host` and do not require parts           |
| --table-header-border-color               | `rux-table-header { border-color: red; }` NOTE: Table styles are applied on the element `:host` and _do_ not require parts      |
| --textarea-border-color                   | `rux-textarea::part(textarea) { border-color: red; }`                                                                           |
| --textarea-text-color                     | `rux-textarea::part(textarea) { color: red; }`                                                                                  |
| --textarea-focus-border-color             | `rux-textarea::part(textarea):focus { border-color: red; }`                                                                     |
| --textarea-selection-background-color     | `rux-textarea::part(textarea)::selection { background-color: red; }`                                                            |
| --tree-background-color                   | `rux-tree { background-color: red; }`                                                                                           |

## Removals

The following Custom Properties currently do not have a 1:1 equivalent with the shadow parts API. Some of these may be added back in future minor releases.

| CSS Custom                                     | Migration                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------- |
| --input-background-color                       | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --input-text-color                             | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --input-focus-border-color                     | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --input-selection-background-color             | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --input-invalid-border-color                   | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --menu-item-divider-border-color               | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --progress-padding                             |                                                                                             |
| --modal-background-color                       |                                                                                             |
| --modal-border-color                           |                                                                                             |
| --clock-text-color                             | `rux-clock::part(container) { color: red; }` **`container` part is only available in 7.0`** |
| --progress-radius                              |                                                                                             |
| --progress-height                              |                                                                                             |
| --progress-width                               |                                                                                             |
| --progress-determinate-bar-background-color    |                                                                                             |
| --progress-determinate-track-background-color  |                                                                                             |
| --progress-determinate-track-border-color      |                                                                                             |
| --progress-label-color                         |                                                                                             |
| --pushbutton-selected-background-color         | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --pushbutton-selected-border-color             | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --pushbutton-selected-text-color               | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --pushbutton-selected-hover-text-color         | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --segmented-button-hover-border-color          |                                                                                             |
| --segmented-button-selected-background-color   |                                                                                             |
| --select-menu-option-text-hover-color          |                                                                                             |
| --select-menu-option-selected-background-color |                                                                                             |
| --select-menu-option-selected-text-color       |                                                                                             |
| --select-menu-inactive-caret                   |                                                                                             |
| --select-menu-active-caret                     |                                                                                             |
| --select-menu-background-color                 |                                                                                             |
| --slider-thumb-background-color                |                                                                                             |
| --slider-thumb-border-color                    |                                                                                             |
| --slider-hover-thumb-background-color          |                                                                                             |
| --slider-hover-thumb-border-color              |                                                                                             |
| --slider-track-background-color                |                                                                                             |
| --slider-selected-thumb-border-color           |                                                                                             |
| --slider-thumb-size                            |                                                                                             |
| --slider-thumb-border-size                     |                                                                                             |
| --slider-tick-padding-top                      |                                                                                             |
| --slider-selected-track-background-color       |                                                                                             |
| --slider-value-percent                         |                                                                                             |
| --slider-top                                   |                                                                                             |
| --slider-track-height                          |                                                                                             |
| --slider-track-before-thumb-height             |                                                                                             |
| --switch-background-color                      |                                                                                             |
| --switch-hover-on-color                        |                                                                                             |
| --switch-hover-off-color                       |                                                                                             |
| --switch-on-color                              |                                                                                             |
| --switch-off-border-color                      |                                                                                             |
| --tab-text-color                               | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tab-border-color                             | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tab-hover-text-color                         | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tab-selected-text-color                      | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --table-header-background-color                |                                                                                             |
| --table-header-text-color                      |                                                                                             |
| --table-header-box-shadow                      |                                                                                             |
| --table-row-selected-background-color          |                                                                                             |
| --table-row-selected-border-color              |                                                                                             |
| --tree-text-color                              | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tree-border-color                            | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tree-accent-color                            | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tree-hover-background-color                  | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tree-hover-text-color                        | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tree-selected-border-color                   | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tree-selected-accent-color                   | Additional parts may be added in future 7.X releases to allow this level of customization   |
| --tree-expanded-border-color                   | Additional parts may be added in future 7.X releases to allow this level of customization   |

## Angular

### Drop Support for <= v11

**Likelihood of Impact: Medium**
Our Angular wrapper has dropped support for Angular versions <= 11. This aligns with [Angular's own support policy](https://angular.io/guide/releases).

**Resolution:** It is recommended that you upgrade your application to Angular v12+.

## Clock

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the `color` by targeting the `rux-clock` element instead of using the available CSS Shadow Parts.

```
rux-clock {
   color: red;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-clock::part(container) {
   color:red;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-clock` directly and replace with the appropriate CSS Shadow Part.

Clock's default `display` property has been changed from `flex` to `inline-block`.

**Resolution:** If you were relying on the element to be `display: flex`, you can change the `display` yourself on the root.

```
rux-clock {
  display: flex;
}
```

## Checkbox Group

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the following CSS properties by targeting the `rux-checkbox-group` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

```
rux-checkbox-group {
   color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-checkbox-group::part(container) {
   color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-checkbox-group` directly and replace with the appropriate CSS Shadow Part.

## Classification Marking

**Likelihood of Impact: Low**

The deprecated `footer-banner` CSS Shadow Part has been removed

**Resolution:** Search your application's CSS for anything targeting `::part(footer-banner)` and replace with `::part(footer)`

## Dialog

### Click to Close

**Likelihood of Impact: Low**

Dialog will no longer close when clicking outside by default to align with Astro UXDS compliance requirements 4.3.3: "Dialog Boxes shall be closed only with confirm or cancel Buttons."

**Resolution:** If you need to restore this functionality, you may use the new `click-to-close`property.

```
<rux-dialog click-to-close></rux-dialog>

```

## Global Status Bar

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the following CSS properties by targeting the `rux-global-status-bar` element instead of using the available CSS Shadow Parts: `font-family`, `line-height`, `letter-spacing`.

```
rux-global-status-bar {
   font-family: Arial;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-global-status-bar::part(container) {
   font-family: Arial;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-global-status-bar` directly and replace with the appropriate CSS Shadow Part.

### Text Case

**Likelihood of Impact: Low**

The `app-domain` and `app-name` properties are no longer uppercase by default.

**Resolution:** Add your own style via the `container` CSS Shadow Part

```
rux-global-status-bar::part(container) {
	text-transform: uppercase;
}
```

## Icon

### Label Removal

**Likelihood of Impact: Low**

The `label` attribute has been removed and the `title` for our icons no longer defaults to the icon name. This was causing confusion because the browser would display the title as a tooltip when an icon was used inside a button. Because accessibility for svgs can be complicated and heavily dependent on context, we've decided to remove this feature for now.

**Resolution:** If you need more control over the `title` and aria attributes of our icons, it is recommended that you instead [import and use our svg assets](https://github.com/RocketCommunicationsInc/astro/tree/main/packages/web-components/src/icons) directly.

## Modal

### Component Removed

**Likelihood of Impact: High**

Modal has been renamed to Dialog. The new Dialog component has the same API as Modal.

** Resolution:** Search your application for any instances of `<rux-modal>` and replace them with `<rux-dialog>`.

## Monitoring Progress Icon

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the `color` CSS properties by targeting the `rux-monitoring-progress-icon` element instead of using the available CSS Shadow Parts.

```
rux-monitoring-progress-icon {
   color: red;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-monitoring-progress-icon::part(container) {
   color: red;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-monitoring-progress-icon` directly and replace with the appropriate CSS Shadow Part.

## Notification

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the following CSS properties by targeting the `rux-notification` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `padding`.

```
rux-notification {
   color: red;
   padding: 1rem;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-notification::part(container) {
   color: red;
   padding: 1rem;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-notification` directly and replace with the appropriate CSS Shadow Part.

## Pop Up Menu

### Rewrite

**Likelihood of Impact: High**
Pop Up Menu has been rewritten entirely and now uses [Floating UI](https://floating-ui.com/) under the hood to provide greater flexibility for positioning.

@TODO

**Resolution:**

1. Search your application for any usage

## Progress

### Indeterminate Progress Component

**Likelihood of Impact: Medium**
The indeterminate spinner functionality of `rux-progress` has been removed and is now it's own separate `<rux-indeterminate-progress>` component.

**Resolution:**
Search your application for any usage of `<rux-progress>` in it's indeterminate state. `rux-progress` is considered indeterminate if no `value` property is present. Replace `<rux-progress>` with `<rux-indeterminate-progress>`.

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the following CSS properties by targeting the `rux-progress` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

```
rux-progress {
   color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-progress::part(output), rux-progress::part(progress) {
   color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-progress` directly and replace with the appropriate CSS Shadow Part.

## Push Button

### Part Rename

**Likelihood of Impact: Low**
The `label` CSS Shadow Part has been renamed to `container`to be more consistent with other components.
**Resolution:** Search your application for any usage of `rux-push-button::part(label)` and replace it with `rux-push-button::part(container)`.

## Segmented Button

### Medium Default Size

**Likelihood of Impact: Low**

The default `size ` property is now `medium` instead of `small`.
**Resolution:** Search your app for `rux-segmented-button` and manually add set the `size` property to `small` where desired.

## Switch

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the following CSS properties by targeting the `rux-switch` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

```
rux-switch {
   color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-switch::part(label), rux-switch::part(switch) {
   color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-switch` directly and replace with the appropriate CSS Shadow Part.

## Tab

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the following CSS properties by targeting the `rux-tab` element instead of using the available CSS Shadow Parts: `border-color`, `border-bottom`, `min-width`, `padding` ,`font-family`, `font-size`, `font-weight`, `letter-spacing`.

```
rux-tab {
   color: red;
   min-width: 3rem;
   padding: 1rem;
   border-bottom: 2px solid red;
   border-color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   letter-spacing: 0.3em;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-tab::part(container) {
   color: red;
   min-width: 3rem;
   padding: 1rem;
   border-bottom: 2px solid red;
   border-color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-tab` directly and replace with the appropriate CSS Shadow Part.

## Table

### Borders Removed

**Likelihood of Impact: Low**

The right and left borders have been removed by default to make them easier to use within Cards and Containers.

**Resolution:** You can manually reapply the left and right borders by targeting the host element itself:

```
rux-table {
  border: 1px solid var(--color-background-base-default);
}
```

## Tree Node

### Host Style Changes

**Likelihood of Impact: Low**

Previously it was possible to change the following CSS properties by targeting the `rux-tree-node` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

```
rux-tree-node {
   color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```
rux-tree-node::part(#TODOFINDTHERIGHTPART;) {
   color: red;
   font-family: Arial;
   font-size: 2rem;
   font-weight: 800;
   line-height: 1;
   letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-tree-node` directly and replace with the appropriate CSS Shadow Part.