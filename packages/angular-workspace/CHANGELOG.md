# @astrouxds/angular

## 7.20.0

### Minor Changes

#### Timeline

-   Add support for minute interval

### Patch Changes

#### Radio Button Group

-   Changed radio-button-group width to fit-content, which matches checkbox-group

#### Tooltip

-   Allow pressing escape to close the tooltip

## 7.19.1

### Patch Changes

#### Timeline

- Fixed an issue where events displayed incorrectly when they spanned over daylight savings time

## 7.19.0

### Minor Changes

#### Timeline

- Added `show-start-of-day` attribute to rux-ruler

## 7.18.0

### Minor Changes

#### Input

- Added autocomplete property to rux-input

#### Timeline

- Adds `has-playhead-indicator` prop to timeline which visually marks past time as played in each track

### Patch Changes

#### Segmented Button

- Fixed an issue where segmented buttons could not be tabbed between when next to each other

#### Timeline

- Fixed an issue where timeline's playhead wouldn't update correctly when changing the interval

## 7.17.1

### Patch Changes

#### Classification Marking

- Added some default left/right padding

#### General

- Upgrade design token package to 1.12.0

#### Tabs

- Fixed tabbing issue when tab1 is selected by default

## 7.17.0

### Minor Changes

#### Dialog

- Added new `toggle`, `show` and `hide` public methods

#### Input

- Added a new `getInput` public method

### Patch Changes

#### Tabs

- Enhanced keyboard functionality with or without tab panels

#### Push Button

- The label prop no longer defaults to 'Push Button'

## 7.16.0

### Minor Changes

#### General

- Bumps design tokens to version 1.11 https://github.com/RocketCommunicationsInc/astro-design-tokens/releases/tag/v1.11.0

#### Select

- Dropdown arrow now correctly changes color from light theme to dark theme

#### Textarea

- Add readonly attribute

### Patch Changes

#### Global Status Bar

- Slots on the right and left side of Global Status Bar now correctly display focus states

#### Log

- Log's filtering is no longer case sensitive

#### Select

- Change height to match rux-input height for better alignment

#### Status

- Update status image sizes

#### Tabs

- Fixed an issue where the `ruxtabselected` event would sometimes not fire correctly

#### Timeline

- Removed an extraneious div on timeline that was preventing attribute inheritance

## 7.15.2

### Patch Changes

#### Select

- Dropdown arrow now correctly changes color from light theme to dark theme

## 7.15.1

### Patch Changes

#### Tooltip

- Fixed an issue where content wrapped by rux-tooltip would not inherit width. In order to prevent tooltip from wrapping to the next line if so desiered, use the placement prop

#### Tree Node

- Fixed an issue in tree node where click handlers on slotted content were not propogating correctly

## 7.15.0

### Minor Changes

#### Select

- Added new `inline` variant attribute

#### Slider

- Added dual range functionality to slider

### Patch Changes

#### Global Status Bar

- Fixed scrollbar styles when overflow is present

## 7.14.0

### Minor Changes

#### Monitoring Icon

- Added size prop to change icon size

#### Toast

- Created new `rux-toast` component

#### Toast Stack

- Created new `rux-toast-stack` component

### Patch Changes

#### Tooltip

- Fixed an issue where the placement prop wouldn't update correctly

## 7.13.0

### Minor Changes

#### Accordion Item

- Added `content` CSS Shadow Part

### Patch Changes

#### Textarea

- Fixes `rows` prop not working correctly

## 7.12.0

### Minor Changes

#### Button Group

- Button Group is now deprecated. Instead, create your own group using `display: flex` and our `--spacing-2` design token.

#### Log

- Adjusted the height of log's rows to be 32px

#### Tree Node

- Adjusted the height of the node to be 32px

### Patch Changes

#### Dialog

- Removed rux-button-group internally. You may remove importing RuxButtonGroup

#### Log

- Search input now updates when filter is updated programatically

## 7.11.0

### Minor Changes

#### Core

- Added fallback values for CSS Custom Properties. Importing astro-web-components.css is now optional if you don't need light theme or global styles

### Patch Changes

#### Input

- Password show/hide button is no longer visible when type does not equal password

#### Progress

- Fixed an issue where max would change to equal value if value increased passed max

#### Segmented Button

- Fixed an issue with programatically selecting segments

## 7.10.0

### Minor Changes

#### Card

- Added `container` CSS Shadow Part

### Patch Changes

#### Angular

- Fixed an issue in angular where breadcrumb and tooltip were missing from the module

#### Clock

- Added tabular-nums for better support when using system fonts

