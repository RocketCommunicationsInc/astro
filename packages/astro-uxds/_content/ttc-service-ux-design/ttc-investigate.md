---
tags: ['ttc', 'egs']
path: /ttc-service-ux-design/ttc-investigate
date: Last Modified
layout: interior.template.njk
title: TT&C Investigate
---

# TT&C Investigate

[Launch TT&C Investigate Sample App](https://ttc-investigate.astrouxds.com) | [Design Materials and Source Code](#contentBottom)

The Investigate app displays system schematics and status data for a selected satellite. This allows operators to gather additional detail on alerts, view the relationships of components in the equipment hierarchy and select particular values to add to the Watcher panel in the Monitor and Command apps.

UX research revealed that existing systems often require operators to drill-in through the hierarchy of systems and subsystems in a manner that opens a new window each time. This forces operators to spend time and effort managing windows in order to find data they need. To overcome this problem, the design of the Investigate app allows operators to select an item of interest from a tree structure on the left side of the window and then drill-in to more detail using panes to the right, keeping everything in a single window.

![TT&C Investigate App](/img/service-specific-ux-design/ttc-investigate-app.png)

There are four main areas in the Investigate app: the Global Status Bar, Subsystem Tree Menu, Subsystem Assembly Layout and Mnemonic Data Table. The key elements are described below, but you can find much more design and task flow detail in the [TT&C Design Specification and Wireframes](/tt-c-service-ux-design/tt-c-investigate#contentBottom) documents. You can also launch the [TT&C Investigate Sample App](https://ttc-investigate.astrouxds.com/) to explore the design interactively.

![TT&C Investigate App Details](/img/service-specific-ux-design/ttc-investigate-app-details.png)

## Global Status Bar

As outlined on the [About TT&C Designs](/ttc-service-ux-design/about-the-ttc-designs) page, each of the apps in the TT&C Suite is designed to occupy its own browser window, allowing operators to focus on the task at hand. But by virtue of being integrated into a suite, the apps share common functionality, such as a single login. Much of the shared functionality is provided in the [Global Status Bar](/components/global-status-bar), an Astro component featured in all three apps. Though the status bar contents vary somewhat between apps in order to best support each app’s individual workflows, all contain a [Clock](/components/clock), [Monitoring Icons](/components/icons-and-symbols), and an app switching menu that allows operators to transition quickly from one TT&C task flow to another.

![TT&C Dashboard Global Status Bar Details](/img/service-specific-ux-design/ttc-investigate-global-status-bar-details.png)

1. **App Switcher Menu** - the App Switcher Menu allows the user to launch new instances of different TT&C apps, sign in/sign out, and edit preferences.
2. **Global Clock** - time is central to many TT&C service task flows, so it is included in the Global Status Bar in all TT&C apps.
3. **Monitoring Icons** - the Dashboard app includes Upcoming Contacts Allocated (UCA) and Software status indicators, as well as status and alert counts for each of the top categories in the equipment hierarchy.

## Subsystem Tree Menu

The Subsystem Tree Menu shows a hierarchical list of the satellite subsystems. Status of lower level elements is bubbled up to the subsystem level so that operators can quickly identify subsystems that have problems without having to expand nodes in the tree. When a subsystem is selected, the related subsystem assembly layout and mnemonic data table is shown in the content area to the right.

:::two-col

![TT&C Subsytem Tree](/img/service-specific-ux-design/ttc-investigate-subsystem-tree-details.png)

1. **Expandable List Items** - subsystem menu items expand to show any related sub-subsystems in the section to the right.
2. **Status Symbols** - status symbols indicate current subsystem status and severity.

:::

1. **Equipment Categories** - inoperable equipment is organized into categories along with a total for the category.
2. **Equipment Status** - inoperable equipment is displayed with status coding indicating the severity of the problem.

## Subsystem Assembly Layout

When an item has been selected in the Subsystem Tree Menu, its next level of detail is displayed in schematic form in the Subsystem Assembly Layout to the right. The elements in this schematic are color-coded to reflect the health status of the data mnemonics associated with it. Operators can then click on one of these schematic elements to load an additional level of detail in the Mnemonic Data Table that appears below.

![TT&C Subsystem Assembly Layout Details](/img/service-specific-ux-design/ttc-investigate-subsystem-assembly-details.png)

1. **Selectable Elements** - operators can select an element in the schematic to have its data load in the Mnemonic Data Table below
2. **Status Colors** - the elements in the schematic are color coded to reflect current status.

### Mnemonic Data Table

The Mnemonic Data Table displays the data for the component selected in the Subsystem Assembly Layout above. Because there could be a large number of mnemonics, the table includes the ability to do a type-ahead search for a particular item or filter the table by status. Once operators have identified a mnemonic of interest, the table includes the ability to add it to the Watcher panels in the Monitor and Command apps to keep an eye on it over time.

![TT&C Mnemonic Data Table Details](/img/service-specific-ux-design/ttc-investigate-mnemonics-table-details.png)

1. **Status Symbols** - symbols indicate current subsystem status and can be sorted by severity.
2. **Table Filters** - the table can be filtered by name or severity to narrow down high volumes of content and surface the most relevant results.
3. **Add to Watcher** - clicking the checkbox adds the row item, or mnemonic, to the Watcher component in the Monitor Application.

## Task Flow Example - Add Mnemonics to Watcher

Below is an animated walkthrough of a representative task flow using the TT&C Investigate app. In this flow, an operator uses the app to identify a problem in a satellite subsystem assembly and then adds two mnemonics to the Watcher panels in the Monitor and Command apps.

![Task Flow Example](/img/service-specific-ux-design/gif-placeholder.png)

## Design Materials and Source Code

Below are design and development resources to get you started on an app that supports TT&C services. Note that there are some discrepancies between the design documents and the [TT&C Investigate Sample App](https://ttc-investigate.astrouxds.com/) due to design improvements that were introduced late in the app development cycle.

| Resources                                                                                                                                        | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TT&C Design Specifications (pdf)](/downloads/ttc-specifications.pdf) | The TT&C Design Specification contains information on use cases, task flows, UX research and wireframes for key features of the TT&C App Suite.               |
| [TT&C Design Wireframes (pdf)](/downloads/ttc-wireframes.pdf)         | The TT&C Design Wireframes document contains the complete set of wireframes (mid-fidelity renderings) of the screens designed for the TT&C App Suite.         |
| [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/tt-c-investigate/src/master/)                                                 | The source code Git repository and other useful documentation for the TT&C Investigate App is hosted at bitbucket.org so that you can check it out in detail. |
