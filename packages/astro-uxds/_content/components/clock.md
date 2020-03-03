---
tags: components
path: /components/clock
date: Last Modified
layout: components.template.njk
title: Clock
demo: https://rocketcom.bitbucket.io/packages/rux-clock/demo/rux-clock.html
storybook: components-clock--clock
git: rux-clock
height: 190px
theme: true
---

# Clock

Clock shows the current date and time, and optional AOS and LOS timers. It will typically be positioned on the Global Status Bar.

## Appearance and Behavior

The clock is not an interactive component. Date and Time are always present. AOS, and LOS are optional. The time is UTC by default, but can be configured for any time zone.

All digits should be displayed in the Roboto Mono font. This font's monospace number characters ensure that the display will not jitter as it changes. The font is already built into the Clock web component, but may be [downloaded](https://fonts.google.com/specimen/Roboto+Mono) for design use.

## Examples

![Example Clock](/img/components/clock-roboto-mono.png "Do: Something")
