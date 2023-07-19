# Clock

Clock shows the current date and time, and optional AOS and LOS timers. It will typically be positioned on the Global Status Bar.

## Guidelines

-   [Astro UXDS: Clock](https://www.astrouxds.com/ui-components/clock)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Clock package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-clock
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Clock Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxClock } from '@astrouxds/rux-clock/rux-clock.js'
```

### 3. Render the Astro Clock Web Component

Apply properties as attributes of the Astro Clock custom element:

```xml
<rux-clock timezone="Pacific/Guam" hideTimezone hideDate small></rux-clock>
```

Define AOS and LOS with valid [Unix Time Stamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) or [ISO 8601 Datetime String](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) and apply via `aos` and `los` attributes on the component:

```xml
<rux-clock aos="1557503698781" los="2019-05-10T16:21:12.000Z" small></rux-clock>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                  | Default     |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `aos`          | `aos`           | When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock.                                                                                                                                                                                                                                                                                                                               | `string \| undefined` | `undefined` |
| `dateIn`       | `date-in`       | When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), sets the time and date of the clock.                                                                                                                                                                                                                                                                                                                                                        | `string \| undefined` | `undefined` |
| `hideDate`     | `hide-date`     | Hides the day of the year.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `boolean`             | `false`     |
| `hideLabels`   | `hide-labels`   | Hides all of the labels.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `boolean`             | `false`     |
| `hideTimezone` | `hide-timezone` | Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `boolean`             | `false`     |
| `los`          | `los`           | When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled "LOS" next to the standard clock.                                                                                                                                                                                                                                                                                                                              | `string \| undefined` | `undefined` |
| `small`        | `small`         | Applies a smaller clock style.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `boolean`             | `false`     |
| `static`       | `static`        | Prevents clock from ticking. Use with `date-in` for full control over the displayed time                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `boolean`             | `false`     |
| `timezone`     | `timezone`      | Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details. | `string`              | `'UTC'`     |


## Shadow Parts

| Part           | Description                                 |
| -------------- | ------------------------------------------- |
| `"aos"`        | the container for the aos section of clock  |
| `"aos-label"`  | the container for the aos label             |
| `"container"`  | the container for the clock                 |
| `"date"`       | the container for the date section of clock |
| `"date-label"` | the container for the date label            |
| `"los"`        | the container for the los section of clock  |
| `"los-label"`  | the container for the los label             |
| `"time"`       | the container for the time section of clock |
| `"time-label"` | the container for the time label            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