#### Monitoring Progress Icon

- Added tabular-nums for better support when using system fonts

#### Select

- Fixed an issue where adding or removing rux-options inside a rux-option group didn't allow for the select menu to show them selected by default

#### Tabs

- Fixed an issue where the correct rux-tab-panel would not show when programmatically changing the selected prop on rux-tab

## 7.9.3

### Patch Changes

#### General

- Added Vite and similar bundler support
- Fixed an issue that prevented users from using lazy-loaded components in Vue when using Vite

## 7.9.2

### Patch Changes

#### Timeline

- Fixed an issue where data labels would repeat when crossing day light savings time thresholds

## 7.9.1

### Patch Changes

#### React

- Revert treeshaking for react in order to fix rux-icon not working in create-react-apps.

## 7.9.0

### Minor Changes

#### Breadcrumb Item

- Added focus state

#### Checkbox

- Added `ruxfocus` event on focus

#### Input

- added `setFocus` method to programmatically set focus

#### Select

- added `setFocus` method to programmatically set focus

#### Textarea

- added `setFocus` method to programmatically set focus

### Patch Changes

#### Dialog

- `ruxDialogOpened` will now fire after everything has finished loading on open

## 7.8.0

### Minor Changes

#### Accordion

- Added new `ruxcollapsed` event that emits when accordion-item closes

#### Core

- Design tokens
  - Added `color-background-interactive-muted`
  - Added light theme token for `color-background-interactive-muted`
  - Added light theme tokens for `color-status-off`, `color-status-standby`, `color-status-normal`, `color-status-serious`, `color-status-critical`

#### Pop Up

- Adds `enableAnimationFrame` prop to watch when the trigger moves in order to more accurately place the pop-up.

### Patch Changes

#### React

- Added vite support and tree-shaking capability to `@astrouxds/react`.

#### Select

- Fixed an issue where rux-option couldn't have it's props dynamically changed

## 7.7.0

### Minor Changes

#### Breadcrumb

- Added new `rux-breadcrumb` component

#### Breadcrumb Item

- Added new `rux-breadcrumb-item` component

#### Container

- Added a container CSS shadow part

#### Progress

- Fixed a visual issue on lower percentages. This change alters the way border visuals are configured
  - What: Changed internal progress part to use box-shadow instead of border for border effect.
  - Migration: If you are using the progress css shadow part to override border color, you'll need to use box shadow to override border color instead

### Patch Changes

#### Core

- Updated design tokens@1.4.1
  - Added light theme value for `container.color.border`
  - Fixed incorrect value on `color-status-standby`. changed `#64d9ff` to `#2dccff`
  - Improve contrast in light theme values for `container-color-border`, `log-color-border`
  - Added `timeline-header-color-background` and `timeline-cell-color-background` tokens

## 7.6.0

### Minor Changes

#### Accordion

- Added focus state styles

#### Button

- Added focus state styles

#### Checkbox

- Added focus state styles

#### Dialog

- Added focus state styles

#### General

- Added focus state styles for `a` tags.

#### Icon

- Added new Astro icons: `set-power`, `hardware`, `release`

#### Input

- Added focus state styles

#### Menu Item

- Added focus state styles

#### Notification

- Added focus state styles

#### Pop Up

- Added keyboard controls for pop up trigger.
- Added focus state styles

#### Push Button

- Added focus state styles

#### Radio

- Added focus state styles

#### Radio Group

- Added keyboard controls for navigation

#### Segmented Button

- Added focus state styles

#### Select

- Added focus state styles

#### Slider

- Added focus state styles

#### Switch

- Added focus state styles

#### Tab

- Added focus state styles
- Added keyboard controls for navigation

#### Textarea

- Added focus state styles

#### Tooltip

- Added new Tooltip component

#### Tree Node

- Added focus state styles

### Patch Changes

#### Clock

- Removed the fixed height on a hide-labels version of clock

#### Checkbox

- Added `position: relative` to label to contain input element

#### Monitoring Icon

- Fixed border being cut off by the Global Status Bar

#### Notification

- Added `cursor: pointer` to default close icon

## 7.5.0

### Minor Changes

#### Clock

- Added `static` property to disable ticking

### Patch Changes

#### Tabs

- Fixed issue where tabs were not displaying correctly when being dynamically added and removed

#### Textarea

- Added scrollbar styles

## 7.4.0

### Minor Changes

#### GSB

- Added new CSS Shadow Parts: `app-meta` and `center`.

### Patch Changes

#### Core

- Updated design tokens@1.2.0.

#### Monitoring Icon

- Removed `min-height` and increased `min-width` to fix an issue when used in GSB.

