import { test, expect } from '@playwright/test';
import data from './data.json'


const baseUrl = "http://localhost:6006/";

let stories = Object.values(data.stories);
const storyBlacklist = [
    "components-progress--indeterminate-progress",
    "components-pop-up-menu--default-story", // Manually adding it bc its the only one with click selectors
    "utilities-date-time--default-story",
    "components-clock--other-variants",

    // testing
    "components-pop-up-menu--default-story",
    "components-button--with-slotted-icon",
    "components-classification-markings--with-footer-banner",
    "components-icons--default-story",
    "components-icons--all-icons",
    "components-indeterminate-progress",
    "components-log",
    "components-table--default",
    "components-table--with-selected-row",
    "components-table--default-story",
    "components-card--default",
    "components-card--with-header",
    "components-card--with-footer"
  ];

  stories = stories
    .filter((story) => !storyBlacklist.includes(story.id))
    .filter((story) => !story.title.includes("Astro UXDS"))
    .filter((story) => !story.title.includes("Themes"));


//@ts-ignore
for (const story of stories) {
	
  test(story.id, async ({page}) => {
	const url = `${baseUrl}iframe.html?id=${story.id}&viewMode=story`

	await page.goto(url);
	await expect(page).toHaveScreenshot();
  })
}

// test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.locator('text=Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveScreenshot();
// });