---
tags: components
path: /components/application-state
date: Last Modified
layout: components.template.njk
title: Application State
# demo: components-application-state--application-state
# storybook: components-application-state--application-state
# git: application-state
height: 260px
theme: true
---

# Application State

The Application State component indicates the state the entire application is in (such as Live, Exercise, Training, or Development), so that the user does not execute a command on a live asset unintentionally.

## Rules of Thumb

- Application State (when present) should be visible at all times. Developers should configure menu placements to ensure the app state is not occluded.

- Use short names for application states when possible to reduce crowding in the Global Status Bar.

- Make an explicit decision on whether labeling the live/production version of the application is appropriate for your application. Depending on the use case, this additional indicator can be helpful or distracting and unnecessary.

- If the application is in more than one state at a time, for example a training state that is still being created in the development environment, then show all relevant state names within the same App State component, but with a textual divider such as a slash or comma.

- If the user needs to swap between application states within the user interface, then provide that option in the application menu. This functionality should only be added if research has shown that easy access to other application states is beneficial to your users since the consequences of making changes in the wrong application state can often be quite large.

## Appearance and Behavior

### Background

- The background rectangle for the component is 22 px/1.375 rem in height with 2 px/0.125 rem corner radii.

- The background rectangle does not change height, but will change width with longer text content.

- It is suggested that the background color for the application state component uses Astro 7.0 palettes Purple, Hot Orange, Pink, and Teal (commonly used for Tags).

::: caution
Only use Tag colors when necessary as overuse of colors may reduce efficacy of monitoring icon, classification marking, and notification banner component colors.
:::

### Text

- Text within the component uses the Body 2 style and sentence casing.

- The default font color is the Dark Theme’s default body text color (#FFFFFF) for use with the default, dark background color.

- When a lighter Tag background color is used, the font color changes to `--colorTertiaryDarken4` for better color contrast and legibility.

- Text does not wrap within the component in order to keep the height of the Global Status Bar consistent across application states which improves muscle memory and faster recognition time.

- Padding to the left and right of the text is 6 px/0.375 rem within the background shape.

### Location

- The App State component is placed around 6 px/0.375 rem below the application title text bottom in the [Global Status Bar](https://astrouxds.com/components/global-status-bar/).

- The App State should be left-aligned to the application title text, not the menu.

- If a left-aligned username is present, add 12 px/0.75 rem of spacing between the App State and the username for better legibility of both elements.

- When the App State is present, the application title, menu, state, and username section should be vertically centered in the allotted space within the [Global Status Bar](https://astrouxds.com/components/global-status-bar/).

## Examples

:::two-col
![Do: Place the indicator below the application title.](/img/components/app-state-do-1.png "Do: Place the indicator below the application title.")

![Don't: Place the indicator below the application menu.](/img/components/app-state-dont-1.png "Don't: Place the indicator below the application menu.")

![Do: Show all relevant state names if more than one application state is ongoing at the time.](/img/components/app-state-do-2.png "Do: Show all relevant state names if more than one application state is ongoing at the time.")

![Don’t: Allow text wrapping in the component.](/img/components/app-state-dont-2.png "Don’t: Allow text wrapping in the component.")

![Do: Use short names to avoid overcrowding of the Global Status Bar.](/img/components/app-state-do-3.png "Do: Use short names to avoid overcrowding of the Global Status Bar.")

![Don't: Allow other elements of the user interface like the app menu to obscure the Application State.](/img/components/app-state-dont-3.png "Don't: Allow other elements of the user interface like the app menu to obscure the Application State.")

![Do: Use the application menu to enable state switching when necessary.](/img/components/app-state-do-4.png "Do: Use the application menu to enable state switching when necessary.")

![Don’t: Implement state switching in the UI without confirming that this functionality is approved by your client or security expert.](/img/components/app-state-dont-4.png "Don’t: Implement state switching in the UI without confirming that this functionality is approved by your client or security expert.")

![Do: Change text color to <span style="color:#fff;background-color:#182635;font-family:monospace;padding:0 0.25rem;">--colorTertiaryDarken4</span> if the background color makes the original text color hard to read.](/img/components/app-state-do-5.png "Do: Change text color to --colorTertiaryDarken4 if the background color makes the original text color hard to read.")

![Don’t: Use non-default or non-tag colors for background colors.](/img/components/app-state-dont-5.png "Don’t: Use non-default or non-tag colors for background colors.")
:::
