---
tags: ['ttc', 'egs']
path: /ttc-service-ux-design/ttc-monitor
date: Last Modified
layout: interior.template.njk
title: TT&C Monitor
---

## TT&C Monitor

[Launch TT&C Monitor Sample App](https://ttc-monitor.astrouxds.com/) | [Design Materials and Source Code](/ttc-service-ux-design/ttc-monitor#contentBottom)

For operators of a TT&C service, maintaining situational awareness is of critical importance, and the TT&C Monitor app is designed to support this requirement. During the UX research effort, operators expressed a desire for a quick and efficient way to view overall status of their constellation and all of their systems, something lacking in their current systems. To deliver on this, the design team worked with domain experts and the operators to identify the most important data and then display it in a clear, logical manner in the app.

As operators’ primary TT&C app, the Monitor app would constantly occupy one of their large displays. The main usage would be in between contacts, when operators would use it to keep an eye on system and constellation health, prepare for upcoming contacts and view system trends.

![TT&C Monitor App](/img/service-specific-ux-design/ttc-monitor-app.png)

There are four main areas in the Monitor app: the Global Status Bar, Alerts panel, Constellation panel and Watcher panel. The key elements are described below, but you can find much more design and task flow detail in the [TT&C Design Specification and Wireframes](/ttc-service-ux-design/ttc-monitor#contentBottom) documents. You can also launch the [TT&C Monitor Sample App](https://ttc-monitor.astrouxds.com/) to explore the design interactively.

![TT&C Monitor App Details](/img/service-specific-ux-design/ttc-monitor-app-details.png)

## Global Status Bar

As outlined on the [About TT&C Designs](/ttc-service-ux-design/about-the-ttc-designs) page, each of the apps in the TT&C Suite is designed to occupy its own browser window, allowing operators to focus on the task at hand. But by virtue of being integrated into a suite, the apps share common functionality, such as a single login. Much of the shared functionality is provided in the [Global Status Bar](/ui-components/global-status-bar), an Astro component featured in all three apps. Though the status bar contents vary somewhat between apps in order to best support each app’s individual workflows, all contain a [Clock](/ui-components/clock), [Monitoring Icons](/ui-components/icons-and-symbols), and an app switching menu that allows operators to transition quickly from one TT&C task flow to another.

![TT&C Monitor App Details](/img/service-specific-ux-design/ttc-monitor-global-status-bar-details.png)

1. **App Switcher Menu** - the App Switcher Menu allows the user to launch new instances of different TT&C apps, sign in/sign out, and edit preferences.
2. **Global Clock** - time is central to many TT&C service task flows, so it is included in the Global Status Bar in all TT&C apps.
3. **Monitoring Icons** - the Monitor app includes Upcoming Contacts Allocated (UCA) and Software status indicators, as well as status and alert counts for each of the top categories in the equipment hierarchy.

## Alerts

The Alerts panel provides operators with a roll-up of alerts across the ground system, satellite vehicles, and satellite subsystems. Operators can filter the alerts by Severity and Category, allowing them to quickly identify the most severe issues or focus in on particular areas of the global system. This allows operators to efficiently track their workflow and keeps the Alerts pane more sparsely populated, so they’ll be more likely to notice when new alerts come in. Operators can also drill in to see additional information on any of the alerts and launch an instance of the TT&C Investigate App to explore the issue further.

:::two-col
![TT&C Monitor Alerts Details](/img/service-specific-ux-design/ttc-monitor-alerts-details.png)

1. **Active Alert Hero Number** - Shows number of active alerts at a glance.
2. **Filter Drop-downs** - filters alert list by severity and category.
3. **Expandable List Items** - expands to show alert details and call-to-action (if applicable).
4. **Investigate** - launches an instance of the TT&C Investigate App.
5. **Acknowledge/Dismiss** - acknowledges or dismisses alerts.
   :::

## Constellation

The Constellation panel shows the contacts for the satellites in the constellation. The operator has the option to either view these in a Timeline view, which shows past, current and future contacts along a scalable time range, or in a List view, which provides additional detail on each pass. In both views, the user can click a contact to open a [Modeless Pane](/design-guidelines/modeless-panes) containing its Contact Details or the associated Pass Plan.

### Timeline View

![TT&C Timeline View](/img/service-specific-ux-design/ttc-monitor-constellation-timeline-details.png)

1. **Spacecraft Names & Status Symbols** - indicates spacecraft and current status and severity.
2. **Time Blocks** - shows contact/pass duration and respective ground station and ground station status. Clicking a time block also launches the Contact Details Slide-In Pane (Contact Details tab) where you can view contact details, as well as launch a Command Application Window for the corresponding spacecraft.
3. **Zoom Tool** - zooms in and out of the timeline, magnifying the time blocks and stretching the space between time increments.
4. **View Switch** - switches between List and Timeline views.

### List View

![TT&C List View](/img/service-specific-ux-design/ttc-monitor-constellation-list-details.png)

1. **Spacecraft Names & Status Symbols** - indicates spacecraft and current status and severity.
2. **Command Quick Launch** - launches the Command App/Window for respective spacecrafts (in active pass state). This interaction is indicated by the underline.
3. **View Switch** - switches between List and Timeline views.
4. **Actions Menu (View Pass Plan)** - opens the Contact Details Modeless Pane

## Contact Details and Pass Plan Pane

The Contact Details Modeless Pane opens on the right side of the browser window. It allows operators to view contact details for a spacecraft — including information such as next pass time, AOS/LOS, state of contact as well as ground station details like name, azimuth and elevation. Operators can also toggle the view to display the Pass Plan for the spacecraft’s current/upcoming pass, which includes details like AOS commands, steps, and run lengths.

![TT&C Contact Details Pane](/img/service-specific-ux-design/ttc-monitor-contact-details.png)

1. **Command Quick Launch** - launches TT&C Command App for the contact.
2. **View Switch** - switches between Contact Details and Pass Plan views.

## Watcher

The Watcher functionality allows the operator to flag and watch specific telemetry trends over time such as changes in battery levels and other mnemonic values. Mnemonics are monitored for actual value in relation to the assigned value threshold.

![TT&C Watcher](/img/service-specific-ux-design/ttc-monitor-watcher-details.png)

1. Collapsible Item List - items in the watcher are categorized by spacecraft and can be collapsed or expanded to show the subsequent list of mnemonics being monitored.
2. Mnemonics - hovering over a mnemonic value shows the longhand version of its name. This interaction is indicated by the dashed underline. Clicking a mnemonic/watcher item changes the graph on the right to reflect how the values have trended over time.
3. Editable Threshold Value - threshold can be edited by clicking on the field, setting the desired value and saving changes by clicking the checkmark icon.
4. Action Menu - allows operators to remove items from the watchlist and/or investigate them in the TT&C Investigate application.
5. Graph - shows mnemonic value trends over time.
6. Data Values - hovering over a point in the trend line displays the associated value.

## Task Flow Example - Prepare for Pass

Below is an animated walkthrough of a representative task flow using the TT&C Monitor app. In this flow, an operator reviews the details and Pass Plan for an upcoming contact and then navigates to the Command app to conduct Pass operations.

![Task Flow Example](/img/service-specific-ux-design/gif-placeholder.png)

## Design Materials and Source Code

Below are design and development resources to get you started on an app that supports TT&C services. Note that there are some discrepancies between the design documents and the [TT&C Monitor Sample App](https://ttc-monitor.astrouxds.com/) due to design improvements that were introduced late in the app development cycle.

| Resources                                                                                                                                        | Description                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TT&C Design Specifications (pdf)](http://com.rocketcom.astrouxds.s3.amazonaws.com/attachments/cjtsy7te707614iqnq3czazo4-ttc-specifications.pdf) | The TT&C Design Specification contains information on use cases, task flows, UX research and wireframes for key features of the TT&C App Suite.           |
| [TT&C Design Wireframes (pdf)](http://com.rocketcom.astrouxds.s3.amazonaws.com/attachments/cjtsy72c3075p4iqntmk534ua-ttc-wireframes.pdf)         | The TT&C Design Wireframes document contains the complete set of wireframes (mid-fidelity renderings) of the screens designed for the TT&C App Suite.     |
| [App Source Code (Git Repository)](https://bitbucket.org/rocketcom/ttc-monitor/src/master/)                                                      | The source code Git repository and other useful documentation for the TT&C Monitor App is hosted at bitbucket.org so that you can check it out in detail. |
