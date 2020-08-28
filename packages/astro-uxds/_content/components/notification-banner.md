---
tags: components
path: /components/notification-banner
date: Last Modified
layout: components.template.njk
title: Notification Banner
demo: https://astro-components.netlify.app/iframe.html?id=components-notification--all-notification-banners&viewMode=story
storybook: components-notification--all-notification-banners
git: rux-notification
height: 440px
theme: true
---

# Notification Banner

## Appearance and Behavior

Events that deserve user attention, but don’t require a response, may be displayed in a Notification Banner. The Banner displays within the user’s field-of-view, but doesn’t block other interaction.

If the user is currently working in a specific screen area, the Banner may be presented in that area. If the Notification is more general, or doesn’t relate to a specific area of the screen, it may be presented in the center of the screen just below the [Global Status Bar](/components/global-status-bar).

If another Notification Banner is waiting, it appears when the current Banner is dismissed. Banners don’t stack or group.
