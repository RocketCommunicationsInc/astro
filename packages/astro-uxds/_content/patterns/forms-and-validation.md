---
tags: components
path: /patterns/validation
date: Last Modified
layout: components.template.njk
title: Forms and Validation
---

## Forms

Forms are used to collect, validate, and submit user input. They usually contains form elements including [Checkbox](/components/checkbox), [Dialog Box](/components/dialog-box), [Drop Down](/components/drop-down), [Input Field](/components/input-field), [Radio Button](/components/radio-button) and [Toggle](/components/toggle).

## Form Layout
Forms should be designed in columns as this improves scanability. When possible, a form should be one column. Information can be presented in multiple columns if they are grouped together.

One-column layout is preferred, but use two-column layouts when:
- There are too many components to fit in an area of the page
- Specific fields have strong associations. 

![Two Column Layout. The Observations From field is associated with the Observations Start Time field](/img/patterns/forms-layout.png)

## Form Spacing

![Form Spacing.](/img/patterns/forms-spacing.png)

## Labels

Labels should use clear but concise language, and provide enough information for the user to accurately complete the required information.

Labels should follow the vertical format of the form. Place labels above their respective fields, and align with [Input Field](/components/input-field) text. Group a label with its field so that there is a clear distinction between fields.


## Rules of Thumb

- Disabled elements don't get focus via click, tap, or keyboard, aren’t accessible when tabbing, and are not submitted with form data.
- Read-only elements (e.g., `<input type=“text” readonly />`) should allow focus via click, tap, or keyboard, are accessible when tabbing, and are submitted with form data.
- The length of the input field should reflect the intended length of content.

## Validation

Validation ensures that data is properly entered into an Input Field or Form. It alerts users to data errors, required input and prompts them to make corrections.

Input Fields, Checkboxes and Drop Down Menus can be configured to require user input and to enforce specific data formats. Once configured, these elements can provide validation as users move through a group of controls, such as a form, within a Dialog Box or Pane. Validation is then employed a second time when “Apply” or “OK” is selected.

Individual elements outside of a Dialog Box or Pane can also be configured for validation.

## Rules of Thumb

- Validate user input immediately after the element loses focus. Don’t wait to validate elements upon “Apply.”
- Don’t reset the form. Requiring users to re-input valid data is poor user experience.
- In the same voice, write short, simple and precise error messages that assist users in easily correcting input errors.
- Clearly mark required fields with an asterisk.
- Display examples of correctly formatted data.
- Use appropriate input type on form fields for the expected data input (e.g., `<input type="number">` when entering numeric data)

::: note Poorly written error messages confuse and frustrate the user and force them to fix the input problem through trial and error.

A well written validation error message greatly reduces the user’s error recovery time and boosts user’s confidence in the quality of the application. The error message should inform the user as succinctly as possible:

- What the input problem is.
- Why the input was deemed invalid.
- How to fix the input error.
  :::

## Writing in the Astro Voice

The voice of Astro applications is direct, confident and reflects the critical nature of Astro events and processes. It’s never chatty or informal nor does it personify technology.

Tips for writing validation error messages in the voice of Astro:

- Choose language that’s simple, brief and commanding. Astro users are often in high-pressure, time-sensitive situations with only seconds to correctly respond. Therefore, only include information absolutely necessary to swiftly resolve the error.
- Omit pronouns. In error messages pronouns add no value and take up already limited space. Pronouns also assume an intimacy with the user making the message seem less formal and less important.
- Never personify the application. Assigning human qualities to a virtual environment is the parlance of Science Fiction. It’s inappropriate for the vital nature of Astro applications.
- Don’t use salutations. Leave out: “hello, goodbye, welcome,” etc.

## Appearance and Behavior

Configuration options for validation of Input Fields:
:::two-col

![Required Input - user must enter some text. If no text is entered, a warning icon and optional instructional text is shown.](/img/patterns/val-required-input.png 'Required Input - user must enter some text. If no text is entered, a warning icon and optional instructional text is shown.')

![Numeric Range - input must be a number within a specific range. Non-numeric characters and out-of-range values are indicated with a warning icon and optional instructional text.](/img/patterns/val-numeric-range.png 'Numeric Range - input must be a number within a specific range. Non-numeric characters and out-of-range values are indicated with a warning icon and optional instructional text.')

![Time - input must be a valid time. Text that cannot be recognized as a valid time is indicated with a warning icon and optional instructional text.](/img/patterns/val-time.png 'Time - input must be a valid time. Text that cannot be recognized as a valid time is indicated with a warning icon and optional instructional text.')

![Date - input must be a valid date. Text that cannot be recognized as a valid date is indicated with a warning icon and optional instructional text.](/img/patterns/val-date.png 'Date - input must be a valid date. Text that cannot be recognized as a valid date is indicated with a warning icon and optional instructional text.')

![Checkboxes can be configured to require input, where at least one item in a group must be selected.](/img/patterns/val-group-checkbox.png 'Checkboxes can be configured to require input, where at least one item in a group must be selected.')

![Drop Down Menus can be configured to require input, where at least one item in the menu must be selected.](/img/patterns/val-dropdown-input.png 'Drop Down Menus can be configured to require input, where at least one item in the menu must be selected.')

:::
