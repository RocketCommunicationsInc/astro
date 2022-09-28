---
tags: components
path: /components/notification-banner
date: Last Modified
layout: components.template.njk
title: Notification Banner
demo: components-notification--all-variants
storybook: components-notification--all-variants
git: rux-notification
scrolling: yes
height: 560px
theme: true
---

# Notification Banner

## Appearance and Behavior

Events that deserve user attention but don’t require a response, may be displayed in a Notification Banner.

The Banner displays within the user’s field-of-view, but doesn’t block other interaction. To do this, Banners push content down instead of overlaying atop it, and should span the width of the container. Therefore, we do not recommend using more than 2 lines of text as to not obscure the main content.

If the user is currently working in a specific screen area, the Banner may be presented in that area. If the Notification is more general, or doesn’t relate to a specific area of the screen, it may be presented in the center of the screen just below the [Global Status Bar](/components/global-status-bar).

If another Notification Banner is waiting, it appears when the current Banner is dismissed. Banners don’t stack or group.

## Status

Notification banners come in six statuses (normal, caution, serious, standby, off, and critical) and one no status option.

## Content

Notification banners can include text, icons, status symbols, buttons, and other content as necessary. Be careful of how much vertical space is used for the banner content so that other important elements on the screen are not pushed out of view.

## Closing

By default, notification banners have a close icon on the right side to allow the user to dismiss it manually. Alternatively, a button on the far right can be used instead of the close icon to provide more context to this dismissal action such as “Acknowledge” which could then make a record that the user has marked that they have read and understood the notification.

If the notification has a lower priority, the designer can also set the banner to disappear by itself after a set amount of time. This can be done either with or without a close icon that would let the user dismiss the banner before the set time has completed.
