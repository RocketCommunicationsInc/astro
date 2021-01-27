---
tags: components
path: /components/slider
date: Last Modified
layout: components.template.njk
title: Slider
demo: components-slider--slider
storybook: components-slider--slider
git: rux-slider
height: 170px
theme: true
---

# Slider

A Slider allows users to choose from a range of continuous and discrete values. The Slider displays the range of possible values and the Slider’s indicator displays the current value.

::: note
To achieve the split color element in the slider, a small amount of JavaScript is needed. Refer to slider documentation in the Git repository for more information.
:::

## Rules of Thumb

**Use a slider:**

- When users need to set defined, contiguous values (like volume or brightness), or a range of discrete values (like screen resolution).
- To display abstracted values like “Low, Medium,” or “High.”
- To reflect discrete numeric values by adding labels.
- To give users immediate feedback on selection such as screen contrast.

::: note
Sliders may be used in conjunction with an input field allowing the user to set a slider value via keyboard entry.
:::

## Examples

:::two-col
![Do: If adding labels, only use the minimal amount necessary to indicate the values.](/img/components/slider-do-1.png "Do: If adding labels, only use the minimal amount necessary to indicate the values.")

![Don’t: Excessive labels clutter the design.](/img/components/slider-dont-1.png "Don’t: Excessive labels clutter the design.")

:::
