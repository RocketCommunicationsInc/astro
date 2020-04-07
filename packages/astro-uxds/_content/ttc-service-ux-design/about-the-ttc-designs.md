---
tags: ['ttc', 'egs']
path: /ttc-service-ux-design/about-the-ttc-designs
date: Last Modified
layout: interior.template.njk
title: About the TT&C Designs
---

# About the TT&C Designs

## Telemetry, Tracking & Command (TT&C)

The purpose of a Telemetry, Tracking, and Command (TT&C) system is to support missions requiring communication between satellites and ground systems. Key aspects of this include tracking the satellites, monitoring and maintaining their state of health (SOH) via telemetry data, and transmitting commands to them to achieve mission objectives. An analysis of existing systems and task flows reveals three main components to supporting TT&C services:

- **Monitor Constellation** - monitor the status, health and function of a satellite constellation and the systems it relies on.
- **Command Satellites** - send and receive streams of data to and from a spacecraft, done using a set of commands arranged into a pass plan.
- **Investigate Anomalies** - investigate spacecraft alerts and anomalies, as well as analyze subsystem mnemonics, measurements, value limits, etc.

The animated graphic below depicts a much simplified version of a TT&C task flow, including major phases and activities.

![Task Flow Example](/img/service-specific-ux-design/gif-placeholder.png)

### UX Research Findings

UX research conducted in collaboration with users and domain experts on existing TT&C workflows and systems found that:

- There are operational differences based on mission, but the job of interacting with TT&C solutions is in the hands of Satellite Systems Operators (SSO) or Satellite Vehicle Operators (SVO). These operators can range from entry-level to advanced in terms of skill and engineering knowledge and generally work in a control center environment using a dedicated computer system with 2 or 3 large displays.
- The majority of operators’ TT&C activities take place when a target satellite is within contact range, but there are activities to be completed between contacts, including preparing for contact with the next satellite in the constellation.
- Accomplishing all the necessary tasks during a pass (when the satellite is within contact) can require switching between many windows or workstations to access controls and information.
- Current TT&C solutions lack a centralized place for operators to view important information at-a-glance.
- Operators are responsible for multiple satellites and there is a limited window to communicate with each, so it is imperative that they be able to perform their tasks quickly and with a minimum of cognitive load.  
  The software used for these systems often appears dated and visually disjointed.

## UX Design and Sample Apps

Based on this initial research and follow-up design iterations with operators and stakeholders, the resulting design effort focused on a suite of three TT&C Sample Apps, each designed to support key functionality and task flows. Each of the apps is designed to occupy its own browser window, allowing operators to focus on the task at hand, but by virtue of being integrated into a suite, the apps share functionality and support common task flows.

### TT&C App Suite

:::two-col

![TT&C Application Suite](/img/service-specific-ux-design/ttc-suite-apps.png)

:::col
The TT&C App Suite comprises three integrated apps: Monitor, Command & Investigate.

- [TT&C Design Specifications (pdf)](/downloads/ttc-specifications.pdf)
- [TT&C Wireframes (pdf)](/downloads/ttc-wireframes.pdf)
  :::

### TT&C Monitor

:::two-col

![TT&C Monitor App](/img/service-specific-ux-design/ttc-monitor-app.png)

:::col
The TT&C Monitor app allows operators to monitor status, alerts, health and function of an individual satellite and satellite constellations.

- [Overview of TT&C Monitor](/ttc-service-ux-design/ttc-monitor)
- [Launch TT&C Monitor Sample App](https://ttc-monitor.astrouxds.com/)
- [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/tt-c-monitor/src/master/)
  :::

### TT&C Command

:::two-col

![TT&C Command App](/img/service-specific-ux-design/ttc-equipment-manager-app.png)

:::col
The TT&C Command app allows operators to send and receive streams of data to and from a spacecraft using a set of commands, often referred to as a pass plan.

- [Overview of TT&C Command](/tt-c-service-ux-design/tt-c-command)
- [Launch TT&C Command Sample App](https://ttc-command.astrouxds.com/)
- [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/tt-c-command/src/master/)

:::

### TT&C Investigate

:::two-col

![TT&C Schedule App](/img/service-specific-ux-design/ttc-investigate-app.png)

:::col
The TT&C Investigate app allows operators to investigate spacecraft alerts and anomalies and analyze subsystem mnemonics, measurements, limits, etc …

- [Overview of TT&C Investigate](/tt-c-service-ux-design/tt-c-investigate)
- [Launch TT&C Investigate Sample App](https://ttc-investigate.astrouxds.com/)
- [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/tt-c-investigate/src/master/)
  :::
