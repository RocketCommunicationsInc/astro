# @astrouxds/astro-web-components

## 7.11.0

### Minor Changes

-   af2a8fbc: Core - Added fallback values for CSS Custom Properties. Importing astro-web-components.css is now optional if you don't need light theme or global styles

### Patch Changes

-   9f12ca24: fix(rux-input) password show/hide button is no longer visible when type != password
-   d14ff6c5: fix(rux-segmented-button) fix a programatic selection bug

## 7.10.0

### Minor Changes

#### Card

-   Added `container` CSS Shadow Part

### Patch Changes

#### Angular

-   Fixed an issue in angular where breadcrumb and tooltip were missing from the module

#### Clock

-   Added tabular-nums for better support when using system fonts

#### Monitoring Progress Icon

-   Added tabular-nums for better support when using system fonts

#### Select

-   Fixed an issue where adding or removing rux-options inside a rux-option group didn't allow for the select menu to show them selected by default

#### Tabs

-   Fixed an issue where the correct rux-tab-panel would not show when programmatically changing the selected prop on rux-tab

## 7.9.3

### Patch Changes

#### General

-   Added Vite and similar bundler support
-   Fixed an issue that prevented users from using lazy-loaded components in Vue when using Vite

## 7.9.2

### Patch Changes

#### Timeline

-   Fixed an issue where data labels would repeat when crossing day light savings time thresholds

## 7.9.1

### Patch Changes

#### React

-   Revert treeshaking for react in order to fix rux-icon not working in create-react-apps.

## 7.9.0

### Minor Changes

#### Breadcrumb Item

-   Added focus state

#### Checkbox

-   Added `ruxfocus` event on focus

#### Input

-   added `setFocus` method to programmatically set focus

#### Select

-   added `setFocus` method to programmatically set focus

#### Textarea

-   added `setFocus` method to programmatically set focus

### Patch Changes

#### Dialog

-   `ruxDialogOpened` will now fire after everything has finished loading on open

## 7.8.0

### Minor Changes

#### Accordion

-   Added new `ruxcollapsed` event that emits when accordion-item closes

#### Core

-   Design tokens
    -   Added `color-background-interactive-muted`
    -   Added light theme token for `color-background-interactive-muted`
    -   Added light theme tokens for `color-status-off`, `color-status-standby`, `color-status-normal`, `color-status-serious`, `color-status-critical`

#### Pop Up

-   Adds `enableAnimationFrame` prop to watch when the trigger moves in order to more accurately place the pop-up.

### Patch Changes

#### React

-   Added vite support and tree-shaking capability to `@astrouxds/react`.

#### Select

-   Fixed an issue where rux-option couldn't have it's props dynamically changed

## 7.7.0

### Minor Changes

#### Breadcrumb

-   Added new `rux-breadcrumb` component

#### Breadcrumb Item

-   Added new `rux-breadcrumb-item` component

#### Container

-   Added a container CSS shadow part

#### Progress

-   Fixed a visual issue on lower percentages. This change alters the way border visuals are configured
    -   What: Changed internal progress part to use box-shadow instead of border for border effect.
    -   Migration: If you are using the progress css shadow part to override border color, you'll need to use box shadow to override border color instead

### Patch Changes

#### Core

-   Updated design tokens@1.4.1
    -   Added light theme value for `container.color.border`
    -   Fixed incorrect value on `color-status-standby`. changed `#64d9ff` to `#2dccff`
    -   Improve contrast in light theme values for `container-color-border`, `log-color-border`
    -   Added `timeline-header-color-background` and `timeline-cell-color-background` tokens

## 7.6.0

### Minor Changes

#### Accordion

-   Added focus state styles

#### Button

-   Added focus state styles

#### Checkbox

-   Added focus state styles

#### Dialog

-   Added focus state styles

#### General

-   Added focus state styles for `a` tags.

#### Icon

-   Added new Astro icons: `set-power`, `hardware`, `release`

#### Input

-   Added focus state styles

#### Menu Item

-   Added focus state styles

#### Notification

-   Added focus state styles

#### Pop Up

-   Added keyboard controls for pop up trigger.
-   Added focus state styles

#### Push Button

-   Added focus state styles

#### Radio

-   Added focus state styles

#### Radio Group

-   Added keyboard controls for navigation

#### Segmented Button

-   Added focus state styles

#### Select

-   Added focus state styles

#### Slider

-   Added focus state styles

#### Switch

-   Added focus state styles

#### Tab

-   Added focus state styles
-   Added keyboard controls for navigation

#### Textarea

-   Added focus state styles

#### Tooltip

-   Added new Tooltip component

#### Tree Node

-   Added focus state styles

### Patch Changes

#### Clock

-   Removed the fixed height on a hide-labels version of clock

