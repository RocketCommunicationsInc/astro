import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Segmented-button', () => {
    test('it selects first item by default', async ({ page }) => {
        const template = `
        <div style="padding: 2.5% 5%">
            <rux-segmented-button></rux-segmented-button>
        </div>
        `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const segmented = document.querySelector('rux-segmented-button')
            const data = [
                { label: 'First segment' },
                { label: 'Second segment' },
                { label: 'Third segment' },
            ]
            segmented.data = data
            segmented.addEventListener('click', () => {
                console.log('heard click')
            })
            segmented.addEventListener('ruxchange', () => {
                console.log('heard change')
            })

        `,
        })
        const el = await page.locator('rux-segmented-button').first()
        await expect(el).toHaveAttribute('selected', 'First segment')
    })
    test('it selects item from data array', async ({ page }) => {
        const template = `
        <div style="padding: 2.5% 5%">
            <rux-segmented-button></rux-segmented-button>
        </div>
        `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const segmented = document.querySelector('rux-segmented-button')
            const data = [
                { label: 'First segment' },
                { label: 'Second segment', selected: true },
                { label: 'Third segment' },
            ]
            segmented.data = data
            segmented.addEventListener('click', () => {
                console.log('heard click')
            })
            segmented.addEventListener('ruxchange', () => {
                console.log('heard change')
            })

        `,
        })
        const el = await page.locator('rux-segmented-button').first()
        await expect(el).toHaveAttribute('selected', 'Second segment')
    })
    test('selects item from selected attribute', async ({ page }) => {
        const template = `
        <div style="padding: 2.5% 5%">
            <rux-segmented-button selected="First segment"></rux-segmented-button>
        </div>
        `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const segmented = document.querySelector('rux-segmented-button')
            const data = [
                { label: 'First segment' },
                { label: 'Second segment'},
                { label: 'Third segment' },
            ]
            segmented.data = data
            segmented.addEventListener('click', () => {
                console.log('heard click')
            })
            segmented.addEventListener('ruxchange', () => {
                console.log('heard change')
            })

        `,
        })
        const el = await page.locator('rux-segmented-button').first()
        await expect(el).toHaveAttribute('selected', 'First segment')
    })
    test('it emits ruxchange event', async ({ page }) => {
        const template = `
        <div style="padding: 2.5% 5%">
            <rux-segmented-button selected="First segment"></rux-segmented-button>
        </div>
        `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const segmented = document.querySelector('rux-segmented-button')
            const data = [
                { label: 'First segment' },
                { label: 'Second segment'},
                { label: 'Third segment' },
            ]
            segmented.data = data
        `,
        })
        const changeEvent = await page.spyOnEvent('ruxchange')
        const segButtonSegment = page
            .locator('rux-segmented-button')
            .locator('ul')
            .locator('li')
            .nth(1)
        await segButtonSegment.click()
        await expect(changeEvent).toHaveReceivedEventTimes(1)
        await expect(changeEvent).toHaveReceivedEventDetail('Second segment')
    })
})
/*
    Need to test: 
    -has props data, size, disabled
    - change event
*/
