# Astro Use Experience Design System

[![Netlify Status](https://api.netlify.com/api/v1/badges/18f5e422-96af-4a6d-ace6-b37f61f89166/deploy-status)](https://app.netlify.com/sites/uxds/deploys)

[Astro](https://www.astrouxds.com) is a collection of guidelines, patterns and components for designing space-based user interface applications.

## Local Use

Astro can be run locally for use in secure locations or for development purposes. You will need [NodeJS](https://nodejs.org/en/) to run Astro locally and [Git](https://help.github.com/articles/set-up-git/) if you plan on contributing to Astro.

The live Astro site is available at https://www.astrouxds.com

A draft version of the next version is availablte at https://draft.astrouxds.com (Note: authorized user access only)

A developer version of the next version is availablte at https://dev.astrouxds.com (Note: authorized user access only)

### Clone the Astro Repository

Clone the Astro repository to your local working environment. Note the following instructions assume Command Line Interface, if you use a Git client such as GitHub Desktop or BeanStalk follow their procedures for cloning.

```
git clone git@github.com:RocketCommunicationsInc/astro-uxds.git
cd astro-uxds
```

### Install Dependencies

Astro uses a static site builder to generate the published site and requires installation via NPM.

```
npm install
```

### Preview Astro

Build and preview Astro on a local server. By default Astro will be create a server running on port 8080 and can be accessed via http://localhost:8080 check your build process to confirm the server location.

```
npm run start
```

### Build Astro

Build a local copy of Astro without starting a server.

```
npm run build
```
