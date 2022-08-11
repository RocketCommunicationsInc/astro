---
tags: components
path: /components/tag
date: Last Modified
layout: components.template.njk
title: Tag
demo: components-tag--all-variants
storybook: components-tag--rux-tag
git: rux-tag
height: 200px
theme: true
---

# Tag

Tags help users quickly identify important information related to an item and categorize items by keywords.

## Appearance & Behavior

Tags are a distinct component that are useful for identifying important information at a glance as well as filtering and categorizing items by keywords. Other visual indicators such as color help to draw users' attention and assist in categorization of like items.

## Tags in Astro

A Tag is a component made up of a text label, container, and color. Tags can be interactive, with the ability to edit or clear them from a data set, or static used as additional information or a link to other similarly tagged elements.

In code, Astro provides Status Tags. A Status Tag is system generated and typically has three states (Pass, Fail, and Unknown). A Status Tag cannot be removed or cleared from the interface. The color style assigned to the Status Tag cannot be changed, though the text label of the tag can be. Status Tags should not be interactive. To use other colors or make a tag interactive, custom coding can be added on top of the provided Status Tag code.

## Use Cases

Status Tags are commonly used to show the status of a system such as an antennae or another communication device. Status Tags add important information to the status of a system and can use domain and system-specific terminology such as Offline, Online, and Connecting or Under Maintenance.

Tags are most commonly used in large data sets, such as tables, to help filter and organize information. Tags are especially useful for scanning and comparing data sets for meaningful information and relationships. Users are allowed to create, edit and delete tags which help manage their large, dynamic data sets.

## Common Mistakes

- Users may confuse tags with buttons, so it is important to distinguish the shape and interaction of tags from button components.

- When using tags, colors should not overlap status or classification colors. We recommend using standard tag colors. For further color guidance, please refer to the usage documentation (Color).

- Keep in mind that using tags adds to the visual noise of an interface, so use tags in moderation.

## Examples

:::two-col
![Do: Use Status Tags to show system status.](/img/components/tag-do-1.png "Do: Use Status Tags to show system status.")

![Don’t: Don’t mix interactive and static tags. Tags that are being used to filter or organize data should have consistent behavior.](/img/components/tag-dont-1.png "Don’t: Don’t mix interactive and static tags. Tags that are being used to filter or organize data should have consistent behavior.")

![Do: Use tags when items are mapped to multiple categories and you need to differentiate between them.](/img/components/tag-do-2.png "Do: Use tags when items are mapped to multiple categories and you need to differentiate between them.")

![Don’t: When writing tags, avoid line-wrapping and utilize short keywords when possible.](/img/components/tag-dont-2.png "Don’t: When writing tags, avoid line-wrapping and utilize short keywords when possible.")

![Do: Use text colors in tags that pass WCAG AA contrast tests compared to the tags' background colors.](/img/components/tag-do-3.png "Do: Use text colors in tags that pass WCAG AA contrast tests compared to the tags' background colors.")

![Don’t: Use too many colors for tags. If you need to use multiple colors, ensure that the colors are meaningful or differentiated enough to your users to help recall and recognition.](/img/components/tag-dont-3.png "Don’t: Use too many colors for tags. If you need to use multiple colors, ensure that the colors are meaningful or differentiated enough to your users to help recall and recognition.")

:::