#### GSB

- Removed `overflow: hidden` to fix issue with Monitoring Icon notifications being cut off.

#### Tag

- Fixed an issue with default slot and conditional rendering

#### Pop Up

- Moved `aria-hidden` to describe the pop up itself rather than the whole web component

#### Notification

- Updated border styles for light theme.

## 7.3.0

### Minor Changes

#### Option

- The `title` attribute will now reflect to the Shadow DOM

#### Option Group

- The `title` attribute will now reflect to the Shadow DOM

#### Status

- The `status` property now defaults to `normal`.

#### Tabs

- Added `cursor: pointer` style.

### Patch Changes

#### Monitoring Icon

- Fixed layout shift when using `display: grid`

#### Monitoring Progress Icon

- Fixed layout shift when using `display: grid`

#### Push Button

- Fixed issue with `cursor: pointer`

#### Pop Up

- Fixed an issue where the `strategy` prop of `rux-pop-up` was not applying correctly.

#### Notification

- Fixed a bug where message prop was not showing if another slot was slotted in the component.

#### Dialog

- Fixed an issue where the `message` prop would not appear if being used with slots for header or footer.

#### Select

- Fixed some styling issues on where the border color would still change on hover when disabled.

- Added correct cursors.

#### Segmented Button

- Added a `cursor: pointer` when enabled.

## 7.2.0

### Minor Changes

#### Pop Up

- Added new `disableAutoUpdate` prop to lock the pop up's position on scroll.

#### Input

- The `autocomplete` attribute has been removed due to a limitation with Shadow Dom encapsulation not allowing the attribute to be applied correctly.

#### Form Elements

- Added new slots for `help-text` and `error-text`.

#### Time Region

- Added the 'off' status as a status option.

### Patch Changes

#### Menu Item

- Restored `href`, `target`, `rel` and `download` attributes

#### Select

- Long options no longer fall over the drop down indicator

#### Time Region

- Fixed an issue where `serious` status was not correctly styling the border.

## 7.1.1

### Patch Changes

#### Classification Marking

- An invalid `classification` now correctly displays "Unclassified".

#### Web Components

- Fixed an issue where `font-size`, `line-height`, and `text-align` properties when set on parent elements would incorrectly override component styles.

## 7.1.0

### Minor Changes

- 66fe8eed: Added a `close-on-select` property to `rux-pop-up` that will close the pop-up when a user selects something from the menu.

### Patch Changes

- b30ae94c: Updated scrollbar styles in firefox
- 08efa7c0: Fixed an issue in rux-tabs where dynamically adding a tab would result in unexpected behavior.
- Updated dependencies [b30ae94c]
- Updated dependencies [08efa7c0]
- Updated dependencies [66fe8eed]
  - @astrouxds/astro-web-components@7.1.0

## 7.0.1

### Patch Changes

#### Monitoring Icon

- Removed the `title` attribute.

#### Monitoring Progress Icon

- Removed the `title` attribute.

#### Build

- Removed unnecessary type definitions in dist/types

#### Tokens

- Fixes an issue in the typography utility class calcs that was throwing errors in some build environments.

## 7.0.0

### Major Changes

- e6ab50e2: Updating card spacing to match Figma with design tokens
- cd0b73be: WHAT: The props of modal-title and modal-message on rux-dialog have been renamed header and message.
  WHY: Prop names are more accurate and less-verbose now.
  HOW TO MIGRATE: Change all instances of modal-title or modal-message props to header and message.
- 350070d5: menu item - removes --popup-menu-text-color, --popup-menu-item-background-color, --popup-menu-item-hover-background-color, --popup-menu-item-hover-text-color css custom properties
- 60be422d: What: Removed the title attribute from rux-icon. Why: The global HTML title attribute is not recommended for use, and was an oversight when added to rux-icon.
- 16011b5f: WHAT: Renamed rux-pop-up-menu to rux-pop-up.
  WHY: This naming convention was confusing with the addition of rux-menu.
  HOW TO MIGRATE: Find and replace all instances of rux-pop-up-menu with rux-pop-up.
