---
tags: resources
path: /design-guidelines/grid
date: Last Modified
layout: interior.template.njk
title: Grid
---

# Grid

A [grid system](https://www.creativebloq.com/web-design/grid-theory-41411345) is a defined set of vertical columns and optionally horizontal rows based on time-tested principles of graphic design and layout. Ensuring a consistent grid system within your application and across all Astro applications creates a sense of continuity and relationship from screen to screen and app to app, even when the layouts between those screens may have dramatically different requirements.

## Columns, Gutters and Margins

The Astro Grid is a standard 12 [column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) grid with column widths that expand or contract in relation to the width of the display. Columns are separated by a fixed-width [gutter](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap). Astro-compliant applications may use gutters of either 24 pixels (default) or 12 pixels (compact). The grid is enclosed by a fixed-width margin of 24 pixels. These specifications are for screen resolutions of 769px to 1920px max width.

![Sample grid 20px gutter.](/img/design-guidelines/grid-lg-20px-gutter.png "Sample grid 20px gutter.")

![Sample grid 10px gutter.](/img/design-guidelines/grid-compact-10px-gutter.png "Sample grid 10px gutter.")

## Breakpoints

At certain screen sizes, Astro optimizes for display on narrow devices by reducing the number of columns and rearranging the layout of your application via [responsive design](https://developers.google.com/web/fundamentals/design-and-ux/responsive/) practices.

| Breakpoint                       | Columns | Margin | Gap  | Gap (compact) |
| -------------------------------- | ------- | ------ | ---- | ------------- |
| 0-360px                          | 4       | 16px   | 16px | 8px           |
| 361-768px                        | 8       | 24px   | 24px | 12px          |
| 769-1920px                       | 12      | 24px   | 24px | 12px          |
| 1921-3840px <br> (large screens) | 12      | 48px   | 48px | 24px          |

## 4-px Grid

A 4-px horizontal grid at 1920px resolution has been provided to help designers align layouts on a 4-px system with greater precision.

::: note
[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) is the recommended method for implementing a grid in your Astro project. Using a custom layout grid adds overhead and layers of incompatibility, and as such, should only be used if your project requires backwards-compatibility with Internet Explorer 9 or earlier.
:::
