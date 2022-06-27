---
tags: components
path: /components/switch
date: Last Modified
layout: components.template.njk
title: Switch
demo: components-switch--switch
storybook: components-switch--switch
git: rux-switch
height: 150px
theme: true
---

# Switch

A Switch toggles between two mutually exclusive states such as "On" or "Off." Unlike a Checkbox, a Switch initiates an action with immediate effect without requiring a "Save" or "Submit" action.

## Rules of Thumb

- Use a Switch for immediate state changes between two mutually exclusive options.
- For non-immediate changes, use [Radio Buttons](/components/radio-button) for mutually exclusive options or [Checkboxes](/components/checkbox) for non-exclusive options.
- For immediate actions instead of state changes, use an [action Button](/components/button).
- On a page, each Switch is independent of all other Switches.
- An intelligent default should be set for the initial state of a Switch.

## Appearance and Behavior

A Switch consists of a circular button that slides across a track to display the "Off" (left) or "On" (right) state. Clicking anywhere on the Switch component will cause the Switch to change states immediately.

To learn more about adding Help Text to Switches, see the [Forms and Validation](/patterns/forms-and-validation) guidance.