#### Checkbox

-   Added `position: relative` to label to contain input element

#### Monitoring Icon

-   Fixed border being cut off by the Global Status Bar

#### Notification

-   Added `cursor: pointer` to default close icon

## 7.5.0

### Minor Changes

#### Clock

-   Added `static` property to disable ticking

### Patch Changes

#### Tabs

-   Fixed issue where tabs were not displaying correctly when being dynamically added and removed

#### Textarea

-   Added scrollbar styles

## 7.4.0

### Minor Changes

#### GSB

-   Added new CSS Shadow Parts: `app-meta` and `center`.

### Patch Changes

#### Core

-   Updated design tokens@1.2.0.

#### Monitoring Icon

-   Removed `min-height` and increased `min-width` to fix an issue when used in GSB.

#### GSB

-   Removed `overflow: hidden` to fix issue with Monitoring Icon notifications being cut off.

#### Tag

-   Fixed an issue with default slot and conditional rendering

#### Pop Up

-   Moved `aria-hidden` to describe the pop up itself rather than the whole web component

#### Notification

-   Updated border styles for light theme.

## 7.3.0

### Minor Changes

#### Option

-   The `title` attribute will now reflect to the Shadow DOM

#### Option Group

-   The `title` attribute will now reflect to the Shadow DOM

#### Status

-   The `status` property now defaults to `normal`.

#### Tabs

-   Added `cursor: pointer` style.

### Patch Changes

#### Monitoring Icon

-   Fixed layout shift when using `display: grid`

#### Monitoring Progress Icon

-   Fixed layout shift when using `display: grid`

#### Push Button

-   Fixed issue with `cursor: pointer`

#### Pop Up

-   Fixed an issue where the `strategy` prop of `rux-pop-up` was not applying correctly.

#### Notification

-   Fixed a bug where message prop was not showing if another slot was slotted in the component.

#### Dialog

-   Fixed an issue where the `message` prop would not appear if being used with slots for header or footer.

#### Select

-   Fixed some styling issues on where the border color would still change on hover when disabled.

-   Added correct cursors.

#### Segmented Button

-   Added a `cursor: pointer` when enabled.

## 7.2.0

### Minor Changes

#### Pop Up

-   Added new `disableAutoUpdate` prop to lock the pop up's position on scroll.

#### Input

-   The `autocomplete` attribute has been removed due to a limitation with Shadow Dom encapsulation not allowing the attribute to be applied correctly.

#### Form Elements

-   Added new slots for `help-text` and `error-text`.

#### Time Region

-   Added the 'off' status as a status option.

### Patch Changes

#### Menu Item

-   Restored `href`, `target`, `rel` and `download` attributes

#### Select

-   Long options no longer fall over the drop down indicator

#### Time Region

-   Fixed an issue where `serious` status was not correctly styling the border.

## 7.1.1

### Patch Changes

#### Classification Marking

-   An invalid `classification` now correctly displays "Unclassified".

#### Web Components

-   Fixed an issue where `font-size`, `line-height`, and `text-align` properties when set on parent elements would incorrectly override component styles.

## 7.1.0

### Minor Changes

#### Pop Up

-   Added a `close-on-select` property that will close the pop-up when a user selects something from the menu.

### Patch Changes

#### Scrollbars

-   Updated styles in Firefox

#### Tabs

-   Fixed an issue where dynamically adding a tab would result in unexpected behavior.

## 7.0.2

### Patch Changes

#### Checkbox

-   Fixed visual regression on disabled state

#### Pop Up

-   Fixed an issue where Pop Ups would not overlay correctly.

#### Text Area

-   Reverted a 7.0 change to the component's internals that prevented users from being able to control the height of the element or disable resizing.

## 7.0.1

### Patch Changes

#### Monitoring Icon

-   Removed the `title` attribute.

#### Monitoring Progress Icon

-   Removed the `title` attribute.

#### Build

-   Removed unnecessary type definitions in dist/types

#### Tokens

-   Fixes an issue in the typography utility class calcs that was throwing errors in some build environments.

# 7.0 Changes

## Major

Our /dist/custom-elements build has been removed in favor of a faster treeshakeable /dist/components build.

### Angular

-   Angular versions <= 12 are no longer supported.

### Typography

-   Roboto Mono has been removed from the font stack.

## Button

-   The following deprecated CSS Custom Properties have been removed:
    -   --button-active-background-color
    -   --button-active-border-color
    -   --button-background-color
    -   --button-border-color
    -   --button-borderless-hover-color
    -   --button-borderless-text-color
    -   --button-secondary-background-color
    -   --button-secondary-border-color
    -   --button-secondary-hover-background-color
    -   --button-secondary-hover-border-color
    -   --button-secondary-hover-text-color
    -   --button-secondary-text-color

