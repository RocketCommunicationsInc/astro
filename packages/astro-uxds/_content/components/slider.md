---
tags: components
path: /components/slider
date: Last Modified
layout: components.template.njk
title: Slider
demo: forms-slider--default-story
storybook: forms-slider--default-story
git: rux-slider
height: 130px
theme: true
---

# Slider

A Slider allows users to choose from a range of continuous and discrete values arranged from minimum to maximum.

::: note
To achieve the split color element in the slider, a small amount of JavaScript is needed. Refer to slider documentation in the Git repository for more information.
:::

## Rules of Thumb

- It is not recommended to use a slider when a very large value range exists. A range of 1,000, or fractional increments such as 4.35, may be too specific to use a slider. Consider using a numeric [Input Field](/components/input-field) instead.
- Sliders are typically used along a horizontal axis but may be used along a vertical axis when appropriate. For example, zooming in or out along a map or to mimic a vertical gauge on a physical dashboard.
- Display of the selected value is recommended. Consider a numeric [Input Field](/components/input-field) or, at minimum, a tooltip to indicate the selected value.
- Display of start and endpoints, as well as intermediate points (particularly for discrete sliders), is recommended.

**Use a slider:**

- When users need to set defined, contiguous values (like volume or brightness), or a range of discrete values (like screen resolution).
- To display abstracted values like “Low," "Medium,” or “High.”
- To reflect discrete numeric values by adding labels.
- To give users immediate feedback on selection such as screen contrast.

::: note
Sliders may be used in conjunction with an input field or select menu allowing the user to set a slider value via keyboard entry.
:::

## Appearance and Behavior

A slider comprises of a track aligned along a vertical or horizontal axis, a visual indicator of where on the axis the current selection exists, and value labels. The visual indicator of the selection value comprises of a selection fill and a thumb indicator. The user slides the thumb along the track until it reaches their desired value. The Slider's label generally appears above the slider and aligned to the left side of the track. In certain situations, the label may appear to the left of the slider and vertically center-aligned to the track.

A Continuous slider is used to select any value along a range, such as 0 to 10. A Discrete slider is used to select from a set of pre-defined, specific values along the range, such as 0, 2, 4, 6, 8, 10.

Variations on the slider may include vertical implementations, using tick marks to indicate specific values, visual indicators of scale, and alternative ways to display the selected value in addition to position of the slider's "thumb" indicator (such as a numeric [Input Field](/components/input-field) or tooltip).

To learn more about adding Help Text to Sliders, see the [Forms and Validation](/patterns/forms-and-validation) guidance.

## Examples

:::two-col
![Do: If adding labels, only use the minimal amount necessary to indicate the values.](/img/components/slider-do-1.png "Do: If adding labels, only use the minimal amount necessary to indicate the values.")

![Don’t: Excessive labels clutter the design.](/img/components/slider-dont-1.png "Don’t: Excessive labels clutter the design.")

:::
