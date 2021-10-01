---
tags: components
path: /components/checkbox
date: Last Modified
layout: components.template.njk
title: Checkbox
demo: components-form-elements--checkboxes
storybook: components-form-elements--checkboxes
git:
height: 250px
theme: true
---

# Checkbox

A Checkbox describes a state or value that can be either “On" or "Off.” Checkboxes are not mutually exclusive. More than one Checkbox may be checked at the same time.

## Rules of Thumb

- Use Checkboxes when there is a list of options from which the user may select any number of choices.
- In a list, each Checkbox is independent of all other Checkboxes.
- When asking the user to make a mutually exclusive choice, use a Radio Button not a Checkbox.
- Group Checkboxes whenever possible.
- When grouped without a parent checkbox, provide a group label.

## Appearance and Behavior

A basic Checkbox consists of a visual indicator of its selected state followed by a label. Individual Checkboxes can appear selected (checked), Unselected (no check), and Disabled (no action can be taken by the user). An Indeterminate state (a dash symbol rather than checked) may display when a checkbox is used as a parent of a group of checkboxes where at least one child is selected and at least one is not.

A checkbox can be configured for required input. Help Text for individual Checkbox list items left-aligns with the item’s text and not its icon for easier text scanning. To learn more about adding Help Text or Validation to Checkboxes or Checkbox groups, see the [Forms and Validation](/patterns/forms-and-validation) guidance.

::: note
Don’t use a Checkbox to initiate an action. Instead, use an [Action Button](/components/button) or a [Switch Button](/components/switch)
:::

## Examples

::: two-col
![Do: Neatly arrange and group multiple Checkboxes whenever possible.](/img/components/checkbox-do-1.png "Do: Neatly arrange and group multiple Checkboxes whenever possible.")

![Don’t: Poorly placed and misaligned Checkboxes make it difficult for users to differentiate one state from another.](/img/components/checkbox-dont-1.png "Don’t: Poorly placed and misaligned Checkboxes make it difficult for users to differentiate one state from another.")
:::

::: two-col
![Do: Use parent checkboxes, when grouped, to select all or select none.](/img/components/checkbox-do-2.png "Do: Use parent checkboxes, when grouped, to select all or select none.")

![Don’t: Group a single checkbox under a parent checkbox unless you have a good reason to do so.](/img/components/checkbox-dont-2.png "Group a single checkbox under a parent checkbox unless you have a good reason to do so.")
:::

::: two-col
![Do: Reflect an indeterminate state when a mix of child values are applied.](/img/components/checkbox-do-3.png "Do: Reflect an indeterminate state when a mix of child values are applied.")

![Don’t: Group checkboxes without a parent label.](/img/components/checkbox-dont-3.png "Don’t: Group checkboxes without a parent label.")
:::
