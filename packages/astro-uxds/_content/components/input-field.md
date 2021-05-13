---
tags: components
path: /components/input-field
date: Last Modified
layout: components.template.njk
title: Input Field
demo: components-form-elements--input-fields
storybook: components-form-elements--input-fields
git:
height: 310px
theme: true
---

# Input Field


Input Fields allow users to enter freeform text. Variations on this field often provide specific data entry formats such as masked data (e.g. passwords or phone numbers), date and time, and numeric data entry.


## Rules of Thumb

- Stacked Input Fields are left justified to one another.
- Use consistent spacing between stacked fields.
- Don't use text smaller than what is defined in the CSS. Text size within fields is critical to usability.
- Generally, the size of the input should match the length of the expected input content.
- Use help text to provide validation support, rather than placeholder text.
- Do not use placeholder text for information that is vital to the user's understanding of the text input. A placeholder will disappear once the input has focus and it should only be used for short, clear and generic instructions, such as using "Search..." in a search field.
- Use required and optional indicators depending on their frequency. e.g. If more fields are optional, only mark required fields.
- When indicating required fields, an asterisk should be placed to the right of the label.
- When indicating optional fields, add the word _optional_ in parenthesis to the right of the label.
- When implementing numeric inputs, utilize browser defaults whenever possible. Define the range and step size within the HTML element when appropriate. Include the range and step size values in the help text.
- When appropriate, use input masking to automatically format a user's entry. E.g., when entering a phone number, apply a consistent, recognizable format like (XXX) XXX-XXXX or another similar format.

## Appearance and Behavior
An Input Field consists of a descriptive, concise label paired with an entry field. Optionally, inputs may include help text, left-aligned beneath the input, to assist the user in understanding what kind of content is accepted by the input. Inputs displayed in a form may also be paired with a visual indicator of a required, or optional state. Disabled inputs are displayed with a different opacity and cannot be interacted with by the user.

Standard states for Input Fields include Active (the default, interactive state for a text input), Hover (the user has paused over an active or focussed input), Focus (the field is selected and ready for data entry), Disabled (the field is not interactive, and its content is not sent when the form is submitted), and Read-only.

An Input Field is enabled if it is eligible for interaction and focused if it is the current target for keystrokes.

An Input Field can be configured for required input, limited data ranges, or specific data formats. To learn more about adding Help Text or Validation to Input Fields, see the [Forms and Validation](/patterns/forms-and-validation) guidance. 

Input Fields have a smaller variant which may be beneficial in layouts where space is at a premium.

## Examples

:::two-col
![Do: Design a well organized form with logical, clearly labeled groupings.](/img/components/input-fields-do-1.png "Do: Design a well organized form with logical, clearly labeled groupings.")

![Don’t: Design a long form without labels, splits, or groupings.](/img/components/input-fields-dont-1.png "Don’t: Design a long form without labels, splits, or groupings.")

:::
