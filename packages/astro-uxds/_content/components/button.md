---
tags: components
path: /components/button
date: Last Modified
layout: components.template.njk
title: Button
demo: components-buttons--all-button-variants
storybook: components-buttons--standard-button
git: rux-button
height: 260px
scrolling: yes
theme: true
---

# Button

Action Buttons allow users to trigger actions by clicking, tapping, or pressing a corresponding key on a keyboard, such as the “Enter” key.

## Rules of Thumb

- Use only predefined button colors, sizes and fonts — don’t customize or alter them.
- Don’t design elements which look similar to buttons but act differently. Buttons are actionable elements.
- Don’t activate Pop Up Menus from buttons.
- Buttons within the same group should be the same size. Use the width of the widest button.
- Space buttons evenly.
- Clearly title buttons by choosing a verb that describes the action the user performs at precisely the moment the button is clicked: “Save, Close, Print, \* Delete, Change Password,” etc.
- Resize button width to accommodate the title; do not abbreviate or truncate button titles.
- Don’t use an outside label to introduce a button. Instead, clearly title the button.
- Add an ellipsis (…) to the button title if it opens another window, Dialog Box or app.
- In button groups, the primary button with the preferred user action shall be placed on the right and all buttons with secondary actions to the left of the preferred action button.
- Position buttons consistently across the application. Unless there is a good reason not to, right-align buttons in Astro applications.

## Outline Button

Outline Buttons are an alternative button style to be used in situations where a de-emphasized button is beneficial in guiding the user to a preferred option. For example, use an outline button for the less preferred option in Ok/Cancel button pairings.

## Examples

:::two-col

![Do: Use buttons for actionable controls only](/img/components/button-do-1.png "Do: Use buttons for actionable controls only")

![Don't: Use elements that look like buttons but are not](/img/components/button-dont-1.png "Don't: Use elements that look like buttons but are not")

![Do: Right-align buttons and give them adequate spacing from fields.](/img/components/button-do-2.png "Do: Right-align buttons and give them adequate spacing from fields.")

![Don’t: Mix button colors and sizes.](/img/components/button-dont-2.png "Don’t: Mix button colors and sizes.")

![Do: Use standardized button colors only.](/img/components/button-do-3.png "Do: Use standardized button colors only.")

:::
