---
tags: components
path: /components/global-status-bar
date: Last Modified
layout: components.template.njk
title: Global Status Bar
demo: components-global-status-bar--default-story
storybook: components-global-status-bar--default-story
git: rux-global-status-bar
height: 150px
---

# Global Status Bar

The Global Status Bar is a full width view across the top of an application — an area commonly reserved for global status, global command and top-level navigation.

## Appearance and Behavior

The Global Status Bar has four main parts: App Icon, App Title, App State, and Logged-in Username. Additional custom features can be added to the Global Status bar. Suggested elements include Clock, Monitoring Icons, and Buttons.

![Simplest Global Status Bar - Only include the App Title.](/img/components/global-status-simple.png "Simplest Global Status Bar - Only include the App Title.")

![Standard Global Status Bar - App Icon, App Title, App State, and Logged-in Username](/img/components/global-status-very.png "Standard Global Status Bar - App Icon, App Title, App State, and Logged-in Username")

![Complex Global Status Bar - App Icon, App Title, App State, Logged-in Username, Clock, and Monitoring Icons.](/img/components/global-status-complex.png "Complex Global Status Bar - App Icon, App Title, App State, Logged-in Username, Clock, and Monitoring Icons.")

::: note
When using the alternate light theme in Astro, the Global Status Bar and all of the elements it contains still use the default dark theme styling.
:::

## Examples

:::two-col

![Do: Correctly and consistently utilize the standard elements that comprise the Global Status Bar.](/img/components/global-status-do-1.png "Do: Correctly and consistently utilize the standard elements that comprise the Global Status Bar.")

![Don’t: Use icons, labels and colors incorrectly.](/img/components/global-status-dont-1.png "Don’t: Use icons, labels, and colors incorrectly.")

![Do: Left justify the application name. Additional custom elements should be centered in the Global Status Bar or right justified (when utilized).](/img/components/global-status-do-2.png "Do: Left justify the application name and Top Level Nav (when utilized). Right justify Icons and Emergency Shut Off (when utilized).")

![Don’t: Use the Global Status Bar for controls or indications that come and go with different app modes. Reserve it for truly global elements.](/img/components/global-status-dont-2.png "Don’t: Use the Global Status Bar for controls or indications that come and go with different app modes. Reserve it for truly global elements.")

:::
