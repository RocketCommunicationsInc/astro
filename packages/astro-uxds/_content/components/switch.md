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

A Switch toggles between two mutually exclusive states such as "On" or "Off." Unlike a checkbox, a switch initiates an action with immediate effect without requiring a "Save" or "Submit" action.

## Rules of Thumb

- Use a switch for immediate state changes between two mutually exclusive options.
- For non-immediate changes, use [radio buttons](/components/radio-button) for mutually exclusive options or [checkboxes](/components/checkbox) for non-exclusive options.
- For immediate actions instead of state changes, use an [action button](/components/button).
- On a page, each switch is independent of all other switches.
- An intelligent default should be set for the initial state of a switch.

## Appearance and Behavior

A switch consists of a circular button that slides across a track to display the "Off" (left) or "On" (right) state. Clicking anywhere on the switch component will cause the switch to change states immediately.

To learn more about adding Help Text to Switches, see the [Forms and Validation](/patterns/forms-and-validation) guidance.