### Clock

-   The `color` CSS property can no longer be styled from the :host element.
-   The default `display` css property is now `inline-block` rather than `flex`.
-   The following deprecated CSS Custom Properties have been removed:
    -   --clock-background-color
    -   --clock-border-color
    -   --clock-label-color
    -   --clock-text-color

### Checkbox

-   The following deprecated CSS Custom Properties have been removed:
-   --checkbox-label-color
-   --checkbox-background-color
-   --checkbox-border-color
-   --checkbox-checked-color
-   --checkbox-hover-border-color

### Checkbox Group

-   `color`, `font-family`, `font-size`, `font-weight`, `letter-spacing`, and `line-height` CSS properties can no longer be styled from the :host element.
-   The following deprecated CSS Custom Properties have been removed:
    -   --checkboxgroup-border-color

### Classification Marking

-   `footer-banner` CSS Shadow Part has been removed.
-   The following deprecated CSS Custom Properties have been removed:
-   --color-classification-text-light
-   --color-classification-text-dark

### Dialog

-   Dialog will no longer close when clicking outside by default.
-   The `dialog-title` and `dialog-message` properties have been removed in favor of `header` and `messsage`.

### Global Status Bar

-   `appdomain` and `appname` are no longer uppercase.
-   `font-family`, `letter-spacing`, `line-height` CSS properties can no longer be styled from the :host element.

### Icon

-   `label` attribute has been removed.
-   The deprecated `--icon-default-color` CSS Custom Property has been removed.

### Input

-   The following deprecated CSS Custom Properties have been removed:
    -   --input-background-color
    -   --input-text-color
    -   --input-focus-border-color
    -   --input-selection-background-color
    -   --input-invalid-border-color

### Log

-   The following deprecated CSS Custom Properties have been removed:
    -   --log-header-background-color
    -   --log-filter-background-color
    -   --log-filter-text-color

### Modal

-   Modal has been removed and renamed to `<rux-dialog>`.
-   The following deprecated CSS Custom Properties have been removed:
    -   --modal-title-color
    -   --modal-background-color
    -   --modal-border-color

### Monitoring Progress Icon

-   The `color` CSS property can no longer be styled from the :host element.

### Notification

-   Notification no longer requires a parent element with `position: relative` and `overflow: hidden` applied.
-   Multiple sibling notifications are no longer stacked by default.
-   Notification no longer overlays content. Instead, when a notification becomes visible, it will shift content up or down accordingly.
-   The slide in/out animation has been removed for better performance.
-   The `color`, `font-family`, `font-weight`, `font-size`, `letter-spacing`, `line-height`, and `padding` CSS properties can no longer be styled from the :host element.
-   The following deprecated CSS Custom Properties have been removed:
    -   --notification-icon-color
    -   --notification-text-color

### Pop Up

-   `anchorEl` and `triggerEl` properties have been removed.
-   `ruxmenudidclose` , `ruxmenudidopen`, `ruxmenuwillclose`, `ruxmenuwillopen` events have been removed.
-   `close`, `isOpen`, `show`, `toggle` methods have been removed.
-   `menu-end` slot has been removed.

### Pop Up Menu

-   Pop Up Menu has been removed and renamed to `<rux-pop-up>`.
-   The deprecated `--menu-item-divider-border-color` CSS Custom Property has been removed.

### Progress

-   Indeterminate functionality has been removed and is now a separate `<rux-indeterminate-progress>` component.
-   The `color`, `font-family`, `font-size`, `font-weight`, `letter-spacing`, and `line-height` CSS properties can no longer be styled from the :host element.
-   The following deprecated CSS Custom Properties have been removed:
    -   --progress-padding
    -   --progress-radius
    -   --progress-height
    -   --progress-width
    -   --progress-determinate-bar-background-color
    -   --progress-determinate-track-background-color
    -   --progress-determinate-track-border-color
    -   --progress-label-color

### Push Button

-   `label` CSS Shadow Part has been renamed to `container`.
-   The following deprecated CSS Custom Properties have been removed:
    -   --pushbutton-background-color
    -   --pushbutton-border-color
    -   --pushbutton-text-color
    -   --pushbutton-selected-background-color
    -   --pushbutton-selected-border-color
    -   --pushbutton-selected-text-color
    -   --pushbutton-selected-hover-text-color

### Radio

-   The following deprecated CSS Custom Properties have been removed:
    -   --radio-hover-border-color
    -   --radio-border-color
    -   --radio-label-color
    -   --radio-background-color
    -   --radio-selected-color

### Radio Group

-   The deprecated `--radiogroup-border-color` CSS Custom Property has been removed.

### Segmented Button

