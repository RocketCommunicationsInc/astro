---
path: /migration
date: Last Modified
layout: interior.template.njk
title: "Migration"
class: "page-migration"
---

# Migration Guide

## By Impact

### High Impact

- [Angular Drop Support for v11](#drop-support-for-v11)
- [Dialog - Prop Rename](#prop-rename)
- [Modal - Component Renamed](#component-renamed)
- [Pop Up - Rewrite](#rewrite)
- [Pop Up - Event Changes](#event-changes)
- [Pop Up - Method Changes](#method-changes)
- [Pop Up - Slot Removal](#slot-removal)

### Medium Impact

- [Progress - Indeterminate Progress Component](#indeterminate-progress-component)
- [Tree Node - Icons Prefix Slot](#icons-prefix-slot)

### Low Impact

- [Pop Up Menu - Component Renamed](#component-renamed-1)
- [Button - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties)
- [Clock - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-1)
- [Clock - Host Style Changes](#host-style-changes)
- [Checkbox - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-2)
- [Checkbox Group - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-3)
- [Checkbox Group - Host Style Changes](#host-style-changes-1)
- [Classification Marking - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-4)
- [Classification Marking - Remove Deprecated Part](#remove-deprecated-part)
- [Dialog - Click to Close](#click-to-close)
- [Global Status Bar - Host Style Changes](#host-style-changes-2)
- [Global Status Bar - Text Case](#text-case)
- [Icon - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-5)
- [Icon - Label Removal](#label-removal)
- [Input - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-6)
- [Log - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-7)
- [Modal - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-8)
- [Monitoring Progress Icon - Host Style Changes](#host-style-changes-3)
- [Notification - Host Style Changes](#host-style-changes-4)
- [Notification - Remove Deprecated CSS Custom Properties](#)
- [Pop Up - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-9)
- [Progress - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-10)
- [Progress - Host Style Changes](#host-style-changes-5)
- [Push Button - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-11)
- [Push Button - Part Rename](#part-rename)
- [Radio - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-12)
- [Radio Group - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-13)
- [Segmented Button - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-14)
- [Segmented Button - Medium Default Size](#medium-default-size)
- [Select - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-15)
- [Slider - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-16)
- [Switch - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-17)
- [Switch - Host Style Changes](#host-style-changes-6)
- [Tab - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-18)
- [Tab - Host Style Changes](#host-style-changes-7)
- [Table - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-19)
- [Table - Borders Removed](#borders-removed)
- [Textarea - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-20)
- [Tree - Remove Deprecated CSS Custom Properties](#remove-deprecated-css-custom-properties-21)
- [Tree Node - Host Style Changes](#host-style-changes-8)

## Config

Our `dist/custom-elements` build has been removed in favor of a more lightweight and better tree-shakeable `dist/components` build. Search your project for any reference to `dist/custom-elements` and replace it with `dist/components`.

## Angular

### Drop Support for v11

**Likelihood of Impact:** High

Our Angular wrapper has dropped support for Angular versions <= 11. This aligns with [Angular's own support policy](https://angular.io/guide/releases).

**Resolution:** Upgrade your application to Angular v12+.

## Button

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --button-active-background-color
  - --button-active-border-color
  - --button-background-color
  - --button-border-color
  - --button-borderless-hover-color
  - --button-borderless-text-color
  - --button-secondary-background-color
  - --button-secondary-border-color
  - --button-secondary-hover-background-color
  - --button-secondary-hover-border-color
  - --button-secondary-hover-text-color
  - --button-secondary-text-color

**Resolution:** View the CSS Custom Properties Migration document for more details.

## Clock

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact: Low**

- The following deprecated CSS Custom Properties have been removed:
  - --clock-background-color
  - --clock-border-color
  - --clock-label-color
  - --clock-text-color

**Resolution:** View the CSS Custom Properties Migration document for more details.

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the `color` by targeting the `rux-clock` element instead of using the available CSS Shadow Parts.

```css
rux-clock {
  color: red;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```css
rux-clock::part(container) {
  color: red;
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

## Checkbox

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --checkbox-label-color
  - --checkbox-background-color
  - --checkbox-border-color
  - --checkbox-checked-color
  - --checkbox-hover-border-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Checkbox Group

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --checkboxgroup-border-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the following CSS properties by targeting the `rux-checkbox-group` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

```css
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

```css
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

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --color-classification-text-light
  - --color-classification-text-dark

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Remove Deprecated Part

**Likelihood of Impact:** Low

The deprecated `footer-banner` CSS Shadow Part has been removed

**Resolution:** Search your application's CSS for anything targeting `::part(footer-banner)` and replace with `::part(footer)`

## Dialog

### Prop Rename

**Likelihood of Impact:** High

The `dialog-title` (`modal-title`) property has been renamed to `header`.

The `dialog-message` (`modal-message`) property has been renamed to `message`.

### Click to Close

**Likelihood of Impact:** Low

Dialog will no longer close when clicking outside by default to align with Astro UXDS compliance requirements 4.3.3: "Dialog Boxes shall be closed only with confirm or cancel Buttons."

**Resolution:** If you need to restore this functionality, you may use the new `click-to-close`property.

```html
<rux-dialog click-to-close></rux-dialog>
```

## Global Status Bar

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the following CSS properties by targeting the `rux-global-status-bar` element instead of using the available CSS Shadow Parts: `font-family`, `line-height`, `letter-spacing`.

```css
rux-global-status-bar {
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.3em;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```css
rux-global-status-bar::part(container) {
  font-family: Arial;
  line-height: 1;
  letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-global-status-bar` directly and replace with the appropriate CSS Shadow Part.

### Text Case

**Likelihood of Impact:** Low

The `app-domain` and `app-name` properties are no longer uppercase by default.

**Resolution:** Add your own style via the `container` CSS Shadow Part

```css
rux-global-status-bar::part(container) {
  text-transform: uppercase;
}
```

## Icon

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The deprecated `--icon-default-color` CSS Custom Property has been removed.

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Label Removal

**Likelihood of Impact:** Low

The `label` attribute has been removed and the `title` for our icons no longer defaults to the icon name. This was causing confusion because the browser would display the title as a tooltip when an icon was used inside a button. Because accessibility for svgs can be complicated and heavily dependent on context, we've decided to remove this feature for now.

**Resolution:** If you need more control over the `title` and aria attributes of our icons, it is recommended that you instead [import and use our svg assets](https://github.com/RocketCommunicationsInc/astro/tree/main/packages/web-components/src/icons) directly.

## Input

### Remove Deprecated CSS Custom Properties

- The following deprecated CSS Custom Properties have been removed:
  - --input-background-color
  - --input-text-color
  - --input-focus-border-color
  - --input-selection-background-color
  - --input-invalid-border-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Log

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --log-header-background-color
  - --log-filter-background-color
  - --log-filter-text-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Modal

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --modal-title-color
  - --modal-background-color
  - --modal-border-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Component Renamed

**Likelihood of Impact:** High

Modal has been renamed to Dialog. The new Dialog component has the same API as Modal.

**Resolution:** Search your application for any instances of `<rux-modal>` and replace them with `<rux-dialog>`.

## Monitoring Progress Icon

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the `color` CSS properties by targeting the `rux-monitoring-progress-icon` element instead of using the available CSS Shadow Parts.

```css
rux-monitoring-progress-icon {
  color: red;
}
```

These styles have now been properly moved to the shadow dom and require the use of CSS Shadow Parts.

```css
rux-monitoring-progress-icon::part(container) {
  color: red;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-monitoring-progress-icon` directly and replace with the appropriate CSS Shadow Part.

## Notification

### Remove Parent Styling

**Likelihood of Impact:** High

Notifications no longer require a parent element with `position: relative` and `overflow: hidden` applied.

**Resolution:** Check your implementation of `rux-notification` and remove the `position: relative` and `overflow: hidden` styles.

### Multiple Notification Stacking

**Likelihood of Impact:** High

Multiple sibling notifications will no longer stack by default. Previously, you could have multiple notifications and they would stack on top of each other. Because only one notification should be visible at a time, you should only need one element in the DOM.

**Resolution:** You'll need to add some of your own custom logic to manage which notification should be presented. [Consult the documentation for more details](https://astro-components.netlify.app/?path=/docs/components-notification--default-story#multiple-notifications)

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --notification-icon-color
  - --notification-text-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the following CSS properties by targeting the `rux-notification` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `padding`.

```css
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

```css
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

## Pop Up [New]

### Rewrite

**Likelihood of Impact:** High

Pop Up Menu has been rewritten entirely and now uses [Floating UI](https://floating-ui.com/) under the hood to provide greater flexibility for positioning.

```html
<rux-icon icon="apps" aria-controls="popup-menu-1"></rux-icon>
<rux-pop-up-menu id="popup-menu-1">
  <rux-menu-item>Item 1</rux-menu-item>
  <rux-menu-item-divider></rux-menu-item-divider>
  <rux-menu-item value="2" style="max-width: 344px">Item 2</rux-menu-item>
  <rux-menu-item disabled="">Item 3 is disabled</rux-menu-item>
  <rux-menu-item value="Item 4">Item 4 has a string value</rux-menu-item>
  <rux-menu-item href="https://www.astrouxds.com"
    >Item 5 is an anchor/action item...</rux-menu-item
  >
</rux-pop-up-menu>
```

New:

```html
<rux-pop-up open placement="right">
  <rux-icon icon="apps" slot="trigger"></rux-icon>
  <rux-menu>
    <rux-menu-item value="1">Menu Item 1</rux-menu-item>
    <rux-menu-item value="2">Menu Item 2</rux-menu-item>
    <rux-menu-item value="3">Menu Item 3</rux-menu-item>
  </rux-menu>
</rux-pop-up>
```

### Event Changes

**Likelihood of Impact:** High

The following events have been removed: `ruxmenuwillclose`, `ruxmenuwillopen`.
The `ruxmenudidclose` event has been renamed to `ruxpopupclosed`.
The `ruxmenudidopen` event has been renamed to `ruxpopupopened`.

### Method Changes

**Likelihood of Impact:** High

- The `close` method has been removed. Use `hide` instead.
- The `isOpen` method has been removed. Use the `open` property to check if the menu is open.
- The `toggle` method has been removed. Use the `show` or `hide` methods where appropriate.

### Slot Removal

**Likelihood of Impact:** High

The `menu-end` slot has been removed. Use a regular `rux-menu-item` and style it accordingly.

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --popup-menu-background-color
  - --popup-menu-border-color
  - --popup-menu-caret-background-color
  - --popup-menu-caret-left
  - --menu-item-divider-border-color
  - --popup-menu-caret-size
  - --popup-menu-transition-speed

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Pop Up Menu

### Component Renamed

**Likelihood of Impact:** High

Pop Up Menu has been removed and has been split into separate **Pop Up** and **Menu** components.

## Progress

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --progress-padding
  - --progress-radius
  - --progress-height
  - --progress-width
  - --progress-determinate-bar-background-color
  - --progress-determinate-track-background-color
  - --progress-determinate-track-border-color
  - --progress-label-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Indeterminate Progress Component

**Likelihood of Impact:** Medium

The indeterminate spinner functionality of `rux-progress` has been removed and is now it's own separate `<rux-indeterminate-progress>` component.

**Resolution:**

Search your application for any usage of `<rux-progress>` in it's indeterminate state. `rux-progress` is considered indeterminate if no `value` property is present. Replace `<rux-progress>` with `<rux-indeterminate-progress>`.

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the following CSS properties by targeting the `rux-progress` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

```css
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

```css
rux-progress::part(output),
rux-progress::part(progress) {
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

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --pushbutton-background-color
  - --pushbutton-border-color
  - --pushbutton-text-color
  - --pushbutton-selected-background-color
  - --pushbutton-selected-border-color
  - --pushbutton-selected-text-color
  - --pushbutton-selected-hover-text-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Part Rename

**Likelihood of Impact:** Low

The `label` CSS Shadow Part has been renamed to `container`to be more consistent with other components.
**Resolution:** Search your application for any usage of `rux-push-button::part(label)` and replace it with `rux-push-button::part(container)`.

## Radio

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --radio-hover-border-color
  - --radio-border-color
  - --radio-label-color
  - --radio-background-color
  - --radio-selected-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Radio Group

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The deprecated `--radiogroup-border-color` CSS Custom Property has been removed.

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Segmented Button

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed: - --segmented-button-background-color - --segmented-button-text-color - --segmented-button-border-color - --segmented-button-hover-background-color - --segmented-button-hover-text-color - --segmented-button-hover-border-color - --segmented-button-selected-background-color
  **Resolution:** View the CSS Custom Properties Migration doc for more details.

### Medium Default Size

**Likelihood of Impact:** Low

The default `size` property is now `medium` instead of `small`.
**Resolution:** Search your app for `rux-segmented-button` and manually add set the `size` property to `small` where desired.

## Select

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --select-menu-border-radius
  - --select-menu-border-hover-color
  - --select-menu-border-focus-color
  - --select-menu-invalid-border-color
  - --select-menu-text-color
  - --select-menu-label-color
  - --select-menu-border-color
  - --select-menu-option-text-hover-color
  - --select-menu-option-selected-background-color
  - --select-menu-option-selected-text-color
  - --select-menu-inactive-caret
  - --select-menu-active-caret
  - --select-menu-background-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Slider

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --slider-thumb-background-color
  - --slider-thumb-border-color
  - --slider-hover-thumb-background-color
  - --slider-hover-thumb-border-color
  - --slider-track-background-color
  - --slider-selected-thumb-border-color
  - --slider-thumb-size
  - --slider-thumb-border-size
  - --slider-tick-padding-top
  - --slider-selected-track-background-color
  - --slider-value-percent
  - --slider-top
  - --slider-track-height

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Switch

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --switch-background-color
  - --switch-hover-on-color
  - --switch-hover-off-color
  - --switch-on-color
  - --switch-off-border-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the following CSS properties by targeting the `rux-switch` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

```css
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

```css
rux-switch::part(label),
rux-switch::part(switch) {
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

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --tab-text-color
  - --tab-border-color
  - --tab-hover-text-color
  - --tab-selected-text-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the following CSS properties by targeting the `rux-tab` element instead of using the available CSS Shadow Parts: `border-color`, `border-bottom`, `min-width`, `padding` ,`font-family`, `font-size`, `font-weight`, `letter-spacing`.

```css
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

```css
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

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --table-border-color
  - --table-row-hover-text-color
  - --table-row-hover-background-color
  - --table-row-border-color
  - --table-row-text-color
  - --table-row-background-color
  - --table-header-border-color
  - --table-header-background-color
  - --table-header-text-color
  - --table-header-box-shadow
  - --table-row-selected-background-color
  - --table-row-selected-border-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

### Borders Removed

**Likelihood of Impact:** Low

The right and left borders have been removed by default to make them easier to use within Cards and Containers.

**Resolution:** You can manually reapply the left and right borders by targeting the host element itself:

```css
rux-table {
  border: 1px solid var(--color-background-base-default);
}
```

## Textarea

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --textarea-border-color
  - --textarea-text-color
  - --textarea-focus-border-color
  - --textarea-selection-background-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Tree

### Remove Deprecated CSS Custom Properties

**Likelihood of Impact:** Low

- The following deprecated CSS Custom Properties have been removed:
  - --tree-text-color
  - --tree-border-color
  - --tree-accent-color
  - --tree-hover-background-color
  - --tree-hover-text-color
  - --tree-selected-border-color
  - --tree-selected-accent-color
  - --tree-expanded-border-color
  - --tree-background-color

**Resolution:** View the CSS Custom Properties Migration doc for more details.

## Tree Node

### Icons Prefix Slot

**Likelihood of Impact:** Medium

The default display for content inside Tree Nodes and may break your application if you are using the Tree Node with icons or status symbols.

```html
<rux-tree-node>
  <rux-status status="critical"></rux-status>
  Tree Node 1.1
</rux-tree-node>
```

```html
<rux-tree-node>
  <rux-status slot="prefix" status="critical"></rux-status>
  Tree Node 1.1
</rux-tree-node>
```

**Resolution:** Add `slot="prefix"` to any icons or status symbols.

### Host Style Changes

**Likelihood of Impact:** Low

Previously it was possible to change the following CSS properties by targeting the `rux-tree-node` element instead of using the available CSS Shadow Parts: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

```css
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

```css
rux-tree-node::part(node) {
  color: red;
  font-family: Arial;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.3em;
}
```

**Resolution:** Search your application's CSS for anything that may be targeting `rux-tree-node` directly and replace with the appropriate CSS Shadow Part.
