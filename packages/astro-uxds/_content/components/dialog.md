---
tags: components
path: /components/dialog
date: Last Modified
layout: components.template.njk
title: Dialog
demo: components-dialog--dialog
storybook: components-dialog--dialog
git: rux-dialog
height: 240px
theme: true
---

# Dialog

A Dialog interrupts app processing to prompt a user to confirm an action or acknowledge a piece of information. It displays information along with a set of buttons allowing users to “Accept" or "Cancel” the actions presented within the Dialog.

## Rules of Thumb

- Use a Dialog to:
  - Ask users to confirm irreversible, destructive or expensive actions.
  - [Notify](/patterns/notifications) the user of an urgent event.
- Use buttons within a Dialog to confirm or cancel actions. Avoid using links or other components.
- Use clearly titled action buttons to exit a Dialog. Don’t use a “close box.”
- Title buttons by choosing a verb that describes its action.
- Use Dialogs sparingly as they interrupt critical workflow.
- Dialog text should be clearly written, brief and actionable.

## Appearance and Behavior

## Examples

:::two-col

![Do: Use buttons within a Dialog to confirm or cancel actions.](/img/components/modal-do-1.png "Do: Use buttons within a Dialog to confirm or cancel actions.")

![Don’t: Use links or other components to confirm or cancel actions.](/img/components/modal-dont-1.png "Don’t: Use links or other components to confirm or cancel actions.")

:::
