# Classification Markings

Classification and control markings are required for digital products created for government clients who interact with classified or controlled information.

For the most up-to-date policies, see the [ISOO Training Aids](https://www.archives.gov/isoo/training/training-aids) for classification marking policies and the [CUI Registry](https://www.archives.gov/cui) for control marking policies. In addition to these requirements, each government agency may have their own rules to use for classification and control markings.

## Guidelines

-   [Astro UXDS: Classification Markings](https://www.astrouxds.com/components/readme/)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Classification Markings package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-classification-marking
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Classification Markings Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxClassification } from '@astrouxds/rux-classification-marking/rux-classification-marking.js'
```

### 3. Render the Classification Markings Component

#### Marking Classification Declaration

By default classification property is set to "unclassified".

```javascript
<rux-classification-marking classification="unclassified"></rux-classification-marking>
```

Recognized classification property options are

-   "top-secret-sci"
-   "top-secret"
-   "secret"
-   "classified"
-   "controlled"
-   "unclassified"

Use of a classification property that is not one the recognized options results in a component with the display text set as:

```javascript
<rux-classification-marking classification="unclassified" [tag]>Select a Classification Marking</rux-classification-marking>
```

#### Marking Type Declaration

By default classification markings rendered in banner format. Applying the `tag` property attribute sets the marking type. The `tag` attribute property defines the classification marking as a tag.

##### Banner Marking Type

```javascript
<rux-classification-marking classification="controlled"></rux-classification-marking>
```

##### Tag Marking Type

```javascript
<rux-classification-marking
    classification="controlled"
    tag
></rux-classification-marking>
```

#### Custom Marking Labels

Applying the `label` property attribute to the classification custom element adds `label` text value to the marking in addition to its classification text.

```javascript
<rux-classification-marking
    classification="controlled"
    label="//custom/label"
></rux-classification-marking>
```

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                          | Type                                                                                                        | Default          |
| ---------------- | ---------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| `classification` | `classification` | Defines which classification marking will be displayed.              | `"confidential" \| "controlled" \| "cui" \| "secret" \| "top-secret" \| "top-secret-sci" \| "unclassified"` | `'unclassified'` |
| `label`          | `label`          | Allows additional text labels to be added to the marking             | `string \| undefined`                                                                                       | `undefined`      |
| `tag`            | `tag`            | Declares the marking as a `tag` rather than the default banner style | `boolean`                                                                                                   | `false`          |


## Shadow Parts

| Part              | Description                                         |
| ----------------- | --------------------------------------------------- |
| `"footer"`        | the footer banner                                   |
| `"footer-banner"` | the footer banner ! DEPRECATED IN FAVOR OF FOOTER ! |
| `"header"`        | the container for the header banner                 |
| `"tag"`           | the container for the tag                           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
