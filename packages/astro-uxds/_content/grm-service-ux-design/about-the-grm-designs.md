---
tags: ["grm", "egs"]
path: /grm-service-ux-design/about-the-grm-designs
date: Last Modified
layout: interior.template.njk
title: About the GRM Designs
---

# Ground Resource Management (GRM)

:::note
The images depicted on this page use the color palette and fonts from Astro 4. All new projects should use Astro 7 colors and fonts to be considered an Astro application. Refer to this section for general user experience guidance only, _not_ visual design guidance.
:::

Directing and maintaining satellites orbiting in space requires coordinating personnel, processes, and equipment on the ground. This is the role of Ground Resource Management (GRM) systems. Key aspects of GRM services include the following:

- Monitor System - Maintaining awareness of the status of critical components of the ground system, including equipment and scheduled contacts.
- Manage Contacts - Coordinate ground systems to ensure satellite contacts have all the equipment needed to achieve mission objectives.
- Manage Equipment - Monitor health status of ground system equipment and schedule maintenance jobs as needed to ensure availability and ongoing reliability.

### UX Research Findings

UX research conducted in collaboration with users and domain experts on existing GRM workflows and systems found that:

- The operators performing GRM tasks range from entry-level to advanced in terms of skill and engineering knowledge and typically work in a control center environment using a dedicated computer system with 2 or 3 large displays.
- There isn’t an integrated software solution to manage the core components of GRM - instead the end-to-end workflow requires various pieces of software, phone calls, emails, and paperwork.
- Current GRM solutions lack a centralized place for operators to view the most important information at-a-glance.
- In current GRM solutions, when critical information is presented alongside less critical information, such as an event log, it is often not clearly distinguished, making it difficult to quickly identify high priority items.
- Existing GRM solutions are not consistently designed or structured between systems, thus complicating training requirements and hindering transfer of learning.
- GRM systems need to support scheduling and ground system management for a large number of simultaneous satellite contacts, placing a significant cognitive burden on operators. As missions expand in size and scope and squadrons consolidate, this burden would be expected to increase.
- Equipment is often a shared resource between operational groups, and sometimes conditions require that contact with a particular satellite needs to take priority over contacts that are already scheduled, thus causing scheduling conflicts that need to be resolved.

A GRM system that enables efficient coordination of ground resources would allow for consolidation of equipment, thus decreasing purchasing and maintenance costs, more agile response to events that create schedule conflicts, increased system scalability, and opportunities for automation.

## UX Design and Sample Apps

Based on this initial research and follow-up design iterations with operators and stakeholders, the resulting design effort focused on an integrated suite of three GRM Sample Apps, each designed to support key functionality and task flows. Each of the apps is designed to occupy its own browser window, allowing operators to focus on the task at hand, but by virtue of being integrated into a suite, the apps share functionality and support common task flows.

### GRM App Suite

:::two-col
![GRM Application Suite](/img/service-specific-ux-design/grm-suite-apps.png)
:::col

The GRM App Suite comprises three integrated sample apps: Dashboard, Equipment Manager, and Schedule.

- [GRM Design Specifications (pdf)](http://com.rocketcom.astrouxds.s3.amazonaws.com/attachments/cjx3r384i2gbihmqnxcwrq25d-grm-specifications.pdf)
- [GRM Wireframes (pdf)](http://com.rocketcom.astrouxds.s3.amazonaws.com/attachments/cjtsx349t073s4iqnxbejjwg6-grm-wireframes.pdf)

:::

### GRM Dashboard

:::two-col
![GRM Dashboard App](/img/service-specific-ux-design/grm-dashboard-app.png)

:::col

The GRM Dashboard app rolls up all information necessary for providing the operator the highest level of situational awareness.

- [Overview of GRM Dashboard](/grm-service-ux-design/grm-dashboard)
- [Launch GRM Dashboard Sample App](https://grm-dashboard.astrouxds.com/)
- [App Source Code (Git repo)](https://bitbucket.org/rocketcom/grm-sample-apps-dashboard/src/master/)

  :::

### GRM Equipment Manager

:::two-col
![GRM Equipment Manager App](/img/service-specific-ux-design/grm-equipment-manager-app.png)

:::col

The GRM Equipment Manager app consolidates all ground equipment in one place, allowing operators to view status and request maintenance.

- [Overview of GRM Equipment Manager](/grm-service-ux-design/grm-equipment-manager)
- [Launch GRM Equipment Manager Sample App](https://grm-equipment.astrouxds.com/)
- [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/grm-sample-apps-equipment/src/master/)

  :::

### GRM Schedule

:::two-col
![GRM Schedule App](/img/service-specific-ux-design/grm-schedule-app.png)

:::col

The GRM Schedule app allows operators to view and manage the full schedule of contacts in their sphere of responsibility.

- [Overview of GRM Schedule](/grm-service-ux-design/grm-schedule)
- [Launch GRM Schedule Sample App](https://grm-schedule.astrouxds.com/)
- [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/grm-sample-apps-schedule/src/master/)

  :::
