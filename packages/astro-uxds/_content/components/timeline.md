---
tags: components
path: /components/timeline
date: Last Modified
layout: components.template.njk
title: Timeline
demo: https://rocketcom.bitbucket.io/packages/rux-timeline/demo/rux-timeline.html
storybook: components-timeline--timeline
git: rux-timeline
height: 160px
theme: true
---

# Timeline

Timeline displays a sequence of realtime events during a fixed time span. The Playhead indicates the current time of day. Time Regions represent events.

## Anatomy

![Anatomy of a simple Timeline element](/img/components/timeline-anatomy.png "Anatomy of a simple Timeline element")

## Appearance and Behavior

### Header

The header houses the Timeline Title and Status Symbol as well as Zoom control. The Status Symbol represents the overall status of the Timeline.

### Track

A Track is a row of Time Regions. A Timeline can have multiple Tracks. When the Timeline reaches maximum height, the Track area becomes vertically scrollable. Tracks have an optional label area fixed on the left end.

### Ruler

The Ruler spans the bottom of the Tracks and shows increments of time in the standard formats of: seconds, minutes, hours, days, weeks, months, etc. The Ruler may have day markers at midnight.

### Scroll Bar

The Scroll Bar moves the Timeline forward and backward in the viewport. Even when scrolling, the Playhead stays at the current time of day. The Scroll Bar's appearance and interaction are managed by the OS and browser, and will look different on each system.

### Time Region

Time Regions show blocks of time. Each Time Region has a title, status symbol, and time span. Regions are automatically rendered as 'current' if under the Playhead. Time Regions may also be selected by the user.

Time Regions can overlap. If they do, a small indicator will appear showing how many Time Blocks are overlapping. Upon hover a popup will appear showing title, time, and status for each of the overlapping Time Regions.

### Playhead

The Playhead indicates current time of day. Time Blocks underneath the playhead have a special 'current' appearance.

## Rules of Thumb

- Always manage the zoom level such that the time span at least fills the viewport.
- Concurrent Time Regions on the same Track should stack with the longest Time Region on bottom and shortest Time Region on top.
