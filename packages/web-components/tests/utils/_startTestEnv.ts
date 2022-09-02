import { Page, test } from '@playwright/test'

/**
 * Abstract the beforeEach call so that we don't have to write it for each test.
 */
export function startTestEnv() {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3333')
        await page.addStyleTag({
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

/**
 * A replacement for page.setContent that maintains the <head> tag.
 * @param page The Playwright Page
 * @param content The HTML content as a string to set on the page
 */
export async function setBodyContent(page: Page, content: string) {
    await page.evaluate(
        ([content]) => {
            document.body.innerHTML = content
        },
        [content]
    )
}