- d344013a: Removes the animation on notification and makes the notification take up space in the DOM
- a7296b6b: Our /dist/custom-elements build has been removed in favor of a faster treeshakeable /dist/components build. We anticipate very few people are using this build. To check if your project is affected, you can do a global find for 'astro-web-components/dist/custom-elements' in your project. If you are using this build, switch to 'astro-web-components/dist/loader' instead.
- a97a688f: Fixing tab heights so they do not expand to the height of a direct container.
- 14961eb5: The angular wrapper has been updated and will no longer be compatible with Angular versions less than 12.
- 8bd85d35: patch: fixing bug where no value on the component would cause the progress bar to be too small.
- a0536351: Updating design tokens to current CSS custom properties.
- 8adb2313: Modifying dialog component to match spacing changes in Figma.
- efed8d01: Updating container spacing to match Figma design, using design tokens to achieve this.
- 9cf6ad00: Adding in text changes to the Link page on the AstroUXDS website.
- 4ef29bc7: Tabs - Fixed an issue where light dom styles could override the shadow dom. Check to make sure you aren't explicitly styling `rux-tab` elements. If you are, use parts instead
- 72617a88: WHAT: Global status bar no longer automaticall uppercases the app domain and name.
  WHY: This was changed in order to match design.
  HOW TO MIGRATE: If you are reliant on the app state and domain being in all caps, simply pass the `app-domain` and `app-state` an all uppercase version.
- acdb9fa3: The default display for content inside Tree Nodes and may break your application if you are using the Tree Node with icons or status symbols.

  ```
  <rux-tree-node>
     <rux-status status="critical"></rux-status>
     Tree Node 1.1
  </rux-tree-node>
  ```

  ```
  <rux-tree-node>
     <rux-status slot="prefix" status="critical"></rux-status>
     Tree Node 1.1
  </rux-tree-node>
  ```

  **Resolution:** Add `slot="prefix"` to any icons or status symbols.

- 350070d5: classification marking - what: remove footer-banner part. why? deprecated migration: use footer instead
- 70bb93a2: Updating the **Status Symbol** page on the Astro UXDS website. This page had text changes to be made referring to light theme, sections that were no longer relevant needed to be removed, color swatches for status symbol needed to be updated with the appropriate hex, RGB, and CSS values for light, dark, and light border. Compliance Rules needed to be updated.
- fb6c03ad: feat(rux-push-button)
  WHAT: part 'label' has been renamed to 'container'
  WHY: to bring consistency between styling push buttons and standard buttons
  HOW TO MIGRATE: If you were previously using ::part(label) to style your push button please change to ::part(container)
- 1f75e0f6: WHAT: rux-segmented-button: change default size from small to medium
  WHY: to align with other Astro inputs/buttons which default to medium
  HOW TO MIGRATTE: Add size="small" to segmented buttons you wish to remain small sized.
- d701180b: Converting stylesheet values to design tokens for spacing and correcting spacing issues for rux-select component.
- 16011b5f: WHAT: Removed the `ruxmenuitemselected` event from `rux-menu-item`.
  WHY: This event was being emitted for it's parent to hear and was not intended for use. This has been refactored to no longer be needed.
  HOW TO MIGRATE: If you have instaces of listeners listening for the `ruxmenuitemselected` event, those can be replaced with the new `ruxmenuselected` event. The `e.detail` that the `ruxmenuselected` event returns is the equivalent of `ruxmenuitemselected`.
- 6885b525: Creation of Accordion component (rux-accordion) and child component (rux-accordion-item).
- 4ef29bc7: Tabs - Individual tab components are now large by default. If you are using rux-tab outside the tabs component, you may need to manually add the new `small` attribute
- 16011b5f: WHAT: Removed the `ruxpopupselected` event on rux-pop-up. Added two new events to `rux-pop-up`, `ruxpopupopened` and `ruxpopupclosed`.
  WHY: The `ruxpopupselected` event has been replaced with the `ruxmenuselected` event on `rux-menu`. `rux-pop-up` was missing opened and closed events as well.
  HOW TO MIGRATE: Replace all listeners using `ruxpopupselected` with `ruxmenuselected`. For any listeners that are listening for the opening or closing of the `rux-pop-up`, you can now use `ruxpopupopened` and `ruxpopupclosed`.
- 27b72893: Modal has been removed. It has been renamed to Dialog to align with our Design System naming and shares the exact same API as Modal.

  Migration: You can do a global find/replace on your project for:

  `rux-modal` -> `rux-dialog`
  `ruxmodalclosed` -> `ruxdialogclosed`
  `ruxmodalopened` -> `ruxdialogopened`

### Minor Changes

- dd787288: Added support for scrollbars in dialog.
- 645bcecd: Adds typography utility classes
- acdb9fa3: rux-tree-node - add a prefix and suffix slot so content can be added right before and after the default slot
- 4ef29bc7: Tab - Added new explicit `small` attribute
- acdb9fa3: rux-tree-node - add indicator, node, and text parts
- 44bc076a: Links no longer change color on hover.
- acdb9fa3: rux-tree-node - update styles - remove border, change indicator, change hover and select background-color, add truncate text as default

