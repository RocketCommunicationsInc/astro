---
tags: resources
path: /patterns/notifications
date: Last Modified
layout: interior.template.njk
title: Notifications
---

# Notifications

Notifications of application events have varying levels of urgency or interruption. An event may be as inconsequential as a download completing or as important as equipment unexpectedly going offline. Astro provides a variety of situationally appropriate mechanisms to notify users of events with varying levels of urgency.

Below are examples of Astro Notifications from least urgency to highest priority:

![Notification urgency.](/img/patterns/notifications-urgency.png)

## Log

Events of least urgency may be added to a [Log](/components/log). Logged events aren’t likely to receive the user’s attention (Logs aren’t always in the user’s view), but are captured for later forensic use. Examples of low-level events are ordinary device state changes or routine consistency checks.

![Notification log example.](/img/patterns/notifications-log.png)

## Notification Symbol

Events that require some user attention, but no immediate response, may be indicated by changes to a [Notification Symbol](/components/icons-and-symbols).

This Notification Symbol shows that five events related to a satellite have occurred. You may hyperlink icons to reveal a deeper view of relevant Notification information. You may also link to the general Log.

![Notification symbols example.](/img/patterns/notification-symbols.png)

## Banner

Events that deserve more urgent user attention, but don't require a response, may be displayed in a Notification Banner. The Banner displays within the user's field-of-view, but doesn't block other interaction.

If the user is currently working in a specific screen area, the Banner may be presented in that area. If the Notification is more general, or doesn't relate to a specific area of the screen, it may be presented in the center of the screen just below the [Global Status Bar](/components/global-status-bar).

![Notification symbols example.](/img/patterns/notifications-banner.png)

## Modal Dialog

For events that require the user's immediate attention and response, a modal [Dialog Box](/components/dialog-box) may be used. Modal Dialog Boxes should be avoided if possible, as they deliberately interrupt all other user interaction which could be critical.

![Modal dialog example.](/img/patterns/notifications-modal-dialog.png)
