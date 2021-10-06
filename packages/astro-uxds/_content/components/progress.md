---
tags: components
path: /components/progress
date: Last Modified
layout: components.template.njk
title: Progress
demo: components-progress--determinate-progress
storybook: components-progress
git: rux-progress
height: 160px
theme: true
---

# Progress

A Progress indicator signals that an application is busy performing an operation.

::: note
When operations take one second or longer to complete, add a progress feedback element to your design.
:::

## Rules of Thumb

- Use **Indeterminate Progress** mode to continually display unknown progress for an operation.
- Use **Determinate Progress** mode when an operation has a well-defined duration or a predictable end.
- Don’t provide inaccurate time or percentage estimates if the precise completion time for the operation is unknown.
  
## Appearance and Behavior

An indeterminate progress indicators is displayed as a continuously spinning circle with no strict percentage or timeframe labeled. This type of indicator is usually used when a process takees between 1 to 10 seeconds unless the duration is known.

A determinate progress indicator is displayed as a linear bar that dynamically fills in as the process gets closer to done. Specific percentages, amounts, or time can be indicated in surrounding text for more detailed progress reports. This type is recommended for processes longer than 10 seconds or when th duration of a process is known.

## Examples

:::two-col
![Do: Use a Determinate Progress Bar to indicate to users how much of an operation has been completed.](/img/components/determinate-progress-do-1.png "Do: Use a Determinate Progress Bar to indicate to users how much of an operation has been completed.")

![Do: Use an Indeterminate Progress control to indicate that an application is busy performing an operation but the progress is unknown.](/img/components/indeterminate-progress-do-1.png "Do: Use an Indeterminate Progress control to indicate that an application is busy performing an operation but the progress is unknown.")

:::
