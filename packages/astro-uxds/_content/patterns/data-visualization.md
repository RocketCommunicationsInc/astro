---
tags: resources
path: /patterns/data-visualization
date: Last Modified
layout: components.template.njk
title: Data Visualization
---

# Data Visualization

The Data Visualization section covers best practices, principles and references tailored to Astro. A core objective of a Data Visualization is to make complex information accessible and easy to digest. Therefore, the interface presenting the data should be clean and straightforward in order to minimize users’ cognitive load and time spent searching.

Visualizing data taps into pattern recognition ability and significantly accelerates the understanding of the data. You can look at a chart of data presented and understand it quickly by seeing the patterns and trends. This is a significantly faster way to comprehend information compared to reading numbers, comprehending the math, and then imagining in your mind how the numbers relate to each other.

## Common Chart Types for Data Visualization

There are a significant number of chart types to cover many different ways of presenting data to users. The following subset of categories and examples were found to be complimentary to use cases within the Space domain. Astro will continue to expand upon this library as additional requirements are defined.

### Astro Chart Categories

The following categories are used within Astro:

**Part-to-whole**: Show how a single entity can be broken down into its component elements. If the reader’s interest is solely in the size of the components, consider a magnitude-type chart instead.

**Change Over Time**: Give emphasis to changing trends. These can be short (intra-day) movements or extended series traversing years. Choosing the correct time period is important to provide suitable context for the user.

**Correlation**: Show the relationship between two or more variables.

### Astro Chart Types

There are a large number of charting visualizations. The following subset is relevant to the Astro domain:

<div class="three-col">

:::col

#### Pie Chart

![Pie Chart](/img/design-guidelines/data-viz-pie.png)
Conveys part-to-whole data. Pie charts are very common, but research has shown that it may be difficult to accurately compare the size of the segments without supporting data points.
:::

:::col

#### Donut Chart