-   The default `size` property is now `medium` rather than `small`.
-   The following deprecated CSS Custom Properties have been removed:
    -   --segmented-button-background-color
    -   --segmented-button-text-color
    -   --segmented-button-border-color
    -   --segmented-button-hover-background-color
    -   --segmented-button-hover-text-color
    -   --segmented-button-hover-border-color
    -   --segmented-button-selected-background-color

### Select

-   The following deprecated CSS Custom Properties have been removed:
    -   --select-menu-border-radius
    -   --select-menu-border-hover-color
    -   --select-menu-border-focus-color
    -   --select-menu-invalid-border-color
    -   --select-menu-text-color
    -   --select-menu-label-color
    -   --select-menu-border-color
    -   --select-menu-option-text-hover-color
    -   --select-menu-option-selected-background-color
    -   --select-menu-option-selected-text-color
    -   --select-menu-inactive-caret
    -   --select-menu-active-caret
    -   --select-menu-background-color

### Slider

-   The following deprecated CSS Custom Properties have been removed:
    -   --slider-thumb-background-color
    -   --slider-thumb-border-color
    -   --slider-hover-thumb-background-color
    -   --slider-hover-thumb-border-color
    -   --slider-track-background-color
    -   --slider-selected-thumb-border-color
    -   --slider-thumb-size
    -   --slider-thumb-border-size
    -   --slider-tick-padding-top
    -   --slider-selected-track-background-color
    -   --slider-value-percent
    -   --slider-top
    -   --slider-track-height

### Switch

-   The `color`, `font-family`, `font-size`, `font-weight`, `letter-spacing`, and `line-height` CSS properties can no longer be styled from the :host element.
-   The following deprecated CSS Custom Properties have been removed:
    -   --switch-background-color
    -   --switch-hover-on-color
    -   --switch-hover-off-color
    -   --switch-on-color
    -   --switch-off-border-color

### Tab

-   `font-family`, `font-size`, `letter-spacing`, `font-weight`, `border-color`, `border-bottom`, `min-width`, and `padding` can no longer be styled from the :host element.
-   The following deprecated CSS Custom Properties have been removed:
    -   --tab-text-color
    -   --tab-border-color
    -   --tab-hover-text-color
    -   --tab-selected-text-color

### Table

-   Right and left border styles have been removed by default.
-   The following deprecated CSS Custom Properties have been removed:
    -   --table-border-color
    -   --table-row-hover-text-color
    -   --table-row-hover-background-color
    -   --table-row-border-color
    -   --table-row-text-color
    -   --table-row-background-color
    -   --table-header-border-color
    -   --table-header-background-color
    -   --table-header-text-color
    -   --table-header-box-shadow
    -   --table-row-selected-background-color
    -   --table-row-selected-border-color

### Textarea

-   The following deprecated CSS Custom Properties have been removed:
    -   --textarea-border-color
    -   --textarea-text-color
    -   --textarea-focus-border-color
    -   --textarea-selection-background-color

### Tree

-   The following deprecated CSS Custom Properties have been removed:
    -   --tree-text-color
    -   --tree-border-color
    -   --tree-accent-color
    -   --tree-hover-background-color
    -   --tree-hover-text-color
    -   --tree-selected-border-color
    -   --tree-selected-accent-color
    -   --tree-expanded-border-color
    -   --tree-background-color

### Tree Node

-   The `color`, `font-family`, `font-size`, `font-weight`, `letter-spacing`, and `line-height` CSS properties can no longer be styled from the :host element.

## Minor

-   New typography utility classes have been added to `astro-web-components.css`.

-   Links no longer change color on hover.

### Accordion [New]

-   Adds new Accordion component.

### Angular

-   Angular no longer requires CUSTOM_ELEMENTS_SCHEMA on your app module.

### Clock

-   Adds `container` CSS Shadow Part.

### Container [New]

-   Adds new Container component.

### Card [New]

-   Adds new card component.

### Dialog

-   Adds support for scrollbars in dialog.

### Form Elements

-   Help text now uses our `--color-text-secondary` design token.

### Indeterminate Progress [New]

-   Adds new Interdeterminate Progress component.

### Menu [New]

-   Adds new Menu component for use within Pop Up.

### Pop Up

-   Adds `ruxpopupopened` and `ruxpopupclosed` events.

### Tab

-   Adds `small` attribute.
-   Adds `container` CSS Shadow Part.

### Notification

-   Adds `--height` CSS Custom Property

-   Adds `prefix`, `default`, and `actions` slots

## Patch

### Button

-   Internal styles have been refactored to use spacing design tokens.

### Clock

-   Internal styles have been refactored to use spacing design tokens.

### Checkbox

-   Internal styles have been refactored to use spacing design tokens.

### Checkbox Group

-   Internal styles have been refactored to use spacing design tokens.

