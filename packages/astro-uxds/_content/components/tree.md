---
tags: components
path: /components/tree
date: Last Modified
layout: components.template.njk
title: Tree
demo: components-tree--default-story
storybook: components-tree--default-story
git: rux-tree
height: 480px
scrolling: yes
theme: true
---

# Tree

Trees present a hierarchical set of related items and allow users to explore and select items within that hierarchy.

::: note
Accordions are closely related to Trees, but are specialized to automatically display only a single branch. A Tree is managed by the users, opening and closing branches as necessary.
:::

## Anatomy

![Anatomy of an Astro Tree Component.](/img/components/tree-anatomy.png "Anatomy of an Astro Tree Component.")

## Rules of Thumb

- Avoid mixing unrelated data types or functions in a Tree. For example, don’t mix e-mail, calendar and to-do items.
- A Tree should not be a “catch-all” for application features. Usability falls off with each new addition.
- Trees are not native to the Web environment and should be used sparingly. When it's necessary to display a hierarchy, consider using cascading panels or pages.

## Appearance and Behavior

### Appearance

:::two-col
The Tree component has a transparent background, allowing it to be placed on different background colors. Items in the Tree that have children display a turn-down arrow. A child branch can have its own child branches, indicated by a turn-down arrow. Items without children, even if they represent empty containers, do not display a turn-down arrow. Items are indented according to their depth.

![Astro Tree Component with no status symbols.](/img/components/tree-no-status.png "Astro Tree Component with no status symbols.")

The Tree may optionally show a [Status Symbol](/components/status-symbol) alongside each item.

![Astro Tree Component with status symbols.](/img/components/tree-with-status.png "Astro Tree Component with status symbols.")
:::

### Behavior

The default state of each Tree branch is closed. Clicking on a turn-down arrow opens the branch to reveal child branches. If multiple child branches are open and then the top branch is closed, all child branches will be hidden. The child branches will be restored to their previous open or closed state when the top branch is reopened.

Clicking on an item (in any area other than the turn-down arrow) selects that item. Only one item at a time may be selected.

Opening or closing the branch does not change the selected item unless the selected item is within the branch being closed. If the branch is closed, the selection becomes null — a Tree’s selection and revealed branches are almost entirely independent of each other.
