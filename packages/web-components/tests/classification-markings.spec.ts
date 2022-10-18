import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Classification marking banners', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `<rux-classification-marking></rux-classification-marking>`
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it sets attributes with label', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="secret" label="Label"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'secret')
        await expect(el).toHaveAttribute('label', 'Label')
    })
    test('it sets attributes with label and tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true"" classification="secret" label="Label"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'secret')
        await expect(el).toHaveAttribute('label', 'Label')
    })
    test('it renders unclassified banner', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="unclassified"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'unclassified')
    })
    test('it renders controlled banner', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="controlled"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'controlled')
    })
    test('it renders cui banner', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="cui"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'cui')
    })
    test('it renders confidential banner', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="confidential"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'confidential')
    })
    test('it renders secret banner', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="secret"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'secret')
    })
    test('it renders top secret banner', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="top-secret"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'top-secret')
    })
    test('it renders top secret sci banner', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="top-secret-sci"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'top-secret-sci')
    })
    test('it renders incorrect option banner', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="notapprovedoption"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'notapprovedoption')
    })
    test('it renders unclassified banner tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true" classification="unclassified"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'unclassified')
    })
    test('it renders controlled banner tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true" classification="controlled"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'controlled')
    })
    test('it renders cui banner tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true" classification="cui"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'cui')
    })
    test('it renders confidential banner tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true" classification="confidential"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'confidential')
    })
    test('it renders secret banner tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true" classification="secret"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'secret')
    })
    test('it renders top secret banner tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true" classification="top-secret"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'top-secret')
    })
    test('it renders top secret sci banner tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true" classification="top-secret-sci"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'top-secret-sci')
    })
    test('it renders incorrect option banner tag', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking tag="true" classification="notapprovedoption"></rux-classification-marking>
    `
        )

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'notapprovedoption')
    })
    //? This is a nice to have test - but the current functionlaity just renders a green bar with no label.
    // test('it renders the correct default of unclassified if incorrect classification is provided', async ({
    //     page,
    // }) => {
    //             await setBodyContent(
    // page, `
    //     <rux-classification-marking classification="not real"></rux-classification-marking>
    // `)

    //     const el = page.locator('rux-classification-marking')
    //     await expect(el).toHaveAttribute('classification', 'unclassified')
    // })
    test('it renders a footer banner when supplied', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-classification-marking classification="secret">
            <h1>Test title for footer banner</h1>
        </rux-classification-marking>
        `
        )

        const topBanner = page.locator('.rux-classification--banner').first()
        const footerBanner = page.locator('.rux-classification--banner__footer')
        await topBanner.evaluate((e) => console.log(e, 'here'))
        expect(topBanner).toBeDefined()
        expect(footerBanner).toBeDefined()
        await expect(topBanner).toBeVisible()
        await expect(footerBanner).toBeVisible()
    })
})
