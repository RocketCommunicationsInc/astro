# Migrations

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
| --clock-text-color                        | `rux-clock::part(container) { color: red; }` **`container` part is only available in 7.0`**                                     |
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
If you have a strong, immediate use case, open an issue describing the removed custom property and a brief description of your use case.

- --input-background-color
- --input-text-color
- --input-focus-border-color
- --input-selection-background-color
- --input-invalid-border-color
- --menu-item-divider-border-color
- --progress-padding
- --modal-background-color
- --modal-border-color
- --progress-radius
- --progress-height
- --progress-width
- --progress-determinate-bar-background-color
- --progress-determinate-track-background-color
- --progress-determinate-track-border-color
- --progress-label-color
- --pushbutton-selected-background-color
- --pushbutton-selected-border-color
- --pushbutton-selected-text-color
- --pushbutton-selected-hover-text-color
- --segmented-button-hover-border-color
- --segmented-button-selected-background-color
- --select-menu-option-text-hover-color
- --select-menu-option-selected-background-color
- --select-menu-option-selected-text-color
- --select-menu-inactive-caret
- --select-menu-active-caret
- --select-menu-background-color
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
- --switch-background-color
- --switch-hover-on-color
- --switch-hover-off-color
- --switch-on-color
- --switch-off-border-color
- --tab-text-color
- --tab-border-color
- --tab-hover-text-color
- --tab-selected-text-color
- --table-header-background-color
- --table-header-text-color
- --table-header-box-shadow
- --table-row-selected-background-color
- --table-row-selected-border-color
- --tree-text-color
- --tree-border-color
- --tree-accent-color
- --tree-hover-background-color
- --tree-hover-text-color
- --tree-selected-border-color
- --tree-selected-accent-color
- --tree-expanded-border-color
- --popup-menu-background-color
- --popup-menu-border-color
- --popup-menu-caret-background-color
- --popup-menu-caret-left
- --popup-menu-caret-size
- --popup-menu-transition-speed
- --notification-icon-color