### Patch Changes

- fb5c444d: rux-log - add spacing tokens and adjust for astro 7.0 design
- 5ae326fc: Updating clock spacing so it is in line with Figma and uses design tokens.
- 3d16d6fb: Changing border to box-shadow, cleaning up commented out code, changing heights and widths to design tokens.
- 24a2cb69: rux-segemented-button add spacing tokens and align to Astro 7.0 design
- e83ac3d0: rux-input - updated spacing to align with design using design tokens
- e706cd54: astrousdx.com - remove spectrum analyzer page, references, and redirect url to home page
- 245f6764: Updating checkbox to match Figma
- a97a688f: Removing Figma access token
- 7032b2da: rux-pop-up-menu add design spacing tokens
- 00853fd5: rux-switch - updated spacing with design tokens to align with design
- 0617987f: rux-progress / rux-indeterminate-progress spacing and design token updates
- 20de6be3: Removing script for testing holster.
- 313563e4: rux-classification-marking updated spacing to align with design.
- a08419c0: functional-components add spacing tokens to FormFieldMessages and align to astro design
- 0fe7fc51: Fixed an issue where the event detail on dialog would not reset to default value after it emitted once.
- f4041a4e: rux-textarea - add spacing tokens and adjust code to fix firefox issue with resize
- 55e684a7: rux-iunput search - turn the magnifying glass around
- 37d67cfd: rux-table add spacing tokens and align to astro 7.0 design
- fddd718d: rux-slider added design tokens to the slider and adjusted the background
- 991f5d66: Moved the `monitoring-label` part to the parent div of its previous location in order to provide more customizability.
- 70354c26: rux-input - refactored type=password to use button rather than rux-button and aligned to Astro design specs
- bf083308: rux-notification - add spacing tokens and align to astro 7.0 design
- a97a688f: fix: adding styling to tab component to specifiy height of tabs.
- 6d0f0b89: Modifying checkbox group to match Figma, Fixing border hover in checkbox
- dab3a7f0: Modifying styling of .rux-classification-marking tag
- a3822386: rux-tabs - set up design tokens and matched rux-tabs to astro design spacing standards
- a410d159: rux-radio / rux-radio-group - update spacing using design tokens and figma
- 516d772d: rux-button - implementt spacing design tokens and align to Astro design
- b994030f: rux-push-button add spacing tokens and align to Astro design specs
- 2ba8e9f4: replaces --disabled-opacity with --opacity-disabled design token
- f8a8a586: Fixing display and width so tag obeys content width.
- 4bf40336: rux-tab add shadow part for styling tab colors to replace deprecated custom properties
- Updated dependencies [d89430ef]
- Updated dependencies [e6ab50e2]
- Updated dependencies [fb5c444d]
- Updated dependencies [84e89afc]
- Updated dependencies [d89430ef]
- Updated dependencies [2a7e22c1]
- Updated dependencies [e171cbe1]
- Updated dependencies [cd0b73be]
- Updated dependencies [f94be0fc]
- Updated dependencies [5ae326fc]
- Updated dependencies [3d16d6fb]
- Updated dependencies [541523ab]
- Updated dependencies [010907c4]
- Updated dependencies [24a2cb69]
- Updated dependencies [e83ac3d0]
- Updated dependencies [e706cd54]
- Updated dependencies [245f6764]
- Updated dependencies [350070d5]
- Updated dependencies [1d4926c4]
- Updated dependencies [dd787288]
- Updated dependencies [4c701386]
- Updated dependencies [a97a688f]
- Updated dependencies [84e89afc]
- Updated dependencies [60be422d]
- Updated dependencies [7032b2da]
- Updated dependencies [d89430ef]
- Updated dependencies [00853fd5]
- Updated dependencies [16011b5f]
- Updated dependencies [809eb56c]
- Updated dependencies [d344013a]
- Updated dependencies [a7296b6b]
- Updated dependencies [a97a688f]
- Updated dependencies [0617987f]
- Updated dependencies [14961eb5]
- Updated dependencies [20de6be3]
- Updated dependencies [f1d93ff5]
- Updated dependencies [8bd85d35]
- Updated dependencies [f73e2219]
- Updated dependencies [645bcecd]
- Updated dependencies [acdb9fa3]
- Updated dependencies [d89430ef]
- Updated dependencies [1c49914c]
- Updated dependencies [4ef29bc7]
- Updated dependencies [853eead3]
- Updated dependencies [313563e4]
- Updated dependencies [a0536351]
- Updated dependencies [a08419c0]
- Updated dependencies [acdb9fa3]
- Updated dependencies [0fe7fc51]
- Updated dependencies [8adb2313]
- Updated dependencies [541523ab]
- Updated dependencies [d89430ef]
- Updated dependencies [14961eb5]
- Updated dependencies [efed8d01]
- Updated dependencies [f4041a4e]
- Updated dependencies [9cf6ad00]
- Updated dependencies [8d885e14]
- Updated dependencies [4ef29bc7]
- Updated dependencies [1482d397]
- Updated dependencies [f9b842f7]
- Updated dependencies [55e684a7]
- Updated dependencies [44bc076a]
- Updated dependencies [f73e2219]
- Updated dependencies [acdb9fa3]
- Updated dependencies [d89430ef]
- Updated dependencies [14961eb5]
- Updated dependencies [72617a88]
- Updated dependencies [acdb9fa3]
- Updated dependencies [541523ab]
- Updated dependencies [37d67cfd]
- Updated dependencies [d89430ef]
- Updated dependencies [350070d5]
- Updated dependencies [fddd718d]
- Updated dependencies [991f5d66]
- Updated dependencies [5e2608d1]
- Updated dependencies [70354c26]
- Updated dependencies [3c0cd2b8]
- Updated dependencies [70bb93a2]
- Updated dependencies [54364f1b]
- Updated dependencies [8d885e14]
- Updated dependencies [fb6c03ad]
- Updated dependencies [1f75e0f6]
- Updated dependencies [f9b842f7]
- Updated dependencies [bf083308]
- Updated dependencies [d701180b]
- Updated dependencies [a97a688f]
- Updated dependencies [6d0f0b89]
- Updated dependencies [16011b5f]
- Updated dependencies [d89430ef]
- Updated dependencies [dab3a7f0]
- Updated dependencies [f9b842f7]
- Updated dependencies [a3822386]
- Updated dependencies [84e89afc]
- Updated dependencies [5e2608d1]
- Updated dependencies [5e2608d1]
- Updated dependencies [0270d0a6]
- Updated dependencies [a410d159]
- Updated dependencies [6885b525]
- Updated dependencies [516d772d]
- Updated dependencies [f1d93ff5]
- Updated dependencies [b994030f]
- Updated dependencies [4ef29bc7]
- Updated dependencies [2ba8e9f4]
- Updated dependencies [f8a8a586]
- Updated dependencies [4bf40336]
- Updated dependencies [d89430ef]
- Updated dependencies [c9b10b83]
- Updated dependencies [d89430ef]
- Updated dependencies [16011b5f]
- Updated dependencies [27b72893]
  - @astrouxds/astro-web-components@7.0.0

