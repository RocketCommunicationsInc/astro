---
tags: components
path: /components/tineline
date: Last Modified
layout: components.template.njk
title: Timeline
demo: https://rocketcom.bitbucket.io/packages/rux-timeline/demo/rux-timeline.html
storybook: components-timeline--timeline
git: rux-tineline
height: 160px
theme: true
---

# Timeline

Timeline displays a sequence of realtime events during a fixed time span. The Playhead indicates the current time of day, Time Regions represent events.

## Anatomy

![Anatomy of a simple timeline element](/img/components/timeline-anatomy.png "Anatomy of a simple timeline element")

## Appearance and Behavior

### Header

The header houses the timeline Title and Status Symbol as well as Zoom control. The Status Symbol represents the overall status of the timeline.

### Track

A track is a row of time regions. A timeline can have multiple tracks. When the timeline reaches maximum height, the track area becomes vertically scrollable. Tracks have an optional label area fixed on the left end.

### Ruler

The Ruler spans the bottom of the Tracks and shows increments of time in the standard formats of: seconds, minutes, hours, days, weeks, months, etc. The Ruler may have day markers at midnight.

### Scroll Bar

The Scroll Bar moves the timeline forward and backward in the viewport. Even when scrolling, the playhead stays at the current time of day. The Scroll Bar's appearance and interaction are managed by the OS and browser, and will look different on each system.

### Time Region

Time regions show blocks of time. Each time region has a title, status symbol, and timespan. Regions are automatically rendered as 'current' if under the playhead. Time Regions may also be selected by the user.

Time regions can overlap. If they do, a small indicator will appear showing how many timeblocks are overlapping. Upon hover a popup will appear showing title, time, and status for each of the overlapping time regions.

### Playhead

The Playhead indicates current time of day. Time Blocks underneath the playhead have a special 'current' appearance.

## Rules of Thumb

- Always manage the zoom level such that the time span at least fills the viewport.
- Concurrent time regions on the same track should stack with the longest time region on bottom and shortest time region on top.