### Classification Marking

-   Internal styles have been refactored to use spacing design tokens.

### Dialog

-   Internal styles have been refactored to use spacing design tokens.

### Indeterminate Progress

-   Internal styles have been refactored to use spacing design tokens.

### Input

-   Internal styles have been refactored to use spacing design tokens.
-   Type=password now uses a native `button` element rather than `rux-button`.

### Log

-   Internal styles have been refactored to use spacing design tokens.

### Radio

-   Internal styles have been refactored to use spacing design tokens.

### Radio Group

-   Internal styles have been refactored to use spacing design tokens.

### Pop Up Menu

-   Internal styles have been refactored to use spacing design tokens.

### Push Button

-   Internal styles have been refactored to use spacing design tokens.

### Switch

-   Internal styles have been refactored to use spacing design tokens.

### Notification

-   Internal styles have been refactored to use spacing design tokens.

### Progress

-   Internal styles have been refactored to use spacing design tokens.
-   Fixed visual regression when progress was not given a `value` attribute.

### Segmented Button

-   Internal styles have been refactored to use spacing design tokens.

### Slider

-   Internal styles have been refactored to use spacing design tokens.

### Tabs

-   Tab heights no longer expand to the height of a direct container.

### Tab

-   Tab border color can now be properly styled when `size` is set to `small`.

### Textarea

-   Internal styles have been refactored to use spacing design tokens.
-   Textarea can now be properly resized in Firefox

## 7.0.0-beta.3

### Major Changes

-   a7296b6b: Our /dist/custom-elements build has been removed in favor of a faster treeshakeable /dist/components build. We anticipate very few people are using this build. To check if your project is affected, you can do a global find for 'astro-web-components/dist/custom-elements' in your project. If you are using this build, switch to 'astro-web-components/dist/loader' instead.
-   27b72893: Modal has been removed. It has been renamed to Dialog to align with our Design System naming and shares the exact same API as Modal.

    Migration: You can do a global find/replace on your project for:

    `rux-modal` -> `rux-dialog`
    `ruxmodalclosed` -> `ruxdialogclosed`
    `ruxmodalopened` -> `ruxdialogopened`

### Minor Changes

-   f9b842f7: Modal is now deprecated and will be removed in 7.0. It is being renamed to Dialog to align with our Design System naming and which shares the exact same API as Modal. It is recommended that you migrate to Dialog before 7.0. You can do a global find/replace on your project for:

## 6.13.1

### Patch Changes

#### Tab

-   Added `container` CSS Shadow Part.
-   Fixed an issue where multiple tabs on the same page would hide each others content when selected.

#### Checkbox

-   Fixed an issue where the label was disappearing when checked.

## 6.13.0

### Minor Changes

#### Timeline

-   support for partial time regions

#### Dialog

-   Added better keyboard support for tabbing between confirm and deny buttons, and triggers deny on an escape key press.

### Patch Changes

#### Progress

-   Visual fix for Firefox to properly align progress indicator

## 6.12.1

### Patch Changes

#### Timeline

-   Fixed an issue where time regions were not updating when their ranges were edited

## 6.12.0

### Minor Changes

#### Slider

-   Added `ruxchange` event

## 6.11.0

### Minor Changes

#### Tree

-   Added two new events to rux-tree-node: ruxtreenodeexpanded and ruxtreenodecollapsed.

## 6.10.0

### Minor Changes

#### Modal

-   Modal is now deprecated and will be removed in 7.0. It is being renamed to Dialog to align with our Design System naming and which shares the exact same API as Modal. It is recommended that you migrate to Dialog before 7.0. You can do a global find/replace on your project for:

    `rux-modal` -> `rux-dialog`
    `ruxmodalclosed` -> `ruxdialogclosed`
    `ruxmodalopened` -> `ruxdialogopened`

-   3c0cd2b8: Updates help text to use text-secondary to align with design

## 7.0.0-beta.2

### Major Changes

#### CSS Custom Properties

The majority of our CSS Custom Properties have been removed. See the MIGRATION.md file for more information.

#### Angular

The angular wrapper has been updated and will no longer be compatible with Angular versions less than 12.

#### Pop Up Menu

Pop Up Menu has been re-written to take a slotted trigger element and slotted content. Now changes placement based on available space. Replaces all methods with two new methods, show and hide.

#### Clock

-   The following styles have been removed from the :host element:

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

-   Host styles have been moved to the shadow dom. If you were previously styling the <rux-notification> element, use shadow parts instead

### Minor Changes

#### Notification

-   add `--height` css custom property
-   add prefix, default, and actions slots

#### Clock

-   add `container` CSS Shadow Part

### Major Changes