## 7.0.0-beta.4

### Major Changes

- e6ab50e2: Updating card spacing to match Figma with design tokens
- cd0b73be: WHAT: The props of modal-title and modal-message on rux-dialog have been renamed header and message.
  WHY: Prop names are more accurate and less-verbose now.
  HOW TO MIGRATE: Change all instances of modal-title or modal-message props to header and message.
- 350070d5: menu item - removes --popup-menu-text-color, --popup-menu-item-background-color, --popup-menu-item-hover-background-color, --popup-menu-item-hover-text-color css custom properties
- 60be422d: What: Removed the title attribute from rux-icon. Why: The global HTML title attribute is not recommended for use, and was an oversight when added to rux-icon.
- 16011b5f: WHAT: Renamed rux-pop-up-menu to rux-pop-up.
  WHY: This naming convention was confusing with the addition of rux-menu.
  HOW TO MIGRATE: Find and replace all instances of rux-pop-up-menu with rux-pop-up.
- d344013a: Removes the animation on notification and makes the notification take up space in the DOM
- a97a688f: Fixing tab heights so they do not expand to the height of a direct container.
- 8bd85d35: patch: fixing bug where no value on the component would cause the progress bar to be too small.
- 8adb2313: Modifying dialog component to match spacing changes in Figma.
- efed8d01: Updating container spacing to match Figma design, using design tokens to achieve this.
- 4ef29bc7: Tabs - Fixed an issue where light dom styles could override the shadow dom. Check to make sure you aren't explicitly styling `rux-tab` elements. If you are, use parts instead
- 72617a88: WHAT: Global status bar no longer automaticall uppercases the app domain and name.
  WHY: This was changed in order to match design.
  HOW TO MIGRATE: If you are reliant on the app state and domain being in all caps, simply pass the `app-domain` and `app-state` an all uppercase version.
