---
tags: components
path: /components/dialog-box
date: Last Modified
layout: components.template.njk
title: Dialog Box
demo: components-dialog-box--dialog-box
storybook: components-dialog-box--dialog-box
git: rux-modal
height: 240px
theme: true
---

# Dialog Box

A Dialog Box interrupts app processing to prompt a user to confirm an action or acknowledge a piece of information. It displays information along with a set of buttons allowing users to “Accept" or "Cancel” the actions presented within the Dialog Box.

## Rules of Thumb

- Use a Dialog Box to:
  - Ask users to confirm irreversible, destructive or expensive actions.
  - [Notify](/patterns/notifications) the user of an urgent event.
- Use buttons within a Dialog Box to confirm or cancel actions. Avoid using links or other components.
- Use clearly titled action buttons to exit a Dialog Box. Don’t use a “close box.”
- Title buttons by choosing a verb that describes its action.
- Use Dialog Boxes sparingly as they interrupt critical workflow.
- Dialog Box text should be clearly written, brief and actionable.

## Appearance and Behavior

## Examples

:::two-col

![Do: Use buttons within a Dialog Box to confirm or cancel actions.](/img/components/modal-do-1.png "Do: Use buttons within a Dialog Box to confirm or cancel actions.")

![Don’t: Use links or other components to confirm or cancel actions.](/img/components/modal-dont-1.png "Don’t: Use links or other components to confirm or cancel actions.")

:::
