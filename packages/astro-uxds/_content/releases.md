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
<rux-table-row>
<th colspan="3">Astro {{ meta.version }} - Updated <time>May 26, 2022</time></rux-table-header>
</rux-table-row>
</thead>
<tbody>
<rux-table-row>
<rux-table-cell>Design Language</rux-table-cell>
<td class="tabular"><b>{{ meta.version }}</b></rux-table-cell>
<rux-table-cell>No changes this release</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell>Figma Dark Theme Library</rux-table-cell>
<td class="tabular">6.1.4 -&gt; <b>6.1.5</b></rux-table-cell>
<rux-table-cell>No changes this release</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell>Figma Wireframe Theme Library</rux-table-cell>
<td class="tabular">6.0.0</rux-table-cell>
<rux-table-cell>No changes this release</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell>Web Components</rux-table-cell>
<td class="tabular">6.7.0 -&gt; <b>6.8.0</b></rux-table-cell>
<rux-table-cell><a href="https://github.com/RocketCommunicationsInc/astro/releases/tag/v6.8.0">Release Notes</a></rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell>EGS Design Compliance</rux-table-cell>
<td class="tabular"><b>3.1.0</b></rux-table-cell>
<rux-table-cell>No changes this release</rux-table-cell>
</rux-table-row>
</tbody>
</rux-rux-table>

## Previous Major Versions

<table class="release-table releast-table--previous-versions">
<thead>
<rux-table-row>
<th class="release-table__version">Version</rux-table-header>
<rux-table-header>Status</rux-table-header>
<rux-table-header>Released</rux-table-header>
<rux-table-header>End of Support</rux-table-header>
</rux-table-row>
</thead>
<tbody>
<rux-table-row>
<rux-table-cell>1.0</rux-table-cell>
<rux-table-cell>Unsupported</rux-table-cell>
<rux-table-cell>Sep 1, 2015</rux-table-cell>
<rux-table-cell>Dec 15, 2016</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell>2.0</rux-table-cell>
<rux-table-cell>Unsupported</rux-table-cell>
<rux-table-cell>Dec 15, 2016</rux-table-cell>
<rux-table-cell>April 16, 2018</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell>3.0</rux-table-cell>
<rux-table-cell>Unsupported</rux-table-cell>
<rux-table-cell>Apr 16, 2018</rux-table-cell>
<rux-table-cell>Apr 8, 2019</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell>4.0</rux-table-cell>
<rux-table-cell>Unsupported</rux-table-cell>
<rux-table-cell>Apr 8, 2019</rux-table-cell>
<rux-table-cell>Jan 27, 2021</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell><a href="https://github.com/RocketCommunicationsInc/astro-uxds/tree/v5.0">5.0</a></rux-table-cell>
<rux-table-cell>Deprecated</rux-table-cell>
<rux-table-cell>Jan 27, 2021</rux-table-cell>
<rux-table-cell>Jul 7, 2022</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell><a href="https://github.com/RocketCommunicationsInc/astro/tree/v6.0.0">6.0</a></rux-table-cell>
<rux-table-cell>Supported</rux-table-cell>
<rux-table-cell>Oct 27, 2021</rux-table-cell>
<rux-table-cell>Jan 12, 2023</rux-table-cell>
</rux-table-row>
<rux-table-row>
<rux-table-cell>7.0</rux-table-cell>
<rux-table-cell>Scheduled</rux-table-cell>
<rux-table-cell>Q3 2022</rux-table-cell>
<rux-table-cell>TBD</rux-table-cell>
</rux-table-row>
</tbody>
</rux-rux-table>

## Release Schedule

During 2022, Astro will publish minor and patch updates on a bi-weekly basis on Thursday and major updates on a bi-annual cadence. Astro patch/minor releases may include updates to design assets, compliance, components, design tokens and documentation.

### Semantic Versioning

Astro uses Semantic Versioning or [SemVer](https://semver.org/), a widely adopted method of conveying meaning about the change. SemVer is expressed as three numbers delimited by a decimal point (1.4.3). While SemVer has quite a lot of nuance, for Astro we are adopting the basic patch, minor, and major nomenclature.

::: note
Unlike standard decimals, each numeral is separated by a full-stop, increments numerically, and resets the numbers to the right. E.g., making a minor change to version 1.9.3 would result in a new version number of 1.10.0. There is no limit to how high each number can go, but practically speaking anything beyond 999 becomes unwieldy.
:::
