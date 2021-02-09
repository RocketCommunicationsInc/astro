---
tags: components
path: /patterns/table
date: Last Modified
layout: interior.template.njk
title: Table
---

# Table

Tables are a fundamental UX design tool for organizing and displaying data. They are used throughout space applications and may take many forms. The principal table interactions and styles are illustrated below and demonstrated in the [GRM](https://grm-dashboard.astrouxds.com/) and [TT&C](https://ttc-monitor.astrouxds.com/) sample applications.

## Header

A table can be configured with a tall header with large hero numbers (if the count of some type is important to know at a glance) or with a compact header if vertical space is at a premium.

![Table with tall header.](/img/patterns/table-header-tall.png "Table with tall header.")

![Table with compact header.](/img/patterns/table-header-compact.png "Table with compact header.")

## Filters

Filters, to narrow what is displayed in the table, may be presented in the header as Select menus, as a Segmented Button, or as an Input Field. If it is critical that the user knows that not all data is displayed, a warning may be shown when filters are applied.

While filters are often related to the data types displayed in columns, it is not recommended that filters be activated directly from the column headers or displayed there. Filters selected through a combination UI elements in the header can be more expressive and focused by combining and highlighting key data types.

![Table with filters as Select menus and wildcar Input Field.](/img/patterns/table-filters.png "Table with filters as Select menus and wildcar Input Field.")

![Table with filters as Segmented Buttons and wildcard Input Field.](/img/patterns/table-segmented-button.png "Table with filters as Segmented Buttons and wildcard Input Field.")

## Sorting

Sorting is accomplished by clicking in a column header. The sort order (ascending or descending) is indicated by an arrow. A second click in the currently sorted column changes the sort order.

## Selection and Action
Tables use a familiar Selection/Action model. Selection is accomplished by clicking in a row. Multiple selection can be enabled by adding a selection column of Checkboxes. Action Buttons may appear in an inline detail area or in a footer.

![Table with inline action.](/img/patterns/table-inline-action.png "Table with inline action.")

![Table with multiple selection and actions in footer.](/img/patterns/table-action-footer.png "Table with multiple selection and actions in footer.")

## Complex Tables

For more complex tables, we recommend using either the community or enterprise tier of [ag-Grid](https://www.ag-grid.com/). While we cannot provide support for ag-Grid or its many features, we do provide light and dark variants of Astro in a theme file consumable by ag-grid.

We maintain a [separate repo for the ag-Grid Astro theme](https://github.com/RocketCommunicationsInc/astro-ag-Grid). Please visit the following links to get started:

* [Documentation](https://github.com/RocketCommunicationsInc/astro-ag-Grid/#astro-ag-grid-theme)
* [Astro Theme SASS files](https://github.com/RocketCommunicationsInc/astro-ag-Grid/tree/master/src/css)
* Working [example](https://astro-ag-grid-example.netlify.app/) of a complex table using the Astro theme




