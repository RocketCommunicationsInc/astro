---
tags: components
path: /components/checkbox
date: Last Modified
layout: components.template.njk
title: Checkbox
demo: https://rocketcom.bitbucket.io/html-demos/checkbox.html
storybook: components-form-elements--checkboxes
git: rux-checkbox
height: 150px
theme: true
---

# Checkbox

A Checkbox describes a state or value that can be either “On or Off.” Checkboxes are not mutually exclusive. More than one Checkbox may be checked at the same time.

## Rules of Thumb

- Use Checkboxes when there is a list of options from which the user may select any number of choices.
- In a list, each Checkbox is independent of all other Checkboxes.
- When asking the user to make a mutually exclusive choice, use a Radio Button not a Checkbox.
- Group Checkboxes whenever possible.

## Appearance and Behavior

A checkbox can be configured for required input. [See Form and Input Validation](/patterns/forms-and-validation).

::: note
Don’t use a Checkbox to initiate an action. Instead, use an [Action Button](/components/button) or a [Toggle Button](/components/toggle)
:::

## Examples

::: two-col
![Do: Neatly arrange and group multiple Checkboxes whenever possible.](/img/components/checkbox-do-1.png "Do: Neatly arrange and group multiple Checkboxes whenever possible.")

![Don’t: Poorly placed and misaligned Checkboxes make it difficult for users to differentiate one state from another.](/img/components/checkbox-dont-1.png "Don’t: Poorly placed and misaligned Checkboxes make it difficult for users to differentiate one state from another.")

:::
