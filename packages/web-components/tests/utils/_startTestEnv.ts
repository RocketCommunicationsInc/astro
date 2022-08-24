import { test } from '@playwright/test'

/**
 * Abstract the beforeEach call so that we don't have to write it for each test.
 */
export function startTestEnv() {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3333')
        page.addStyleTag({
            path: './dist/astro-web-components/astro-web-components.css',
        })
    })
}

/**
 * goto and addStyleTag methods to be used WITHIN a beforeEach call. Helpful when multiple tests are using the same content.
 * @param page - the page var from playwright
 */
export async function startTestInBefore(page: any) {
    await page.goto('http://localhost:3333')
    page.addStyleTag({
        path: './dist/astro-web-components/astro-web-components.css',
    })
}

export { expect } from '@playwright/test'
