---
tags: resources
path: /patterns/modeless-panes
date: Last Modified
layout: interior.template.njk
title: Modeless Panes
---

# Modeless Panes

Every application needs to present screens temporarily to collect user input or to display transient details. Desktop and mobile platforms use Dialogs, Alerts or whole screens for these temporary interactions. A goal of Astro is to present temporary interactions inline and modelessly whenever possible, we call this a **Modeless Pane**.

Modeless Panes allow Web applications to flow with less user interruption and to behave in a more Web-like fashion (overlapping and modal windows are not part of the core Web programming model).

Modeless Panes are revealed inline by shifting existing content downward or to the right. They have a **modeless** interaction model that does not require user action before moving to another area of the page.

## Interaction Model

The simplest type of Modeless Pane displays static content and has a single Close button.

![Modeless Pane example.](/img/design-guidelines/modeless-panes-1.png)

Modeless Panes with **actionable content**, such as controls for setting new values, have a pair of action buttons with a specific interaction.

In this example, the command to Set Power on Radio 1 causes the content below to be shifted down to reveal a Modeless Panel with controls to set a new value for power.

Until commitable changes have been made, the button pair are entitled **Cancel** (enabled) and **Apply** (disabled)

![Modeless Pane example.](/img/design-guidelines/modeless-panes-2.png)

After committable changes have been made, the button pair become Cancel (enabled) and Apply (enabled)

![Modeless Pane example.](/img/design-guidelines/modeless-panes-3.png)

Note that the design of this interaction, and the very nature of the web, means that the user can simply leave this pane by navigating elsewhere or closing the browser window. This design expects the users affirmative command to Apply before new values take effect.

**Never place two “Close” buttons on the same Pane.** Users may think they have different purposes. Always follow the distinct button layout described above.

![Modeless Pane Don't Example.](/img/design-guidelines/modeless-panes-dont-2.png)
::: note
Developer Note: Modeless Panes aren’t a specific programming construct. They may be implemented in a variety of ways. Astro doesn’t provide a standard implementation, so it’s important to follow the spirit and best practices of these guidelines as closely as possible.
:::
