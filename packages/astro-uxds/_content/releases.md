---
path: /releases
date: Last Modified
layout: interior.template.njk
title: "Releases"
---

# Releases

Astro represents a collection of artifacts including, but not limited to, guidance, compliance, design assets/tools, coded components, third-party themes, and related samples. The major version of Astro as indicated in the website footer and below is the version that should be included in contracts. The associated asset versions should not be referenced in contract language.

## Current Version

<table class="release-table release-table--current-version">
<thead>
<tr>
<th colspan="3">Astro {{ meta.version }} - Updated <time>July 21, 2022</time></th>
</tr>
</thead>
<tbody>
<tr>
<td>Design Language</td>
<td class="tabular"><b>{{ meta.version }}</b></td>
<td>No changes this release</td>
</tr>
<tr>
<td>Figma Dark Theme Library</td>
<td class="tabular">6.1.6</td>
<td>No changes this release</td>
</tr>
<tr>
<td>Figma Wireframe Theme Library</td>
<td class="tabular">6.0.1</b></td>
<td>No changes this release</td>
</tr>
<tr>
<td>Web Components</td>
<td class="tabular">6.10.0 -&gt; <b>6.11.0</b></td>
<td><a href="https://github.com/RocketCommunicationsInc/astro/releases/tag/v6.11.0">Release Notes</a></td>
</tr>
<tr>
<td>EGS Design Compliance</td>
<td class="tabular"><b>3.1.0</b></td>
<td>No changes this release</td>
</tr>
</tbody>
</table>

## Previous Major Versions

<table class="release-table releast-table--previous-versions">
<thead>
<tr>
<th class="release-table__version">Version</th>
<th>Status</th>
<th>Released</th>
<th>End of Support</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.0</td>
<td>Unsupported</td>
<td>Sep 1, 2015</td>
<td>Dec 15, 2016</td>
</tr>
<tr>
<td>2.0</td>
<td>Unsupported</td>
<td>Dec 15, 2016</td>
<td>April 16, 2018</td>
</tr>
<tr>
<td>3.0</td>
<td>Unsupported</td>
<td>Apr 16, 2018</td>
<td>Apr 8, 2019</td>
</tr>
<tr>
<td>4.0</td>
<td>Unsupported</td>
<td>Apr 8, 2019</td>
<td>Jan 27, 2021</td>
</tr>
<tr>
<td><a href="https://github.com/RocketCommunicationsInc/astro-uxds/tree/v5.0">5.0</a></td>
<td>Deprecated</td>
<td>Jan 27, 2021</td>
<td>Jul 7, 2022</td>
</tr>
<tr>
<td><a href="https://github.com/RocketCommunicationsInc/astro/tree/v6.0.0">6.0</a></td>
<td>Supported</td>
<td>Oct 27, 2021</td>
<td>Jan 12, 2023</td>
</tr>
<tr>
<td>7.0</td>
<td>Scheduled</td>
<td>Q3 2022</td>
<td>TBD</td>
</tr>
</tbody>
</table>

## Release Schedule

During 2022, Astro will publish minor and patch updates on a bi-weekly basis on Thursday and major updates on a bi-annual cadence. Astro patch/minor releases may include updates to design assets, compliance, components, design tokens and documentation.

### Semantic Versioning

Astro uses Semantic Versioning or [SemVer](https://semver.org/), a widely adopted method of conveying meaning about the change. SemVer is expressed as three numbers delimited by a decimal point (1.4.3). While SemVer has quite a lot of nuance, for Astro we are adopting the basic patch, minor, and major nomenclature.

::: note
Unlike standard decimals, each numeral is separated by a full-stop, increments numerically, and resets the numbers to the right. E.g., making a minor change to version 1.9.3 would result in a new version number of 1.10.0. There is no limit to how high each number can go, but practically speaking anything beyond 999 becomes unwieldy.
:::
