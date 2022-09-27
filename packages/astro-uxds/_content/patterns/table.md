---
tags: components
path: /patterns/table
date: Last Modified
layout: interior.template.njk
title: Table
---

# Table

## Appearance and Behavior

Tables are a fundamental UX design tool for organizing and displaying data. They are used throughout space applications and may take many forms. The principal table interactions and styles are illustrated below and demonstrated in the [GRM](https://grm-dashboard.astrouxds.com/) and [TT&C](https://ttc-monitor.astrouxds.com/) sample applications. Types of content used in table cells varies by use case, but often includes: [text](/design-guidelines/typography/), [checkboxes](/components/checkbox/), [icons](/components/icons-and-symbols/), [status indicators](/components/status-symbol/), or [buttons](/components/button/).

## Filtering

Filters, to narrow what is displayed in the Table, may be presented in the header as Select Menus, as a Segmented Button, or as an Input Field. If it is critical that the user knows that not all data is displayed, a warning may be shown when filters are applied. Though it is not a requirement to display filters in the header row of the column to which they correspond, tables created using ag-Grid default to this design pattern.

## Sorting

Tables default to being sorted by the data in the first column with an arrow pointing up or down to indicate whether that column is being sorted in ascending or descending order, respectively. Manual sorting is accomplished by clicking the text in a column header. On initial sort, data may sort either ascending or descending, depending on what type of data is contained in that column, with subsequent clicks toggling between the two.

## Selection and Action

Tables use a familiar Selection/Action model. Selection is accomplished by clicking in a row. Multiple selection can be enabled by adding a selection column of Checkboxes. Action Buttons may appear in an inline detail area or in a footer.

![Table with inline action.](/img/patterns/table-inline-action.png "Table with inline action.")

![Table with multiple selection and actions in footer.](/img/patterns/table-action-footer.png "Table with multiple selection and actions in footer.")

## Complex Tables

For more complex Tables, we recommend using either the community or enterprise tier of [ag-Grid](https://www.ag-grid.com/). While we cannot provide support for ag-Grid or its many features, we do provide light and dark variants of Astro in a theme file consumable by ag-grid.

We maintain a [separate repo for the ag-Grid Astro theme](https://github.com/RocketCommunicationsInc/astro-ag-Grid). Please visit the following links to get started:

- [Documentation](https://github.com/RocketCommunicationsInc/astro-ag-Grid/#astro-ag-grid-theme)
- [Astro Theme SASS files](https://github.com/RocketCommunicationsInc/astro-ag-Grid/tree/master/src/css)
- Working [example](https://astro-ag-grid-example.netlify.app/) of a complex table using the Astro theme
