---
tags: components
path: /components/global-status-bar
date: Last Modified
layout: components.template.njk
title: Global Status Bar
demo: components-global-status-bar--global-status-bar
storybook: components-global-status-bar--global-status-bar
git: rux-global-status-bar
height: 150px
---

# Global Status Bar

The Global Status Bar is a full width view across the top of an application — an area commonly reserved for global status, global command and top-level navigation. The Global Status Bar often includes: Application Name, Monitoring Icons, Top Level Navigation and an Emergency Button.

## Rules of Thumb

- Make Monitoring Icons interactive to reveal in-depth information.
- Make sure that Monitoring Icons use color coding, iconography, and labels consistent with the standard design.
- Include the name of the application.

## Appearance and Behavior

![Simplest Global Status Bar - Only include the App Name.](/img/components/global-status-simple.png "Simplest Global Status Bar - Only include the App Name.")

![Simple Global Status Bar - App Name and Emergency Shut Off.](/img/components/global-status-more.png "Simple Global Status Bar - App Name and Emergency Shut Off.")

![More Complex Global Status Bar - App Name, Status Icons and Emergency Shut Off.](/img/components/global-status-very.png "More Complex Global Status Bar - App Name, Status Icons and Emergency Shut Off.")

#5.1.1[Most Complex Global Status Bar - App Name, Navigation, Monitoring Icons and Emergency Shut Off.](/img/components/global-status-complex.png "Most Complex Global Status Bar - App Name, Navigation, Monitoring Icons and Emergency Shut Off.")

::: note
When using the alternate light theme in Astro, the Global Status Bar and all of the elements it contains still use the default dark theme styling.
:::

## Examples

:::two-col

![Do: Correctly and consistently utilize the standard elements that comprise the Global Status Bar.](/img/components/global-status-do-1.png "Do: Correctly and consistently utilize the standard elements that comprise the Global Status Bar.")

![Don’t: Use icons, labels and colors incorrectly.](/img/components/global-status-dont-1.png "Don’t: Use icons, labels, and colors incorrectly.")

![Do: Left justify the application name and Top Level Nav (when utilized). Right justify Icons and Emergency Shut Off (when utilized).](/img/components/global-status-do-2.png "Do: Left justify the application name and Top Level Nav (when utilized). Right justify Icons and Emergency Shut Off (when utilized).")

![Don’t: Use the Global Status Bar for controls or indications that come and go with different app modes. Reserve it for truly global elements.](/img/components/global-status-dont-2.png "Don’t: Use the Global Status Bar for controls or indications that come and go with different app modes. Reserve it for truly global elements.")

:::
