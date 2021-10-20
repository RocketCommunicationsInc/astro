# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 4.4.6 (2021-10-20)

**Note:** Version bump only for package @astrouxds/astro-web-components

## [4.4.5](https://github.com/nortonprojects/astro/compare/v1.0.0...v4.4.5) (2021-10-20)

**Note:** Version bump only for package @astrouxds/astro-web-components

# Change Log

## [0.0.18] (2021-10-12)

### Breaking Changes

#### Events

-   Globally updated event names from camel case to lower case to be compatible with angular event name formats. You can do a find/replace for 'rux-{eventname}' -> 'rux{eventname}'

#### Input

-   `small` property has been removed. Use `size=small` instead.

#### Textarea

-   `small` property has been removed. Use `rows` property instead to control the height of the element.

#### Select

Select has had a significant rewrite and is now a full Shadow DOM component. Instead of using the native `<option>` and `<optgroup>` elements, you should now use the new Astro versions: `<rux-option>` and `<rux-option-group>`. This should be a simple find and replace.

The other major breaking change is that `<rux-option>` requires a label property rather than setting the label as a slot.

For example:

```
<option value="1">One</option>
```

should now become:

```
<rux-option value="1" label="One"></rux-option>
```

### Features

#### Input

-   Inputs with `type="password"` now support toggle show/hide by including the `visibility` and `visibility-off` rux-icons as clickable.
-   Password inputs now swap types between `password` and `text` to show/hide the password.

#### Event names

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
