---
tags: components
path: /components/tabs
date: Last Modified
layout: components.template.njk
title: Tabs
demo: components-tabs--default-story
storybook: components-tabs--default-story
git: rux-tabs
height: 160px
theme: true
---

# Tabs

Tabs in Astro Applications are used to divide major areas of content and to indicate work process.

## Rules of Thumb

- Use only one row of Tabs.
- Use Higher Level Tabs only on top of the panel.
- Tab labels should not be more than two words and should accurately reflect what underlying content the user can expect to reveal.
- Use title-style capitalization for labels.
- High level tabs are often used to organize an application by work process.

:::note note High Level Tabs are often process/workflow oriented. Process oriented tabs should:

- Appear in the upper left quadrant.
- Be clearly labeled.
- Guide users through a sequential process.

:::

## Interior/Compact Tabs

For use outside of main navigation, a more compact Tab component can be used.

## Rules of Thumb

- Use only one row of Tabs.
- Tab labels should not be more than two words and should accurately reflect what the user can expect to see.
- Use sentence case capitalization for labels.

## Examples

:::two-col
![Do: To guide users through a process, correctly place and label Tabs to reflect a step-by-step process.](/img/components/nav-tabs-do-1.png "Do: To guide users through a process, correctly place and label Tabs to reflect a step-by-step process.")

![Don’t: Stack or improperly nest Tabs.](/img/components/nav-tabs-dont-1.png "Don’t: Stack or improperly nest Tabs.")

:::
