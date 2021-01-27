---
tags: resources
path: /patterns/navigation
date: Last Modified
layout: interior.template.njk
title: Navigation
---

# Navigation

An application is fundamentally shaped by its navigation. Navigation defines how the user moves through the application and establishes their mental model of the object hierarchy.

It’s best to start with a consideration of the primary objects your application will display. How are those objects divided or grouped? Is there a hierarchy of objects or a flat organization? Are there a small number primary objects or many?

## Master-Detail Navigation

For a small, flat collection of like objects, consider Master-Detail navigation. Master-Detail is implemented with a list on the left and a detail panel on the right. The Master list shows key information for each item, the detail panel shows in-depth information and options.

![Master-detail sample app layout](/img/patterns/master-detail-nav.png)

## Tab Navigation

Application objects that easily fall into a small number of distinct categories, or that represent a step-wise workflow, are a candidate for [Tab Navigation](/components/tabs). Examples include:

- Scheduled, In-progress, Done
- Untested, Succeeded, Failed
- Proposals, Projects

Tab Navigation works best when the user can accomplish fundamental tasks within a tab before moving onto another.

The contents of each tab may be similar objects with a different view, or unique objects or presentations.

![Tab Navigation sample app layout](/img/patterns/tab-nav.png)

## Tree Navigation

Tree Navigation resembles Master-Detail, but uses a hierarchal tree rather than a flat list to drive selection. The guidelines you’re reading right now use [Tree Navigation](/components/tree).

Use Tree Navigation only with a set of objects that fall into a natural single hierarchy, such as sections, chapters, and paragraphs.

::: caution
Avoid mixing unrelated object types in a single tree. Although this usage is commonly seen in desktop productivity applications, it often leads users on a frustrating hunt for objects or features.
:::

![Tree sample app layout](/img/patterns/tree-nav.png)

## Table Navigation

Applications with large uniform data sets can be structured with [Table Navigation](/patterns/table). Table Navigation begins with a full screen tabular view of the application data. The table’s searching, sorting, and filtering capabilities allow the user to find objects of interest before drilling down to additional detail pages.

![Table navigation sample app layout](/img/patterns/table-nav.png)

## Timeline Navigation

Applications that are principally organized around events on a realtime schedule can make use of [Timeline Navigation](/components/timeline). A timeline atop the page allows the user to select events that are shown in detail in the main area the page.

![Timeline navigation sample app layout](/img/patterns/timeline-nav.png)

## Combining Navigation

Navigation types are often combined within complex applications. For example, an application can have Tab main navigation, with Master-Detail sub-navigation.

![Combined navigation sample app layout](/img/patterns/combined-nav.png)
