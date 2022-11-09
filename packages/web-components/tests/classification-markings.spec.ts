import { test, expect } from './utils/_astro-fixtures'

test.describe('Classification Marking', () => {
    test('has no visual regression @vrt', async ({astroVRTPage, page}) => {
        await astroVRTPage.goto('components/rux-classification-marking/test/basic')
        await expect(page).toHaveScreenshot()
    })

    test.describe('Tags', () => {
        test('displays correct label for Unclassified', async ({ astroPage }) => {
            const template = `
                <rux-classification-marking 
                    tag 
                    classification="unclassified"
                ></rux-classification-marking>
            `

            const el = await astroPage.load(template)

            await expect(el).toHaveText('u')
        })

        test('displays the correct label for Controlled', async ({ astroPage }) => {
            const template = `<rux-classification-marking tag classification="controlled"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('cui')
        })

        test('displays the correct label for CUI', async ({ astroPage }) => {
            const template = `<rux-classification-marking tag classification="cui"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('cui')
        })

        test('displays the correct label for Confidential', async ({ astroPage }) => {
            const template = `<rux-classification-marking tag classification="confidential"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('c')
        })

        test('displays the correct label for Secret', async ({ astroPage }) => {
            const template = `<rux-classification-marking tag classification="secret"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('s')
        })

        test('displays the correct label for Top Secret', async ({ astroPage }) => {
            const template = `<rux-classification-marking tag classification="top-secret"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('ts')
        })

        test('displays the correct label for Top Secret//SCI', async ({ astroPage }) => {
            const template = `<rux-classification-marking tag classification="top-secret-sci"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('TS//SCI')
        })
    })

    test.describe('Banners', () => {
        test('it renders', async ({ astroPage }) => {
            const template = `<rux-classification-marking></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toBeVisible()
            await expect(el).toHaveClass('hydrated')
        })

        test('it sets a custom label', async ({ astroPage }) => {
            const template = `<rux-classification-marking classification="secret" label="Label"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('secretLabel')
        })

        test('displays the correct label for Unclassified', async ({ astroPage }) => {
            const template = `<rux-classification-marking classification="unclassified"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('unclassified')
        })

        test('displays the correct label for Controlled', async ({ astroPage }) => {
            const template = `<rux-classification-marking classification="controlled"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('controlled')
        })

        test('displays the correct label for CUI', async ({ astroPage }) => {
            const template = `<rux-classification-marking classification="cui"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('cui')
        })

        test('displays the correct label for Confidential', async ({ astroPage }) => {
            const template = `<rux-classification-marking classification="confidential"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('confidential')
        })

        test('displays the correct label for Secret', async ({ astroPage }) => {
            const template = `<rux-classification-marking classification="secret"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('secret')
        })

        test('displays the correct label for Top Secret', async ({ astroPage }) => {
            const template = `<rux-classification-marking classification="top-secret"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('top secret')
        })

        test('displays the correct label for Top SecretSCI', async ({ astroPage }) => {
            const template = `<rux-classification-marking classification="top-secret-sci"></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('top secret//sci')
        })

        test('it defaults to unclassified if no classification is provided', async ({ astroPage }) => {
            const template = `<rux-classification-marking></rux-classification-marking>`

            const el = await astroPage.load(template)
            await expect(el).toHaveText('unclassified')
        })

        // @TODO - Implement ASTRO-4783
        // test('it defaults to unclassified if an invalid classification is provided', async ({ astroPage }) => {
        //     const template = `<rux-classification-marking classification="farts"></rux-classification-marking>`

        //     const el = await astroPage.load(template)
        //     await expect(el).toHaveText('unclassified')
        // })
    })

    // @TODO - Implement in VRT
    // test('it renders footer banner')

    // @TODO - Implement in VRT
    // test('it renders tags')
})
