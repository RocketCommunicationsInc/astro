# Change Log

## [0.0.18] (unreleased)

### Event names

-   Gloably updated event names from camel case to lower case to be compatible with angular event name formats
-   Updated unit tests, e2e tests, and stories to use lowercase event names `rux{$eventName}`
-   Updated documentation for frameworks to reflect event name change
-   Updated react tests to use lowercase event names `onRux{$eventName}`

## [0.0.17] 2021-09-24

### Switch

-   `help-text` prop has been removed.
-   `error-text` prop has been removed

### Input Field

-   Component has been renamed to `rux-input` for convenience

### Radio

-   `rux-change` event has been removed. Use the `rux-change` event on rux-radio-group instead.

## [0.0.15] 2021-09-22

### Breaking Changes

#### Input Field

-   Component has been renamed to `rux-input` for convenience.

#### Checkbox

-   `required` prop has been removed. Use Checkbox Group component instead to display invalid state.
-   `errorText` prop has been removed. Use Checkbox Group component instead.

### Switch

-   `required` prop has been removed.
-   `help-text` prop has been removed.
-   `error-text` prop has been removed.

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
