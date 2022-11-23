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
        const toggleBtn = page.locator('#trigger')
        await toggleBtn.hover()
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
        const trigger = page.locator('#trigger')
        await trigger.hover()
        await page.mouse.move(0, 100)

        page.on('console', (msg) => {
            expect(msg.text()).toBe('closed')
        })
    })
    /**
     * Need to test:
     *  - open and close on hover
     *  - open and close on focus
     *  - test for open by default
     *  - test for delay
     *  - test for specific delay
     *  - test that a different placement from default works
     */
    test('it opens on hover in', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })`,
        })
        await trigger.hover()
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
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })`,
        })
        await trigger.hover()
        await page.mouse.move(0, 100)
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
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        await expect(tooltipContainer).toHaveClass('tooltip hidden')

        await trigger.focus()
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
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        await trigger.focus()
        expect(ruxtooltip).toHaveAttribute('open', '')
        expect(tooltipContainer).not.toHaveClass('hidden')
        //trigger.blur() <--this was added last month to playwright
        await trigger.evaluate((e) => e.blur())
        expect(ruxtooltip).not.toHaveAttribute('open', '')
        expect(tooltipContainer).toHaveClass('hidden')
    })
    test('it shows the tooltip if open by default', async ({ page }) => {
        const template = `
              <rux-tooltip open message="This is the tooltip">
                <rux-button id="trigger">Trigger</rux-button>
              </rux-tooltip>`
        await page.setContent(template)

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
        const toggleBtn = page.locator('#trigger')
        const ruxTooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxTooltip.locator('.tooltip')
        page.addScriptTag({
            content: `
      document.addEventListener('ruxtooltipopened', () => {
          console.log('opened');
      })
      document.addEventListener('ruxtooltipclosed', () => {
          console.log('closed');
      })`,
        })
        await toggleBtn.hover()
        await Promise.all([page.waitForEvent('console', { timeout: 2000 })])
        page.on('console', (msg) => {
            expect(msg.text()).toBe('opened')
            expect(ruxTooltip).toHaveAttribute('open', '')
            expect(tooltipContainer).not.toHaveClass('hidden')
        })
    })
})
