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
    test('it properly reselects a pre-selected segment', async ({ page }) => {
        const template = `
        <div style="padding: 2.5% 5%">
            <rux-segmented-button></rux-segmented-button>
            <button id="button1">Hi!</button><button id="button2">bye</button>
        </div>
        `
        await page.setContent(template)
        await page.addScriptTag({
            //first is selected by default
            content: `
            const segmented = document.querySelector('rux-segmented-button')
            const data = [
                { label: 'First segment' },
                { label: 'Second segment' },
                { label: 'Third segment' },
            ]
            segmented.data = data

            const button1 = document.querySelector('#button1')
            const button2 = document.querySelector('#button2')

            button1.addEventListener('click', (e) => {
                segmented.selected = 'First segment'
            })
            button2.addEventListener('click', (e) => {
                segmented.selected = 'Second segment'
            })
        `,
        })
        const segmentedButton = page.locator('rux-segmented-button')
        const segButton1Segment = segmentedButton.locator('li').nth(0)
        const segButton2Segment = segmentedButton.locator('li').nth(1)
        const segButton1Input = segButton1Segment.locator('input')
        const segButton2Input = segButton2Segment.locator('input')
        const button1 = page.locator('#button1')
        const button2 = page.locator('#button2')
        //click second button
        await button2.click()
        //make sure it changed
        const secondChecked = await segButton2Input.evaluate(
            (e) => (e as HTMLInputElement).checked === true
        )
        expect(secondChecked).toBe(true)

        //then programatically go back to first
        await button1.click()
        //and make sure it gets checked
        const firstChecked = await segButton1Input.evaluate(
            (e) => (e as HTMLInputElement).checked === true
        )
        expect(firstChecked).toBe(true)
    })
})
/*
    Need to test: 
    -has props data, size, disabled
    - change event
*/
