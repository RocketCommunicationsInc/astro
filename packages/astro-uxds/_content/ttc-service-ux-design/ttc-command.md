---
tags: ['ttc', 'egs']
path: /ttc-service-ux-design/ttc-command
date: Last Modified
layout: interior.template.njk
title: TT&C Comand
---

# TT&C Comand

[Launch TT&C Comand Sample App](https://ttc-command.astrouxds.com/) | [Design Materials and Source Code](#contentBottom)

The TT&C Command app is designed to be used for sending and receiving communications with a satellite during a contact. It contains status and command data for only a single satellite - one currently in a pass. Operators can open multiple command windows if they are managing several passes simultaneously.

UX research underscored the fact that commanding is the core of TT&C operations and that existing systems often split the functionality to support it across application windows. This makes finding critical information and actions more difficult and time consuming. Therefore, a key tenet of the Command app design was to centralize the core functionality into a single window.

Another aspect of the design aimed at reducing cognitive load is to give operators the ability to automate execution of the Pass Plan. Here, a plan can be run in a Manual mode, in which an operator determines when the next step is executed, Automated mode, in which the steps are executed sequentially by the system itself, or Semi-Auto mode, a hybrid of the two. Plans are set up to run in a default mode, but operators with sufficient privileges can override this as the situation dictates. Operators also have the option to add commands to the Pass Plan queue if necessary.

![TT&C Comand App](/img/service-specific-ux-design/ttc-command-app.png)

There are four main areas in the Command app: the Global Status Bar, Alerts panel, Pass Plan panel and System Health panel. The key elements are described below, but you can find much more design and task flow detail in the [TT&C Design Specification and Wireframes](/ttc-service-ux-design/ttc-command#contentBottom) documents. You can also launch the [TT&C Command Sample App](https://ttc-command.astrouxds.com/) to explore the design interactively.
![TT&C Comand App Details](/img/service-specific-ux-design/ttc-command-app-details.png)

## Global Status Bar

As outlined on the [About TT&C Designs](/ttc-service-ux-design/about-the-ttc-designs) page, each of the apps in the TT&C Suite is designed to occupy its own browser window, allowing operators to focus on the task at hand. But by virtue of being integrated into a suite, the apps share common functionality, such as a single login. Much of the shared functionality is provided in the [Global Status Bar](/components/global-status-bar), an Astro component featured in all three apps. Though the status bar contents vary somewhat between apps in order to best support each app’s individual workflows, all contain a [Clock](/components/clock), [Monitoring Icons](/components/icons-and-symbols), and an app switching menu that allows operators to transition quickly from one TT&C task flow to another.

![TT&C Comand Global Status Bar Details](/img/service-specific-ux-design/ttc-command-global-status-bar-details.png)

1. **App Switcher Menu** - the App Switcher Menu allows the user to launch new instances of different TT&C apps, sign in/sign out, and edit preferences.
2. **Global Clock** - time is central to many TT&C service task flows, so it is included in the Global Status Bar in all TT&C apps.
3. **Monitoring Icons** - the Dashboard app includes Upcoming Contacts Allocated (UCA) and Software status indicators, as well as status and alert counts for each of the top categories in the equipment hierarchy.

## Alerts

The Alerts panel provides operators with a roll-up of spacecraft specific alerts, as well as communications, software, and its assigned ground station. Operators can filter the alerts by Severity and Category, allowing them to quickly identify the most severe issues or focus in on particular areas of the system. This allows operators to efficiently track their workflow and keeps the Alerts pane more sparsely populated, so they’ll be more likely to notice when new alerts come in. Operators can also drill in to see additional information on any of the alerts and launch an instance of the [TT&C Investigate App](/ttc-service-ux-design/ttc-investigate) to explore the issue further.

:::two-col
![TT&C Comand Alerts Detail](/img/service-specific-ux-design/ttc-monitor-alerts-details.png)

1. **Active Alert Hero Number** - Shows number of active alerts at a glance.
2. **Filter Select menus** - filters alert list by severity and category.
3. **Expandable List Items** - expands to show alert details and call-to-action (if applicable).
4. **Investigate** - launches an instance of the TT&C Investigate App.
5. **Acknowledge/Dismiss** - acknowledges or dismisses alerts.
   :::

## Pass Plan

The Pass Plan panel is where operators will track or initiate execution of the commands sent to the satellite. Depending on whether the current plan is running in Manual, Semi-Auto or Automated mode, operators will either explicitly initiate commands in this pane, simply monitor the progress as the system initiates the commands, or something in between. If it becomes necessary to insert a command in the plan, operators could use the Add to queue functionality at the bottom of the pane to search and specify the command to be inserted.

:::two-col
![TT&C Comand Pass Plan Detail](/img/service-specific-ux-design/ttc-command-pass-plan-details.png)

1. **Mode** - allows operators with the necessary permissions to set the plan to run in Manual, Semi-Auto, or Automated mode.
2. **Pass Indicator** - allows operators to determine if they are in pre-pass, pass or post-pass in relation to the AOS/LOS for the contact.
3. **Pass Plan** - an interactive checklist of instructions an operator is expected to complete during a pass. This includes, but is not limited to: Checkboxes, Select menus and play and pause controls.
4. **Mnemonic Snapshot** - allows operators to inspect a mnemonic called out for verification in the pass plan.
5. **Command Line** - allows operators to enter commands needed to maintain the overall health of the pass, for anomaly resolution and/or other operational needs.
   :::

## System Health

The System Health panel allows operators to track the strength of the communication signal with the satellite and monitor the overall health of the satellite subsystems. The health data here is determined from telemetry data coming in during the pass. If there is a problem with any of the subsystems, operators can navigate directly to a detailed view of it in the Investigate app to determine if action is required during the pass. This panel also includes Watcher functionality specific to the satellite.
:::two-col
![TT&C Comand System Health Detail](/img/service-specific-ux-design/ttc-command-system-health-details.png)

1. **Lock and Signal Strength** - displays the lock value and signal strength, as well as a status indicator of the quality of lock.
2. **Telemetry and Total Frame Count** - displays telemetry value and a status indicator to determine, at-a-glance, the quality of telemetry, as well as the frame count.
3. **VCC (Vehicle Command Count)** - displays the total command count of the commands being sent to the spacecraft as well as any bad commands sent or received.
4. **Subsystem Status** - the subsystem’s health is identified by the accompanying status indicator.
5. **Investigate** - opens a view of the subsystem in the TT&C Investigate App.
6. **Contextual Watcher** - displays mnemonic information being watched for the satellite in the current pass.
   :::

## Task Flow Example - Pass Flow

Below is an animated walkthrough of a representative task flow using the TT&C Monitor app. In this flow, an operator runs through the steps in the pre-defined pass plan and adds a command at the end.

![Task Flow Example](/img/service-specific-ux-design/gif-placeholder.png)

## Design Materials and Source Code

Below are design and development resources to get you started on an app that supports TT&C services. Note that there are some discrepancies between the design documents and the [TT&C Command Sample App](https://ttc-command.astrouxds.com/) due to design improvements that were introduced late in the app development cycle.

| Resources                                                                                                                                        | Description                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TT&C Design Specifications (pdf)]( https://s3-us-west-2.amazonaws.com/com.rocketcom.astrouxds/downloads/ttc-specifications.pdf) | The TT&C Design Specification contains information on use cases, task flows, UX research and wireframes for key features of the TT&C App Suite.           |
| [TT&C Design Wireframes (pdf)]( https://s3-us-west-2.amazonaws.com/com.rocketcom.astrouxds/downloads/ttc-wireframes.pdf)         | The TT&C Design Wireframes document contains the complete set of wireframes (mid-fidelity renderings) of the screens designed for the TT&C App Suite.     |
| [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/tt-c-command/src/master/)                                                     | The source code Git repository and other useful documentation for the TT&C Command App is hosted at bitbucket.org so that you can check it out in detail. |
