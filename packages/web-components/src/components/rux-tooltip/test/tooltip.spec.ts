import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Tooltip', async () => {
    test('it emits ruxtooltipopened event', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })
        document.addEventListener('ruxtooltipclosed', () => {
            console.log('closed');
        })`,
        })

        //arrange
        const trigger = page.locator('#trigger')

        //act
        await trigger.hover()

        //assert
        page.on('console', (msg) => {
            expect(msg.text()).toBe('opened')
        })
    })
    test('it emits ruxtooltipclosed event', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>`
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })
        document.addEventListener('ruxtooltipclosed', () => {
            console.log('closed');
        })`,
        })

        //arrange
        const trigger = page.locator('#trigger')

        //act
        await trigger.hover()
        await page.mouse.move(0, 100)

        //assert
        page.on('console', (msg) => {
            expect(msg.text()).toBe('closed')
        })
    })
    test('it opens on hover in', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })`,
        })

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        //act
        await trigger.hover()

        //assert
        page.on('console', (msg) => {
            expect(msg.text()).toBe('opened')
            expect(ruxtooltip).toHaveAttribute('open', '')
            expect(tooltipContainer).not.toHaveClass('hidden')
        })
    })
    test('it closes on hover out', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })`,
        })

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        //act
        await trigger.hover()
        await page.mouse.move(0, 100)

        //assert
        page.on('console', (msg) => {
            expect(msg.text()).toBe('closed')
            expect(ruxtooltip).not.toHaveAttribute('open', '')
            expect(tooltipContainer).toHaveClass('hidden')
        })
    })
    test('it opens on focus in', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        //assert
        await expect(tooltipContainer).toHaveClass('tooltip hidden')

        //act
        await trigger.focus()

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')
        await expect(tooltipContainer).not.toHaveClass('hidden')
    })
    test('close on focus out', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        //act
        await trigger.focus()

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')
        await expect(tooltipContainer).not.toHaveClass('hidden')
        //trigger.blur() <--this was added last month to playwright

        //act
        await trigger.evaluate((e) => e.blur())

        //assert
        await expect(ruxtooltip).not.toHaveAttribute('open', '')
        await expect(tooltipContainer).toHaveClass('tooltip hidden')
    })
    test('it shows the tooltip if open by default', async ({ page }) => {
        const template = `
              <rux-tooltip open message="This is the tooltip">
                <rux-button id="trigger">Trigger</rux-button>
              </rux-tooltip>`
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')
        const tooltipMessage = ruxTooltip.locator('.tooltip')

        //Assert
        await expect(ruxTooltip).toHaveAttribute('open', '')
        await expect(ruxTooltip).not.toHaveClass('hidden')
        await expect(tooltipMessage).toBeVisible()
    })
    test('it has a set delay on showing tooltip of 2000ms', async ({
        page,
    }) => {
        const template = `
              <rux-tooltip message="This is the tooltip" delay="2000">
                <rux-button id="trigger">Trigger</rux-button>
              </rux-tooltip>
              `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })
        document.addEventListener('ruxtooltipclosed', () => {
            console.log('closed');
        })`,
        })

        //arrange
        const trigger = page.locator('#trigger')
        const ruxTooltip = page.locator('rux-tooltip')

        //act
        await trigger.hover()

        //assert
        await expect(ruxTooltip).toHaveAttribute('delay', '2000')
        await expect(ruxTooltip).toHaveAttribute(
            'style',
            '--tooltip-delay:2000ms;'
        )
    })
    test('it has a placement attribute', async ({ page }) => {
        const template = `
              <rux-tooltip message="This is the tooltip" placement="top">
                <rux-button id="trigger">Trigger</rux-button>
              </rux-tooltip>
              `
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')

        //assert
        await expect(ruxTooltip).toHaveAttribute('placement', 'top')
    })
})