- acdb9fa3: The default display for content inside Tree Nodes and may break your application if you are using the Tree Node with icons or status symbols.

  ```
  <rux-tree-node>
     <rux-status status="critical"></rux-status>
     Tree Node 1.1
  </rux-tree-node>
  ```

  ```
  <rux-tree-node>
     <rux-status slot="prefix" status="critical"></rux-status>
     Tree Node 1.1
  </rux-tree-node>
  ```

  **Resolution:** Add `slot="prefix"` to any icons or status symbols.

- 350070d5: classification marking - what: remove footer-banner part. why? deprecated migration: use footer instead
- fb6c03ad: feat(rux-push-button)
  WHAT: part 'label' has been renamed to 'container'
  WHY: to bring consistency between styling push buttons and standard buttons
  HOW TO MIGRATE: If you were previously using ::part(label) to style your push button please change to ::part(container)
- 1f75e0f6: WHAT: rux-segmented-button: change default size from small to medium
  WHY: to align with other Astro inputs/buttons which default to medium
  HOW TO MIGRATTE: Add size="small" to segmented buttons you wish to remain small sized.
- d701180b: Converting stylesheet values to design tokens for spacing and correcting spacing issues for rux-select component.
- 16011b5f: WHAT: Removed the `ruxmenuitemselected` event from `rux-menu-item`.
  WHY: This event was being emitted for it's parent to hear and was not intended for use. This has been refactored to no longer be needed.
  HOW TO MIGRATE: If you have instaces of listeners listening for the `ruxmenuitemselected` event, those can be replaced with the new `ruxmenuselected` event. The `e.detail` that the `ruxmenuselected` event returns is the equivalent of `ruxmenuitemselected`.
- 6885b525: Creation of Accordion component (rux-accordion) and child component (rux-accordion-item).
- 4ef29bc7: Tabs - Individual tab components are now large by default. If you are using rux-tab outside the tabs component, you may need to manually add the new `small` attribute
- 16011b5f: WHAT: Removed the `ruxpopupselected` event on rux-pop-up. Added two new events to `rux-pop-up`, `ruxpopupopened` and `ruxpopupclosed`.
  WHY: The `ruxpopupselected` event has been replaced with the `ruxmenuselected` event on `rux-menu`. `rux-pop-up` was missing opened and closed events as well.
  HOW TO MIGRATE: Replace all listeners using `ruxpopupselected` with `ruxmenuselected`. For any listeners that are listening for the opening or closing of the `rux-pop-up`, you can now use `ruxpopupopened` and `ruxpopupclosed`.

### Minor Changes

- dd787288: Added support for scrollbars in dialog.
- 645bcecd: Adds typography utility classes
- acdb9fa3: rux-tree-node - add a prefix and suffix slot so content can be added right before and after the default slot
- 4ef29bc7: Tab - Added new explicit `small` attribute
- acdb9fa3: rux-tree-node - add indicator, node, and text parts
- 44bc076a: Links no longer change color on hover.
- acdb9fa3: rux-tree-node - update styles - remove border, change indicator, change hover and select background-color, add truncate text as default

### Patch Changes