![Donut Chart](/img/design-guidelines/data-viz-donut.png)
Similar to a pie chart – but the center can be useful for additional information about the data (e.g. total). Example: [GRM Sample app](https://grm-dashboard.astrouxds.com/) - equipment tab

:::

:::col

#### Bar Chart

![Bar/Column Chart](/img/design-guidelines/data-viz-bar-column.png)
Standard bar charts display the ranks of values more easily when sorted in order.

:::

:::col

#### Stack Bar Chart

![Stack Bar Chart](/img/design-guidelines/data-viz-stacked-bar.png)
The standard way to show a statistical distribution - keep the gaps between columns small to highlight the ‘shape’ of the data. Example: GRM Sample app - contacts tab

:::

:::col

#### Heat Map

![Heat Map](/img/design-guidelines/data-viz-heat-map.png)
Heat maps enable you to do exploratory data analysis with two dimensions on the axes and the third dimension shown by intensity of color.

:::

:::col

#### Area Chart

![Area Chart](/img/design-guidelines/data-viz-area.png)
This chart type excels at showing changes to total, but seeing change in components can be difficult.

:::

:::col

#### Fill Guage

![Fill Guage](/img/design-guidelines/data-viz-fill-gauge.png)
A circular shape that represents a percentage value of a whole. May also be depicted as a dial.

:::

:::col

#### Bubble Chart

![Bubble Chart](/img/design-guidelines/data-viz-bubble.png)
Bubble charts are used to visualize a data set with two to four dimensions. The first two dimensions are visualized as coordinates, the third as color and the fourth as size.

:::

:::col

#### Histogram

![Histogram](/img/design-guidelines/data-viz-histogram.png)
Conveys an accurate representation of the distribution of numerical data. It is an estimate of the probability distribution of a continuous variable (e.g. Spectrum analyzer).

:::

:::col

#### Gantt Chart

![Gantt Chart](/img/design-guidelines/data-viz-gantt.png)
A chart that depicts how a set of resources are used over time. Gantt charts illustrate the start, end, and duration of tasks (e.g. timeline or schedule). Example: [TT&C Sample app](https://ttc-monitor.astrouxds.com/) - timeline view

:::

:::col

#### Scatter Chart

![Scatter Chart](/img/design-guidelines/data-viz-scatter-plot.png)
Scatter charts plot points on a graph. When the user hovers over the points, tooltips are displayed with more information.

:::

</div>

## Visualization Anatomy

The following images reference the general components and features for designing a visualization. Astro provides a variety of front-end components to support your design in the [UI Components](/components/readme) section.

### Filter Select

Filters are used to narrow what is displayed in the table. They may be presented in the header as Select menus, as a Segmented Button (e.g.View Select), or as an Input Field.

![Example of filtering a chart view](/img/design-guidelines/data-viz-anatomy.png)

### Legend

When the data appearing in a chart contains multiple data series, it becomes more readable if they are shown in a legend. This helps in identifying each data series/data point in the chart.

![Example of legend treatment in a chart view](/img/design-guidelines/data-viz-legend.png)

::: note
Legends should be arranged as per the order of appearance of the data plot (Eg: if ‘Usage’ data is plotted first, the corresponding legend comes first).
:::

### Accessibility

**Type**: Astro guidelines dictate a minimum type size of 14pt for axes and data points to maximize legibility. Open Sans, a sans-serif typeface, is required for optimum legibility. See [Typography](/design-guidelines/typography) for additional information.

**Color and Contrast**: Use colors that have sufficient contrast for the appropriate theme. If necessary, complement the use of color with a pattern or texture to convey different types of information. The non-status palette provided in the [Color](/design-guidelines/color) guidelines is applicable to both themes and is contrast compliant.

#### Mixed Accessible Visualization Palette

The following sample color set are provided for the specified number of data points. Astro dictates 8 or less colors per data set to reduce cognitive load. The mixed accessible palette was designed to meet a colorblind accessibility requirement. The vast majority of colorblind users are able to detect contrast variance as demonstrated in the following simulations.

![Mixed accessible color palette](/img/design-guidelines/accessibility-mixed.png)
![Deuternopia accessible color palette](/img/design-guidelines/accessibility-deuternopia.png)
![Protanopia accessible color palette](/img/design-guidelines/accessibility-protanopia.png)
![Tritanopia accessible color palette](/img/design-guidelines/accessibility-tritanopia.png)

#### Gradual Visualization Palettes

The following sample color sets were created from the non-status color palette:

::: caution
Status colors are reserved for their respected statuses. Do not apply them to Visualizations unless they reflect the defined status, e.g. Critical.
:::

![Blue Green color palette](/img/design-guidelines/data-set-palette-blue-green.png)
![Blue Violet accessible color palette](/img/design-guidelines/data-set-palette-blue-violet.png)
![Tawny accessible color palette](/img/design-guidelines/data-set-palette-tawny.png)

## Themed Visualization References

Astro provides guidance, components and code for creating a light and dark themed User Interface. Use cases and additional information on selecting the appropriate UI can be found in the [Theme guidelines](/design-guidelines/theme). The following references demonstrate both.

![Sample stacked bar chart](/img/design-guidelines/stacked-bar.png)
![Sample donut chart](/img/design-guidelines/donut.png)
![Sample line chart](/img/design-guidelines/line.png)

::: note
Line charts and similar visualizations may require higher contrast than a filled graphic, e.g. Donut chart. Higher contrast colors are provided in the Astro Color Guidelines.
:::

![Sample histogram chart](/img/design-guidelines/histogram.png)

::: note
Dark-themed UIs help reduce eye strain and support visual clarity within the interface. This is ideal in a lights-out environment.
:::

![Sample stacked bar chart using the light theme](/img/design-guidelines/stacked-bar-lui.png)
![Sample donut chart using the light theme](/img/design-guidelines/donut-lui.png)
![Sample line chart using the light theme](/img/design-guidelines/line-lui.png)
![Sample histogram chart using the light theme](/img/design-guidelines/histogram-lui.png)

## Choose the Right Visualization

A data visualization is useless if not designed to communicate clearly with the target audience. It should be compatible with the audience’s expertise and allow viewers to view and process data easily and quickly. Take into account how familiar the audience is with the basic principles being presented by the data, as well as whether they’re likely to be viewed on a regular basis.

## Examples

:::two-col

![Do: Allow axes labels enough padding. It’s important that the axes be legible and have adequate space. This will reduce eye strain and errors.](/img/design-guidelines/data-viz-do-1.png "Do: Allow axes labels enough padding. It’s important that the axes be legible and have adequate space. This will reduce eye strain and errors.")

![Don't: Use visual representations that don’t accurately represent the data set, like pie charts in 3D.](/img/design-guidelines/data-viz-dont-1.png "Don’t: Use visual representations that don’t accurately represent the data set, like pie charts in 3D.")

![Do: Use fill color and text that meets or exceeds WCAG 2.0 contrast requirements. Use a Contrast Checker to check contrast levels.](/img/design-guidelines/data-viz-do-2.png "Do: Use fill color and text that meets or exceeds WCAG 2.0 contrast requirements. Use a Contrast Checker to check contrast levels.")

![Don’t: Use more than 8 categories. Beyond that, mapping colors to categories will become burdensome and reduce their usefulness.](/img/design-guidelines/data-viz-dont-2.png "Don’t: Use more than 8 categories. Beyond that, mapping colors to categories will become burdensome and reduce their usefulness.")

:::

There are many dedicated visualization tools such as [Tableau](https://www.tableau.com/), [QlikView](https://www.qlik.com/us), [HighCharts](https://www.highcharts.com/) and [d3.js](https://d3js.org/). Nothing can replace a modeling and statistic tool with good visualization capability. It helps tremendously in doing any exploratory data analysis as well as feature engineering. Always review the product licensing options before use.
