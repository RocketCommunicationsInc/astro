---
title: Accordion
date: Last Modified
tags: components
path: /components/accordion
demo: components-accordion--default-story
storybook: components-accordion--default-story
layout: components.template.njk
theme: false
height: 210px
scrolling: true
git: rux-accordion
---

# Accordion

An Accordion is a device which presents a hierarchical set of items in which only a single branch of that hierarchy may be exposed at one time.

## Rules of Thumb

- Give titles to Accordions if content is not obvious to users.
- Titles should use sentence case capitalization.
  ::: note
  Accordions are not commonly used for direct action or data manipulation. Use Accordions for navigation within a master-detail navigational pattern.
  :::

![Example of an Accordion in its collapsed state](/img/components/accordion-1.png)

## Appearance and Behavior

Clicking on an item in an Accordion selects and expands that item. While Accordions are often used for presenting information hierarchy, Accordions can also be used to display controls, input fields and data visualizations. Users are able to swap components into the expanded content area.

:::two-col

![Item 1 is selected and its expanded accordion content is displayed.](/img/components/accordion-2.png "Do: Item 1 is selected and its expanded accordion content is displayed.")

![If a different branch is selected, for example, by clicking on a different top level item, the current branch automatically closes and the new branch opens.](/img/components/accordion-3.png "If a different branch is selected, for example, by clicking on a different top level item, the current branch automatically closes and the new branch opens.")

![Accordions can be used for displaying user controls.](/img/components/accordion-4.png "Accordions can be used for displaying user controls.")

:::
