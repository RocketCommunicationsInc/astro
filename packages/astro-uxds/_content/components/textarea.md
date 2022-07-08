---
tags: components
path: /components/textarea
date: Last Modified
layout: components.template.njk
title: Textarea
demo: forms-textarea--default-story
storybook: forms-textarea--default-story
git: rux-textarea
height: 135px
scrolling: yes
theme: true
---

# Textarea

Textareas are multi-line text inputs that allow for entering text in a larger area than a single-line text input would allow. They are typically used for multi-line input use cases like comments or feedback. (This short description could go in the Storybook section.)

## Rules of Thumb

- Use when there is a wide variability in a user’s responses to a prompt and that input is longer than a single line
- Does not utilize text formatting for the Textarea.
- Every Textarea should have a label. A Textarea without a label is ambiguous and not accessible.
- For **sizing**, consider the amount of text likely to be input into the field:
- By default, start with two rows.
- Where space is limited such as inside a modal, limit manual resizing.
- On page load, if the Textarea already contains large amounts of text, consider resizing to reveal the full text.

## Appearance and Behavior

Textareas consist of a text input field with a short, descriptive label and a resizing handle in the bottom right corner of the field container. There is a 1 px inside border, and padding applied to the left, right, top, and bottom of the text.

### Text

Textareas can have default text, or placeholder text, within them by default. Placeholder text can be used when the user has little to no familiarity with the subject matter and needs guidance.

### Sizes

There are three different sizes of Textarea components: Small, Medium, and Large. These sizes are used to maintain correct padding for text depending on content.

### States

Textareas have four different states: Active, Hover, Invalid, and Disabled.

### Resizing

The user is allowed to manually resize the text area components to fit whatever content they intend to capture in the input. Developers should select an appropriately sized component to preserve the correct padding for the desired input length.

## Examples

:::two-col

![Do: Use a multi-line text field that is the correct size for the expected input.](/img/components/textarea-do-1.png "Do: Use a multi-line text field that is the correct size for the expected input.")

![Don't: Use if needing to format some of the text, such as applying bold or adding links.](/img/components/textarea-dont-1.png "Don't: Use if needing to format some of the text, such as applying bold or adding links.")

![Do: Use a label along with a Textarea for better user accessibility.](/img/components/textarea-do-2.png "Do: Use a label along with a Textarea for better user accessibility.")

![Don't: Use placeholder text as a label as it will disappear on focus.](/img/components/textarea-dont-2.png "Don't: Use placeholder text as a label as it will disappear on focus.")
