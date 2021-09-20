# Change Log

## [0.0.15] (unreleased)

### Breaking Changes

#### Checkbox

-   `required` prop has been removed. Use Checkbox Group component instead to display invalid state.
-   `errorText` prop has been removed. Use Checkbox Group component instead.

### Switch

-   `required` prop has been removed.

## [0.0.14] 2021-09-10

### Breaking Changes

### CSS Custom Props

> MAJOR CHANGE

CSS Custom Properties have been significantly rewritten. Some properties have been renamed or removed entirely. In addition, we have switched to dash-case for naming. Consult each individual component's documentation for more information.

#### Global Status Bar

-   Removed `include-app-state` property in favor of `app-state`
-   Removed `include-username` property in favor of `username`

#### Icon

-   Removed `color` property in favor of css styling via `currentColor`