-   d89430ef: Clock - removed CSS custom properties:

    --clock-text-color
    --clock-background-color
    --clock-border-color
    --clock-label-color

-   d89430ef: Log - Removed CSS custom properties:

    --log-header-background-color
    --log-filter-background-color
    --log-filter-text-color

-   1d4926c4: Menu Item Divider --menu-item-divider-border-color css custom property has been removed. Use the container shadow part instead
-   d89430ef: Icon - remove CSS custom properties:

    --icon-default-color

-   14961eb5: The angular wrapper has been updated and will no longer be compatible with Angular versions less than 12.
-   d89430ef: Classification Marking - removed css custom properties:

    --color-classification-text-dark
    --color-classification-text-light

-   853eead3: rux-pop-up-menu has been re-written to take a slotted trigger element and slotted content. Now changes placement based on available space. Replaces all methods with two new methods, show and hide.
-   d89430ef: Checkbox - Deprecate CSS custom properties:

          --checkbox-label-color
          --checkbox-background-color
          --checkbox-border-color
          --checkbox-checked-color
          --checkbox-hover-border-color

-   8d885e14: Clock - The following styles have been removed from the :host element:

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

-   d89430ef: Checkbox Group - Remove CSS custom properties:

    --checkboxgroup-border-color

-   d89430ef: Button - Removed CSS Custom Proprties:

    --button-active-background-color
    --button-active-border-color
    --button-background-color
    --button-border-color
    --button-borderless-hover-color
    --button-borderless-text-color
    --button-hover-background-color
    --button-hover-border-color
    --button-secondary-background-color
    --button-secondary-border-color
    --button-secondary-hover-background-color
    --button-secondary-hover-border-color
    --button-secondary-hover-text-color
    --button-secondary-text-color
    --button-text-color

-   d89430ef: Input - removed CSS custom properties:

    --input-background-color
    --input-border-color
    --input-text-color
    --input-focus-border-color
    --input-selection-background-color
    --input-invalid-border-color

-   84e89afc: Notification - Host styles have been moved to the shadow dom. If you were previously styling the <rux-notification> element, use shadow parts instead
-   d89430ef: Menu Item Divider - remove CSS custom properties:

    --menu-item-divider-border-color

-   d89430ef: Remove CSS custom properties:

    Log

    --log-header-background-color
    --log-filter-background-color
    --log-filter-text-color

    Modal

    --modal-title-color
    --modal-background-color
    --modal-border-color

    Notification

    --notification-text-color

    Progress

    --progress-padding
    --progress-radius
    --progress-height
    --progress-width
    --progress-determinate-bar-background-color
    --progress-determinate-track-background-color
    --progress-determinate-track-border-color
    --progress-label-color

    Push Button

    --pushbutton-background-color
    --pushbutton-border-color
    --pushbutton-text-color
    --pushbutton-selected-background-color
    --pushbutton-selected-border-color
    --pushbutton-selected-text-color
    --pushbutton-selected-hover-text-color

    Radio

    --radio-hover-border-color
    --radio-border-color
    --radio-label-color
    --radio-background-color
    --radio-selected-color

    Radio Group

    --radiogroup-border-color

    Segmented Button

    --segmented-button-background-color
    --segmented-button-text-color
    --segmented-button-border-color
    --segmented-button-hover-background-color
    --segmented-button-hover-text-color
    --segmented-button-hover-border-color
    --segmented-button-selected-background-color
    --segmented-button-selected-text-color
    --segmented-button-selected-hover-background-color
    --segmented-button-selected-hover-text-color
    --segmented-button-selected-hover-border-color
    --segmented-button-border-radius

    Select

    --select-menu-border-radius
    --select-menu-border-hover-color
    --select-menu-border-focus-color
    --select-menu-invalid-border-color
    --select-menu-text-color
    --select-menu-option-text-hover-color
    --select-menu-option-selected-background-color
    --select-menu-option-selected-text-color
    --select-menu-label-color
    --select-menu-inactive-caret
    --select-menu-active-caret
    --select-menu-background-color
    --select-menu-border-color

    Slider

    --slider-thumb-background-color
    --slider-thumb-border-color
    --slider-hover-thumb-background-color
    --slider-hover-thumb-border-color
    --slider-track-background-color
    --slider-selected-track-background-color
    --slider-selected-thumb-border-color
    --slider-thumb-size
    --slider-thumb-border-size
    --slider-value-percent
    --slider-top
    --slider-track-height
    --slider-track-before-thumb-height
    --slider-tick-padding-top

    Switch

    --switch-background-color
    --switch-hover-on-color
    --switch-hover-off-color
    --switch-on-color
    --switch-off-border-color

    Textarea

    --textarea-border-color
    --textarea-text-color
    --textarea-focus-border-color
    --textarea-selection-background-color

    Tabs

    --tab-text-color

    --tab-border-color
    --tab-hover-text-color
    --tab-selected-text-color

    Table

    --table-border-color
    --table-header-background-color
    --table-header-text-color

    --table-header-box-shadow
    --table-row-hover-text-color
    --table-row-selected-background-color
    --table-row-selected-border-color
    --table-row-hover-background-color

    --table-row-border-color
    --table-row-text-color
    --table-row-background-color
    --table-header-border-color

    Tree

    --tree-text-color
    --tree-background-color
    --tree-border-color

    Tree Node

    --tree-accent-color
    --tree-hover-background-color
    --tree-hover-text-color
    --tree-selected-border-color
    --tree-selected-accent-color
    --tree-expanded-border-color

