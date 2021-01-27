---
tags: resources
path: /service-specific-ux-design
date: Last Modified
layout: interior.template.njk
title: Service Specific UX Design
---

# Service Specific UX Design
:::note
The images depicted on this page use the color palette and fonts from Astro 4. All new projects should use Astro 5 colors and fonts to be considered an Astro application. Refer to this section for general user experience guidance only, *not* visual design guidance.
:::
The goal of the Service Specific UX Design effort is to promote the development of consistent, robust applications to support Enterprise Ground Services (EGS) by applying UX design process and the Astro Space UX Design System to create, document and implement baseline designs as interactive sample apps. The work described here focused on two key EGS services, [Ground Resource Management (GRM)][grm-designs] and [Telemetry, Tracking & Command (TT&C)][ttc-designs] and followed the process below:

- Conducted [UX research](/design-process/research) with users and stakeholders to identify key task flows, constraints and current pain points in existing systems.
- Used the findings from this research and the Astro Space UX Design System to [design](/design-process/ui-design) solutions to support GRM and TT&C Services.
- In partnership with users and stakeholders, iteratively evaluated and improved on the designs to ensure they support the key task flows in an efficient and usable manner.
- Implemented the resulting designs as interactive sample applications using the [Astro UI Components](/components/readme).
- Provided the detailed design specifications, wireframes, sample applications and source code as [downloadable resources](/downloads) to teams looking to develop applications supporting GRM and TT&C Services.

This effort included many hours of interviews with users and stakeholders, detailed analysis of task flows and requirements, and iterative evaluation and improvement to the designs based on user feedback. All of this was done with the intent that the sample app designs be used as a reference for developing GRM and TT&C apps, thus fostering a consistent, successful user experience across systems that support this functionality.

## GRM Service UX Design

The UX research conducted on GRM services drove the design of three sample apps integrated into the GRM App Suite. The [GRM Dashboard][grm-dashboard] provides space situational awareness to the operator by consolidating and surfacing the most important information related to contacts and equipment. In addition to this primary usage, the GRM App Suite supports a comprehensive set of secondary tasks for managing contacts and equipment in the [GRM Schedule][grm-schedule] and [GRM Equipment Manager][grm-equipment] apps. You can get an overview of the design work on the [About the GRM Designs page][grm-designs] or use one of the links below to get more information about a particular app.

![](/img/service-specific-ux-design/grm-dashboard-app.png "")

[GRM Dashboard][grm-dashboard]

![](/img/service-specific-ux-design/grm-equipment-manager-app.png)

[GRM Equipment Manager][grm-equipment]

![](/img/service-specific-ux-design/grm-schedule-app.png)

[GRM Schedule][grm-schedule]

## TT&C Service UX Design

The UX research on TT&C services also resulted in the design of a three-app suite. The TT&C App Suite is designed to support ground-to-satellite communication, including sending commands, monitoring constellations and maintaining the health of spacecraft. The [TT&C Monitor][ttc-monitor] app allows the operator to monitor status, alerts, health and function of an individual satellite and satellite constellations. The [TT&C Command][ttc-command] app allows the operator to send and receive streams of data to and from a spacecraft using a set of commands. The [TT&C Investigate][ttc-investigate] app allows the operator to investigate spacecraft alerts and anomalies and analyze subsystem mnemonics, measurements, limits, etc. You can get an overview of the design work on the [About the TT&C Designs][ttc-designs] page or use one of the links below to get more information about a particular app.

![TT&C Monitor App](/img/service-specific-ux-design/ttc-command-app.png)

[][ttc-monitor]

![TT&C Command App](/img/service-specific-ux-design/ttc-command-app.png)

[][ttc-command]

![](/img/service-specific-ux-design/ttc-command-app.png)

[TT&C Investigate][ttc-investigate]

[grm-designs]: /grm-service-ux-design/about-the-grm-designs
[grm-dashboard]: /grm-service-ux-design/grm-dashboard
[grm-equipment]: /grm-service-ux-design/grm-equipment-manager
[grm-schedule]: /grm-service-ux-design/grm-schedule
[ttc-designs]: /ttc-service-ux-design/about-the-ttc-designs
[ttc-monitor]: /ttc-service-ux-design/ttc-monitor
[ttc-command]: /ttc-service-ux-design/ttc-command
[ttc-investigate]: /ttc-service-ux-design/ttc-investigate
