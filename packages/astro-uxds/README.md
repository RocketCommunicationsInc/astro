# Astro User Experience Design System Website (AstroUXDS.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/18f5e422-96af-4a6d-ace6-b37f61f89166/deploy-status)](https://app.netlify.com/sites/uxds/deploys)

[Astro](https://www.astrouxds.com) is a collection of guidelines, patterns and components for designing space-based user interface applications.

## Local Use

AstroUXDS.com can be run locally for use in secure locations or for development purposes. You will need [NodeJS](https://nodejs.org/en/) to run AstroUXDS.com locally and [Git](https://help.github.com/articles/set-up-git/) if you plan on contributing to AstroUXDS.com.

The live Astro site is available at https://www.astrouxds.com

### Clone the AstroUXDS.com Repository

Clone the AstroUXDS.com repository to your local working environment. Note the following instructions assume Command Line Interface, if you use a Git client such as GitHub Desktop or BeanStalk follow their procedures for cloning.

```
git clone git@github.com:RocketCommunicationsInc/astro.git
cd astro
```

### Install Dependencies

AstroUXDS.com uses a static site builder to generate the published site and requires installation via NPM.

```
npm install
```

### Preview Astro

Build and preview AstroUXDS.com on a local server. By default AstroUXDS.com will be create a server running on port 8080 and can be accessed via http://localhost:8080 check your build process to confirm the server location.

```
npm run start
```

### Build Astro

Build a local copy of Astro without starting a server.

```
npm run build
```
