---
title: Accordion
date: Last Modified
tags: components
path: /components/accordion
layout: components.template.njk
theme: false
height: 210px
scrolling: true
git: rux-accordion
---

# Accordion

::: caution
Accordions are currently being revamped for a future release. The following legacy page is provided for reference.
:::

An Accordion is a device which presents a hierarchical set of items in which only a single branch of that hierarchy may be exposed at one time.

## Rules of Thumb

- Give titles to Accordions if content is not obvious to users.
- Titles should use sentence case capitalization.
  ::: note
  Accordions are not commonly used for direct action or data manipulation. Use Accordions for navigation within a master-detail navigational pattern.
  :::

![Example of an Accordion in its collapsed state](/img/components/accordion-1.png)

## Appearance and Behavior

Clicking on an item in an Accordion selects and expands that item. If there are any child items in the hierarchy below, those items are automatically displayed. Items are indented according to their depth.

:::two-col

![Chapter 1 is selected and its children are displayed.](/img/components/accordion-2.png "Do: Item 1 is selected and its children are displayed.")

![If a child item of the current selection is selected, that entire branch remains displayed.](/img/components/accordion-3.png "If a child item of the current selection is selected, that entire branch remains displayed.")

![If a different branch is selected, for example, by clicking on a different top level item, the current branch automatically closes and the new branch opens.](/img/components/accordion-4.png "If a different branch is selected, for example, by clicking on a different top level item, the current branch automatically closes and the new branch opens.")

While Accordions are often used for presenting information hierarchy, Accordions can also be used to display controls, input fields and data visualizations. Accordions are provided with slots which can be swapped for other components depending on the use case.

:::