### Minor Changes

-   84e89afc: Notification - add `--height` css custom property
-   84e89afc: Notification - add prefix, default, and actions slots
-   14961eb5: Updated the angular wrapper. NOTE: angular no longer requires CUSTOM_ELEMENTS_SCHEMA on your app module. It is recommended you remove this after upgrading so you can benefit from angular’s template checking.
-   8d885e14: Clock - add container shadow part

### Patch Changes

-   14961eb5: Updates Angular dependencies and documentation

## 7.0.0-beta.0

### Major Changes

#### Modal

-   Modal will no longer close when clicking outside by default.

    -   Why: To align with Astro UXDS compliance requirements 4.3.3: "Dialog Boxes shall be closed only with confirm or cancel Buttons."

    -   Migration: If you still require this functionality, a new `clickToClose` property has been added. It defaults to `false` so this will be a breaking change.

-   The following properties and attributes have been removed: `modalMessage`, `modalTitle`, `confirmText`, `denyText`.
    -   Why: These have been replaced in favor of slots to provide greater flexibility.
    -   Migration: Use the new `header`, `message`, and `footer` slots instead.

#### Progress

-   Removed the indeterminate functionality from Progress
    -   Why: this functionality has been moved to its own component, rux-indeterminate-progress.

### Minor Changes

#### Card

-   New component

#### Indeterminate Progress

-   New component

#### Container

-   New component

### Patch Changes

### Patch Changes

#### GSB

-   Fixed layout bug when used with classification marking

#### Modal / Dialog

-   Fixed an issue with modal emitting an extra 'ruxmodalclosed' event when closed by an off click.

#### Tabs

-   Fixed a styling bug with `small` variant

## 6.9.1

### Patch Changes

-   Updates Angular dependencies and documentation

## 6.9.0

### Minor Changes

-   !!! Deprecates CSS Custom Properties. See MIGRATION.md for more information !!!

#### Input

-   Added support for `time` type

### Patch Changes

#### Modal

-   Fixed issue with emitting a detail value when using default confirm/deny buttons.

#### Pop Up Menu

-   Pop-up-menu will now position correctly if the anchor element is beyond a horizontal scrollbar.

## 6.8.0

### Minor Changes

#### Modal

-   Added in slots for message, title and footer to allow for more customization.

#### Clock

-   Added a 'date-in' prop that allows the clock to be set to increment from a specific date.

### Patch Changes

#### Switch

-   Fixed issue where label was breaking out of the container

#### Select

-   Updated styles for better use on Windows OS and Firefox browsers

## 6.7.0

### Minor Changes

#### Tree Node

-   added nowrap/overflow hidden to prevent overflow with long names

#### Modal

-   Added a new `dialog` shadow part attached to the native dialog element.

### Patch Changes

#### Tabs

-   fixed issue where styles were not properly shadow dom encapsulated

#### Modal

-   Removed the fix height on the dialog element that was preventing a long modal message.

#### Tree

-   fixed regression where border styles were not being applied

#### Push Button

-   fixed the hover styling

## 6.6.0

### Minor Changes

#### Timeline

-   Added `timezone` property

### Patch Changes

#### Segmented Button

-   fixed issue where the bottom border was being clipped when inside a container element.

#### Slider

-   hides label if none is present

#### Form Elements

-   Removed extra margin on form elements (checkbox, radio, slider, select, input, textarea) that didn't have a label.

## 6.5.1

### Patch Changes

#### Tag

-   Added shadows to align with design.

#### Table

-   Updated selected row styling to align with design.

#### Tree / Tree Node

-   Updated styling to align with design.
-   Added hover state.

## 6.5.0

> NOTE: This release renames many of our internal private CSS Custom Properties (--color-background). If you are using these to build your own UIs, this may be a breaking change for you.

### Minor Changes

#### Select

-   Added `size` property.

#### Option

-   Added a `disabled` property.

#### Input

-   Added `date` and `datetime-local` types.
-   Added a `prefix` and `suffix` named slots.

#### Tag

