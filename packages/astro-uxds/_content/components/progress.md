---
tags: components
path: /components/progress
date: Last Modified
layout: components.template.njk
title: Progress
demo: https://rocketcom.bitbucket.io/html-demos/progress.html
storybook: components-progress
git: rux-progress
height: 160px
theme: true
---

# Progress

A Progress indicator signals that an application is busy performing an operation.

::: note
When operations take five seconds or longer to complete, add a progress feedback element to your design.
:::

## Rules of Thumb

- Use **Indeterminate Progress** mode to continually display unknown progress for an operation.
- Use **Determinate Progress** mode when an operation has a well-defined duration or a predictable end.
  Don’t provide inaccurate time or percentage estimates if the precise completion time for the operation is unknown.

## Examples

:::two-col
![Do: Use a Determinate Progress Bar to indicate to users how much of an operation has been completed.](/img/components/determinate-progress-do.png "Do: Use a Determinate Progress Bar to indicate to users how much of an operation has been completed.")

![Do: Use an Indeterminate Progress control to indicate that an application is busy performing an operation but the progress is unknown.](/img/components/indeterminate-progress-do.png "Do: Use an Indeterminate Progress control to indicate that an application is busy performing an operation but the progress is unknown.")

:::
