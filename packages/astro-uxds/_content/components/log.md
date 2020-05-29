---
tags: components
path: /components/log
date: Last Modified
layout: components.template.njk
title: Log
demo: https://astro-components.netlify.com/iframe.html?id=components-log--log
storybook: components-log--log
git: rux-log
height: 420px
theme: true
---

# Log

A Log is a tabular representation of application events and may include username, priority, equipment type, signal type, etc. As part of the Notification System, Logs provide sorting and filtering function for examining events.

## Rules of Thumb

- Logs always include a timestamp

## Appearance and Behavior

### Basic Log

![The log includes a Table of timestamped events and a Search field to narrow the displayed events](/img/components/log-basic.png "The log includes a Table of timestamped events and a Search field to narrow the displayed events")

### Scroll Interaction

New events are added to the top of the Table. The Log has two subtly different modes of scrolling interaction:

- If the Log is scrolled all the way to the top (and therefore the most recent event is on the first row), all new events are added to the top. Older events move down to make room. Essentially, scrolling is locked to the top allowing users to always see the latest event.
- When the user has scrolled down to examine older events, new events don’t automatically scroll the display. This allows the user to read the Log without incoming events changing the view.

### Searching and Filtering

- The user may enter text into the Search field to narrow displayed events. As users enter text, all events that match the Search text remain, and events that do not are removed. Simple wildcard pattern matching should be used.
- The defined scrolling rules apply when a Search term is entered. If the Table is scrolled to the top, it should remain locked to the top. New events that match the Search term are added to the top.

![View of Search Text Applied Within Field](/img/components/log-search.png "View of Search Text Applied Within Field")