- fb5c444d: rux-log - add spacing tokens and adjust for astro 7.0 design
- 5ae326fc: Updating clock spacing so it is in line with Figma and uses design tokens.
- 3d16d6fb: Changing border to box-shadow, cleaning up commented out code, changing heights and widths to design tokens.
- 24a2cb69: rux-segemented-button add spacing tokens and align to Astro 7.0 design
- e83ac3d0: rux-input - updated spacing to align with design using design tokens
- 245f6764: Updating checkbox to match Figma
- a97a688f: Removing Figma access token
- 7032b2da: rux-pop-up-menu add design spacing tokens
- 00853fd5: rux-switch - updated spacing with design tokens to align with design
- 0617987f: rux-progress / rux-indeterminate-progress spacing and design token updates
- 20de6be3: Removing script for testing holster.
- 313563e4: rux-classification-marking updated spacing to align with design.
- a08419c0: functional-components add spacing tokens to FormFieldMessages and align to astro design
- f4041a4e: rux-textarea - add spacing tokens and adjust code to fix firefox issue with resize
- 37d67cfd: rux-table add spacing tokens and align to astro 7.0 design
- fddd718d: rux-slider added design tokens to the slider and adjusted the background
- 70354c26: rux-input - refactored type=password to use button rather than rux-button and aligned to Astro design specs
- bf083308: rux-notification - add spacing tokens and align to astro 7.0 design
- a97a688f: fix: adding styling to tab component to specifiy height of tabs.
- 6d0f0b89: Modifying checkbox group to match Figma, Fixing border hover in checkbox
- dab3a7f0: Modifying styling of .rux-classification-marking tag
- a3822386: rux-tabs - set up design tokens and matched rux-tabs to astro design spacing standards
- a410d159: rux-radio / rux-radio-group - update spacing using design tokens and figma
- 516d772d: rux-button - implementt spacing design tokens and align to Astro design
- b994030f: rux-push-button add spacing tokens and align to Astro design specs
- 2ba8e9f4: replaces --disabled-opacity with --opacity-disabled design token
- f8a8a586: Fixing display and width so tag obeys content width.
- 4bf40336: rux-tab add shadow part for styling tab colors to replace deprecated custom properties
- Updated dependencies [e6ab50e2]
- Updated dependencies [fb5c444d]
- Updated dependencies [cd0b73be]
- Updated dependencies [5ae326fc]
- Updated dependencies [3d16d6fb]
- Updated dependencies [24a2cb69]
- Updated dependencies [e83ac3d0]
- Updated dependencies [245f6764]
- Updated dependencies [350070d5]
- Updated dependencies [dd787288]
- Updated dependencies [a97a688f]
- Updated dependencies [60be422d]
- Updated dependencies [7032b2da]
- Updated dependencies [00853fd5]
- Updated dependencies [16011b5f]
- Updated dependencies [d344013a]
- Updated dependencies [a97a688f]
- Updated dependencies [0617987f]
- Updated dependencies [20de6be3]
- Updated dependencies [8bd85d35]
- Updated dependencies [645bcecd]
- Updated dependencies [acdb9fa3]
- Updated dependencies [4ef29bc7]
- Updated dependencies [313563e4]
- Updated dependencies [a08419c0]
- Updated dependencies [acdb9fa3]
- Updated dependencies [8adb2313]
- Updated dependencies [efed8d01]
- Updated dependencies [f4041a4e]
- Updated dependencies [4ef29bc7]
- Updated dependencies [44bc076a]
- Updated dependencies [acdb9fa3]
- Updated dependencies [72617a88]
- Updated dependencies [acdb9fa3]
- Updated dependencies [37d67cfd]
- Updated dependencies [350070d5]
- Updated dependencies [fddd718d]
- Updated dependencies [5e2608d1]
- Updated dependencies [70354c26]
- Updated dependencies [54364f1b]
- Updated dependencies [fb6c03ad]
- Updated dependencies [1f75e0f6]
- Updated dependencies [bf083308]
- Updated dependencies [d701180b]
- Updated dependencies [a97a688f]
- Updated dependencies [6d0f0b89]
- Updated dependencies [16011b5f]
- Updated dependencies [dab3a7f0]
- Updated dependencies [a3822386]
- Updated dependencies [5e2608d1]
- Updated dependencies [5e2608d1]
- Updated dependencies [0270d0a6]
- Updated dependencies [a410d159]
- Updated dependencies [6885b525]
- Updated dependencies [516d772d]
- Updated dependencies [b994030f]
- Updated dependencies [4ef29bc7]
- Updated dependencies [2ba8e9f4]
- Updated dependencies [f8a8a586]
- Updated dependencies [4bf40336]
- Updated dependencies [16011b5f]
  - @astrouxds/astro-web-components@7.0.0-beta.4

## 7.0.0-beta.3

### Major Changes

- a7296b6b: Our /dist/custom-elements build has been removed in favor of a faster treeshakeable /dist/components build. We anticipate very few people are using this build. To check if your project is affected, you can do a global find for 'astro-web-components/dist/custom-elements' in your project. If you are using this build, switch to 'astro-web-components/dist/loader' instead.
- 27b72893: Modal has been removed. It has been renamed to Dialog to align with our Design System naming and shares the exact same API as Modal.

  Migration: You can do a global find/replace on your project for:

## 6.13.1

### Patch Changes

#### Tab

- Added `container` CSS Shadow Part.
- Fixed an issue where multiple tabs on the same page would hide each others content when selected.

#### Checkbox

- Fixed an issue where the label was disappearing when checked.

## 6.13.0

### Minor Changes

#### Timeline

- support for partial time regions

#### Dialog

- Added better keyboard support for tabbing between confirm and deny buttons, and triggers deny on an escape key press.

### Patch Changes

#### Progress

- Visual fix for Firefox to properly align progress indicator

## 6.12.1

### Patch Changes

- e00a744a: timeline - fixed an issue where time regions were not updating when their ranges were edited
- Updated dependencies [e00a744a]
  - @astrouxds/astro-web-components@6.12.1

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

### Patch Changes

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
