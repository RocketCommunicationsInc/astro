---
path: /community/propose-a-change
date: Last Modified
layout: interior.template.njk
title: "Propose a Change"
---

# Propose a Change

The Astro User Experience Design System is hosted on [GitHub](https://github.com) as an open source project and uses [Markdown](https://guides.github.com/features/mastering-markdown/) for content. This enables any user of Astro to proposes changes in a safe, trackable and relatively easy manner.

You will need a free GitHub account to propose changes to Astro.

If you are new to Git and Git fork workflows the easiest way to edit Astro content is through GitHub’s online interface. If you are comfortable with Git and forking repositories skip to Step 5 below to see information about creating a pull request.

## Step 1 - Navigate to the page you want to edit
At the bottom of each page on [AstroUXDS.com](https://astrouxds.com) you will find a link titled **Propose a change or fix to this page**. Follw the link to propose your change on GitHub. If you are not an authorized Astro contributor you will be asked to create a fork of the repository, this is a safe operation. You cannot break Astro proposing a change.

## Step 2 - Fork the Astro repository

If you aren’t a member of the Astro team your proposed changes use Git’s fork process. This effectively creates an identical clone of Astro you can edit without affecting the published version.

![GitHub’s integrated Markdown editor](/img/community/step-1.png)

## Step 3 - Edit the page

Use Github’s integrated editor to make the changes you plan on submitting.

![GitHub’s integrated Markdown editor](/img/community/step-2.png)

## Step 4 - Propose change

When you have completed your changes scroll the browser window down to the **Propose file change** interface at the bottom of the page.

Create a brief desscription of the change you are proposing in the first field. This is required. Keep this description informative but succinct. If your change requires more than a brief length of text use the larger text field to elaborate on your change.

Click the **Propose file change** button

This is a commit message and will be forever included in the Astro changelog.

![GitHub’s integrated Markdown editor](/img/community/step-3.png)

## Step 4 - Confirm your changes and create a pull request

Take a moment after submitting your change to confirm there are no errors. GitHub will present the file you are changing, the previous version highlighted in red and your proposed change highlighted in green.

When you are satsified your change is ready for review click the **Create pull request**

The pull request screen will auto-populate the text field with your previous commit message(s). Feel free to leave these as your pull request or if you think your change needs additional clarification enter that now.

**NOTE**: Once you click **Create pull request** all your changes, commit messages and pull requests become public and part of the permanent Astro record

Once you are content with your changes click **Create pull request**

![GitHub’s integrated Markdown editor](/img/community/step-4.png)

## Step 6 - Approval process

The Astro team reviews pull requests weekly. Proposals may be

- Implemented immediately in a "minor" release version
- Scheduled for implementation in a future release if the scope of change requires sufficient effort
- Returned with requests for further clarification or guidance on changes necessary for acceptance
- Rejected if the proposal is not suitable for Astro at this time

