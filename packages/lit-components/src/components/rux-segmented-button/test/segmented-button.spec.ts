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
        `,
        })
        const segmentedButton = page.locator('rux-segmented-button')
        const segButton1Segment = segmentedButton.locator('li').nth(0)
        const segButton2Segment = segmentedButton.locator('li').nth(1)
        const segButton1Input = segButton1Segment.locator('input')
        const segButton2Input = segButton2Segment.locator('input')

        // Imperatively set second segment as selected
        await segmentedButton.evaluate((e) => {
            ;(e as HTMLRuxSegmentedButtonElement).selected = 'Second segment'
        })
        await page.waitForChanges()

        //make sure it changed
        const secondChecked = await segButton2Input.evaluate(
            (e) => (e as HTMLInputElement).checked === true
        )
        await page.waitForChanges()
        expect(secondChecked).toBe(true)

        // Imperatively set first segment as selected
        await segmentedButton.evaluate((e) => {
            ;(e as HTMLRuxSegmentedButtonElement).selected = 'First segment'
        })
        await page.waitForChanges()
        //and make sure it gets checked
        const firstChecked = await segButton1Input.evaluate(
            (e) => (e as HTMLInputElement).checked === true
        )
        expect(firstChecked).toBe(true)
    })
    test('adjacent segmented buttons can be tabbed between', async ({
        page,
    }) => {
        const template = `
      <div style="padding: 2.5% 5%">
      <button></button>
          <rux-segmented-button id="one"></rux-segmented-button>
          <rux-segmented-button id="two"></rux-segmented-button>
      </div>
      `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
          const segmented1 = document.querySelector('#one')
          const segmented2 = document.querySelector('#two')
          const data = [
              { label: 'First segment' },
              { label: 'Second segment' },
              { label: 'Third segment' },
          ]
          segmented1.data = data
          segmented2.data = data

      `,
        })
        const button = await page.locator('button')
        const el1 = await page.locator('#one')
        const el2 = await page.locator('#two')
        await button.focus()
        await page.keyboard.press('Tab')
        await expect(el1.locator('li').first()).toHaveClass(
            'rux-segmented-button__segment --focused'
        )
        await page.keyboard.press('Tab')
        await expect(el2.locator('li').first()).toHaveClass(
            'rux-segmented-button__segment --focused'
        )
    })
})
/*
    Need to test:
    -has props data, size, disabled
    - change event
*/
