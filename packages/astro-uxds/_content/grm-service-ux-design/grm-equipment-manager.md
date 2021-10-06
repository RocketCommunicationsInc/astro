---
tags: ["grm", "egs"]
path: /grm-service-ux-design/grm-equipment-manager
date: Last Modified
layout: interior.template.njk
title: GRM Equipment Manager
---

# GRM Equipment Manager

:::note
The images depicted on this page use the color palette and fonts from Astro 4. All new projects should use Astro 5 colors and fonts to be considered an Astro application. Refer to this section for general user experience guidance only, _not_ visual design guidance.
:::
[Launch GRM Equipment Manager Sample App](https://grm-equipment.astrouxds.com/) | [Design Materials and Source Code](#contentBottom)

A core requirement of GRM is to ensure that the equipment on the ground responsible for communicating with satellites is operational and available. This equipment includes hardware such as antennas, processors and software systems that all must interact with one another during a satellite contact. These resources are often shared amongst multiple operations, so if a piece of equipment is not available, it can affect multiple missions. As such, it is critical for operators to quickly identify equipment in need of attention and schedule maintenance to get it back up and running as quickly as possible.

The GRM Equipment Manager app is designed to support this capability by consolidating information related to all ground equipment in one place. The app's home page, the Inoperable Equipment page, immediately provides operators with a list of all inoperable ground equipment. From there, operators can navigate to the Equipment Details page to view the full details of specific inoperable equipment and take action such as schedule a maintenance job.

![GRM Equipment Manager App](/img/service-specific-ux-design/grm-equipment-manager-app.png)

There are three main areas of the GRM Equipment Manager app: the Global Status Bar, the Equipment Navigation Tree, and a tabbed content area that can display either the Inoperable Equipment page or the Equipment Details page. The key elements are described below, but you can find much more design and task flow detail in the GRM Design Specification and Wireframes documents. You can also launch the GRM Equipment Manager Sample App to explore the design interactively.

![GRM Equipment Manager App Details](/img/service-specific-ux-design/grm-equipment-manager-app-details.png)

## Global Status Bar

As outlined on the [About GRM Designs](/grm-service-ux-design/about-the-grm-designs) page, each of the apps in the GRM Suite is designed to occupy its own browser window, allowing operators to focus on the task at hand. But by virtue of being integrated into a suite, the apps share common functionality, such as a single login. Much of the shared functionality is provided in the [Global Status Bar](/components/global-status-bar), an Astro component featured in all three apps. Though the status bar contents vary somewhat between apps in order to best support each app’s individual workflows, all contain a [Clock](/components/clock), [Monitoring Icons](/components/icons-and-symbols), and an app switching menu that allows operators to transition quickly from one GRM task flow to another.

![GRM Dashboard App Details](/img/service-specific-ux-design/grm-equipment-manager-global-status-bar-details.png)

1. **App Switcher Menu** - the App Switcher Menu allows the user to launch new instances of different GRM apps, sign in/sign out, and edit preferences.
2. **Global Clock** - time is central to many GRM service task flows, so it is included in the Global Status Bar in all GRM apps.
3. **Monitoring Icons** - the Dashboard app includes Upcoming Contacts Allocated (UCA) and Software status indicators, as well as status and alert counts for each of the top categories in the equipment hierarchy.

## Equipment Navigation Tree

Along the left side of the GRM Equipment Manager app is a [navigation tree](/components/tree) that organizes the equipment in hierarchical form. The nature of the hierarchy would likely vary based on the structure of the operation, so it would need to be configurable on a per deployment basis. Using the tree, operators could drill in through the hierarchy and select a piece of equipment. Once the equipment is selected, a new tab is added in the tabbed content area and its details are displayed.

![GRM Equipment Manager Navigation Tree](/img/service-specific-ux-design/grm-equipment-manager-nav-tree-details.png)

1. **Tree Structure** - equipment is organized into a hierarchy with expandable and collapsible elements.
2. **Equipment Tab** - when a piece of equipment is selected, a new tab is created in the tabbed pane and its Equipment Details page is displayed.

## Inoperable Equipment Page

The default view of the Equipment Manager app is the Inoperable Equipment page, which contains a grid of equipment in a critical or serious alert state, organized by category, and color coded by severity. This allows operators to quickly identify assets that need attention. From this view, operators can click on a piece of equipment to be taken to its details page for more information and to take action.

![GRM Equipment Manager Inoperable Equipment Page](/img/service-specific-ux-design/grm-equipment-manager-inop-details.png)

1. **Equipment Categories** - inoperable equipment is organized into categories along with a total for the category.
2. **Equipment Status** - inoperable equipment is displayed with status coding indicating the severity of the problem.

## Equipment Details Page

Operators can access the Equipment Details page for a particular piece of equipment either via the navigation tree or from the grid of Inoperable Equipment. When operators open the details page for a piece of equipment, a new navigation tab to access it is added to the right of the Inoperable tab. This design allows operators to quickly and easily switch back and forth between equipment they are working with in the app.

There are two panels on the Equipment Details page, one on top designed to provide comprehensive information and actions for an individual piece of ground equipment and the other below, which is focused on Maintenance.

### Equipment Details

![GRM Equipment Manager Equipment Details](/img/service-specific-ux-design/grm-equipment-manager-equip-det-top-details.png)

1. **Equipment Tab** - a new tab labeled with the name of the equipment appears to the right of the “Inoperable” home button when operators navigate to any Equipment Details page.
2. **Toggles** - allow operators to change equipment's online/offline and considered/deconsidered states.
3. **Alerts** - a list of all current and past alerts for the related equipment.
4. **Current Contacts** - all contacts currently executing that include the related equipment in their equipment string.

### Maintenance

![GRM Equipment Maintenance Details](/img/service-specific-ux-design/grm-equipment-manager-equip-det-maint-details.png)

1. **Schedule Job** - the Schedule Maintenance Job page is displayed when operators click this button.
2. **Job Status** - the status of all current maintenance jobs for the equipment is displayed along with a button to view additional detail.
3. **Maintenance History** - displays the history of all maintenance job performed on the equipment.

### Schedule Maintenance Job

A key capability of the Maintenance panel is that it allows operators to schedule a new job. When Schedule Job is clicked, Maintenance Details appear and operators can enter all required information. Once a time frame for the job has been entered, clicking the Calculate Conflicts button will display any schedule conflicts that will arise when this equipment is unavailable during the maintenance window. Seeing this information allows operators to either schedule the maintenance to minimize impact or to see the contacts that will have to be modified to use a different piece of equipment during that period.

Note that maintenance-related task flows are covered in much more detail in the [GRM Design Specification and Wireframes](/grm-service-ux-design/grm-equipment-manager#contentBottom) documents, so be sure to consult those for more information.

![GRM Equipment Manager Schedule Jobs Details](/img/service-specific-ux-design/grm-equipment-manager-sched-maint-details.png)

1. **Page** - returns the user to the Dashboard view.
2. **Job Settings** - operators enter required information for the maintenance in the form at the left.
3. **Calculate Conflicts** - generates a list of contacts that will not execute due to the time window of this job, unless they are allocated different equipment.
4. **Conflicts Table** - if there are conflicts caused by the maintenance window, they are displayed in this table.
5. **Submit Request** - once operators have.

## Task Flow Example - Schedule Maintenance Job

Below is an animated walkthrough of a representative task flow using the GRM Equipment Manager app. In this flow, an operator notices a piece of equipment in a critical state and uses the app to request maintenance for it.

<div markdown="1">
	<figure>
		<a href="#demo" class="demo" name="close">
			<span class="icon-play"></span>
			<img src="/img/service-specific-ux-design/grm-equipment-manager-sched-job-placeholder.png"
			alt="GRM Equipment Manager demo" />
		</a>
	</figure>
	<a href="#close" class="lightbox" id="demo" markdown="1">
		<img src="/img/service-specific-ux-design/grm-equipment-manager-sched-job.gif" alt="GRM equipment manager" />
	</a>
</div>

## Design Materials and Source Code

Below are design and development resources to get you started on an app that supports GRM equipment management. Note that there are some discrepancies between the design documents and the [GRM Equipment Manager Sample App](https://grm-equipment.astrouxds.com/) due to design improvements that were introduced late in the app development cycle.

| Resources                                                                                                                                       | Description                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GRM Design Specifications (pdf)](http://com.rocketcom.astrouxds.s3.amazonaws.com/attachments/cjx3r384i2gbihmqnxcwrq25d-grm-specifications.pdf) | The GRM Design Specification contains information on use cases, task flows, UX research and wireframes for key features of the GRM App Suite.              |
| [GRM Design Wireframes (pdf)](http://com.rocketcom.astrouxds.s3.amazonaws.com/attachments/cjtsx349t073s4iqnxbejjwg6-grm-wireframes.pdf)         | The GRM Design Wireframes document contains the complete set of wireframes (mid-fidelity renderings) of the screens designed for the GRM App Suite.        |
| [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/grm-sample-apps-equipment/src/master/)                                       | The source code Git repository and other useful documentation for the GRM Dashboard App is hosted at bitbucket.org so that you can check it out in detail. |
