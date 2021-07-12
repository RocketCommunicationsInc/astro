import { newE2EPage } from '@stencil/core/testing'

describe('rux-switch', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-switch></rux-switch>')

        const element = await page.find('rux-switch')
        expect(element).toHaveClass('hydrated')
    })

    it('fires event on click', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-switch></rux-switch>')
        const ruxChange = await page.spyOnEvent('rux-change')
        const ruxSwitch = await page.find('rux-switch')

        await ruxSwitch.click()
        await page.waitForChanges()
        expect(ruxChange).toHaveReceivedEventDetail({ checked: true })

        await ruxSwitch.click()
        await page.waitForChanges()
        expect(ruxChange).toHaveReceivedEventDetail({ checked: false })
    })
})
