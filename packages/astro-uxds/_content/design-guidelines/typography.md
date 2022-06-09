---
tags: resources
path: /design-guidelines/typography
date: Last Modified
layout: interior.template.njk
title: Typography
---

# Typography

Astro uses the open source typefaces [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto&sidebar.open=true&selection.family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700) and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?sidebar.open=true&selection.family=Roboto+Mono:wght@300;400;500;600;700) for elements requiring a monospaced typeface. As with all Astro elements, sizing is rendered in rem units. For those working with systems that don’t support [rem](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size), the corollary size is provided in points. Unless explicitly mentioned otherwise in a component, Astro recommends using sentence case capitalization throughout your applications.

## Headings

Astro supports three levels of headline text (h1, h2, h3). CSS properties are automatically applied to HTML elements.

<rux-table>
<rux-table-header>
	<rux-table-header-row>
		<rux-table-header-cell>
			Heading
		</rux-table-header-cell>
		<rux-table-header-cell>
			Weight
		</rux-table-header-cell>
		<rux-table-header-cell>
			Markup
		</rux-table-header-cell>
		<rux-table-header-cell>
					REM
		</rux-table-header-cell>
		<rux-table-header-cell>
			PX
		</rux-table-header-cell>
		<rux-table-header-cell>
			Class
		</rux-table-header-cell>
	</rux-table-header-row>
</rux-table-header>
<rux-table-body>
	<rux-table-row>
		<rux-table-cell>
			Heading Level 1
		</rux-table-cell>
		<rux-table-cell>
			Normal (400)
		</rux-table-cell>			
		<rux-table-cell>
			h1
		</rux-table-cell>
		<rux-table-cell>
			2.125rem
		</rux-table-cell>
		<rux-table-cell>
			34
		</rux-table-cell>			
		<rux-table-cell>
			.h1
		</rux-table-cell>
	</rux-table-row>
<rux-table-row>
		<rux-table-cell>
			Heading Level 2
		</rux-table-cell>
		<rux-table-cell>
			Normal (400)
		</rux-table-cell>			
		<rux-table-cell>
			h2
		</rux-table-cell>
		<rux-table-cell>
			1.5
		</rux-table-cell>
		<rux-table-cell>
			24
		</rux-table-cell>			
		<rux-table-cell>
			.h2
		</rux-table-cell>
	</rux-table-row>	
	<rux-table-row>
		<rux-table-cell>
			Heading Level 3
		</rux-table-cell>
		<rux-table-cell>
			Medium (500)
		</rux-table-cell>			
		<rux-table-cell>
			h3
		</rux-table-cell>
		<rux-table-cell>
			1.25
		</rux-table-cell>
		<rux-table-cell>
			20
		</rux-table-cell>			
		<rux-table-cell>
			.h3
		</rux-table-cell>
	</rux-table-row>
</rux-table-body>
</rux-table>

::: note
In addition to semantic headings, Astro supports overriding a header element's presentation via .h1, .h2 .h3 CSS classes which will apply the visual appearance of the corresponding header element.
:::

## Body Text

The default font size in Astro is 1rem/16px. Astro supports four additional font sizes for body copy.

| Size         | Weight       | REM   | PX  | Class |
| ------------ | ------------ | ----- | --- | ----- |
| Extra large  | Normal (400) | 1.125 | 18  | `.xl` |
| Normal/large | Normal (400) | 1     | 16  | --    |
| Medium       | Normal (400) | 0.875 | 14  | `.md` |
| Small        | Normal (400) | 0.75  | 12  | `.sm` |
| Extra small  | Normal (400) | 0.65  | 10  | `.xs` |

## Inline Text Styles

| Sample              | Class           |
| ------------------- | --------------- |
| Link Color          | --              |
| Low Contrast\*      | `.low-contrast` |
| Inverted Text Style | `.inverted`     |

\* The low contrast text option will fail WCAG readability compliance