-   Created a new Tag component.

### Patch Changes

-   Updated components to use the new beta design tokens

#### Button

-   Moved `width` attribute out of shadow dom, can now be styled without CSS parts.

#### Notification

-   Watch closeAfter to close when updated

#### Slider

-   Updated to accept float values.

## 6.4.0

### Minor Changes

-   Added text underline to link hover states globally.

#### Select

-   Added `multiple` support

#### Timeline [Beta]

-   New beta component Timeline is now available

#### Slider

-   Added `axis-labels` and `ticks-only` properties, providing tick mark and label support.

#### Textarea

-   Added a `size` property. Removed unused `small` property. (This property had no effect so this is not a breaking change)

### Patch Changes

#### Switch

-   Updated thumb hover state color to align with design.

#### Clock

-   Updated the clock labels to align with design.

#### Tabs

-   Updated to align with design

## 6.3.0

### Minor Changes

#### Notification

-   Added a `small` prop allowing for a smaller variant.

#### Segmented Button

-   Added `size` prop which accepts small, medium or large.

### Patch Changes

#### Notification

-   Updated the padding around message and icon to match design.

#### Segmented Button

-   Updated hover state styling to match design.

#### Push Button

-   Added hover state styling to match design.

#### Monitoring Icon

-   Updated the min height and width to match design.

#### Status

-   Changed the overall size to be 12px to match design.

## 6.2.0

### Minor Changes

#### Button

-   Adds a borderless prop to rux-button, enabling borderless styling.

#### Checkbox Group/Radio Group/Select/Textarea

-   Adds required props and functionality to checkbox group, radio group, select and textarea.

### Patch Changes

#### Clock

-   Updated margin-left on AOS from 16px to 17px.

#### Classification Marking

-   Updated the overall height of classification-tags to match Figma designs. Overall height has gone from 20px -> 22px

#### Button

-   Secondary button now has the correct text color on hover.

## 6.1.0

### Minor Changes

#### Icon

-   Added new CSS Shadow Part `icon`
-   Moved the `icon` shadow part in `rux-icon` to be on the SVG element.

#### Global Status Bar

-   Added new CSS Shadow Parts: `icon`, `container`, `username`, and `app-state`

#### Pop Up Menu

-   Added new CSS Shadow Part `container`

#### Clock

-   Added new CSS Shadow Parts `date`, `date-label`, `time`, `time-label`, `aos`, `aos-label`, `los`, `los-label`.
-   Clock now displays the julien date as always 3 digits

#### Button Group

-   Added new CSS Shadow Part `container`

#### Button

-   Added new CSS Shadow Part `container`

#### Monitoring Progress Icon

-   Added new CSS Shadow Parts: `icon`, `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`, `container`, `icon-group`, `progress-display`, `radial-progress`, `status-icon`.

#### Monitoring Icon

-   Added new CSS Shadow Parts: `monitoring-badge`, `monitoring-label`, `monitoring-sublabel`.

#### Input

-   Added `readonly`, `spellcheck`, and `autocomplete` attributes.
-   Added new CSS Shadow Parts: `input`, `form-field`, `error-text`, and `help-text`.

#### Checkbox Group

-   Added new CSS Shadow Parts: `error-text` and `help-text`.

#### Radio Group

-   Added new CSS Shadow Parts: `error-text` and `help-text`.

#### Slider

-   Added new CSS Shadow Parts: `input`, `error-text` and `help-text`.

#### Select

-   Added new CSS Shadow Parts: `label`, `select`, `error-text` and `help-text`.

#### Textarea

-   Added new CSS Shadow Parts: `textarea`, `error-text` and `help-text`.

#### Push Button

-   Added new CSS Shadow Parts: `label` and `icon`.

#### Checkbox

-   Added new CSS Shadow Parts: `form-field` and `label`.

#### Radio

-   Added new CSS Shadow Parts: `form-field` and `label`.

#### Progress

-   Added new CSS Shadow Parts: `progress` and `output`.

#### Modal

-   Added new CSS Shadow Parts: `confirm-button` and `deny-button`.

#### Segmented Button

-   Added new CSS Shadow Part `label`.

#### Switch

-   Added new CSS Shadow Part `switch`. The pseudo selectors ::before select the track, ::after selects the button.

#### Menu Item

-   Added new CSS Shadow Part `container`.

#### Menu Item Divider

-   Added new CSS Shadow Part `container`.

#### Classification Marking

-   Added new CSS Shadow Parts: `footer`, `tag`, and `header`.
-   Deprecated CSS Shadow Part `footer-header`. Use `footer` instead.

### Patch Changes

-   Fixes issue [#121](https://github.com/RocketCommunicationsInc/astro/issues/121) where boolean attributes in React were not behaving as intended.
