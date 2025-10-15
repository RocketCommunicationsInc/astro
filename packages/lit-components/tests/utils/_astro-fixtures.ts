import { test as base, type Page } from '@playwright/test';

export type TestOptions = {
    theme: 'dark' | 'light';
    component: string
    testName: string
    astroVRTPage: Page
  };

export const test = base.extend<TestOptions>({
    theme: ['dark', { option: true }],
    component: ['rux-foo', { option: true }],
    testName: ['basic', { option: true}],
    astroVRTPage: async ({ theme, component, testName, page }, use) => {
        await page.goto(`/src/components/${component}/test/${testName}/index.html`)
        // Set up the fixture.
        if (theme === 'light') {
                await page.evaluate(() => {
                    document.body.classList.add('light-theme')
                })
        }
        await use(page)
    },
})
export { expect } from '@playwright/test'
