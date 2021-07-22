import { newE2EPage } from '@stencil/core/testing'

describe('rux-input-field', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-input-field></rux-input-field>')

        const element = await page.find('rux-input-field')
        expect(element).toHaveClass('hydrated')
    })

    it('should emit input event and sync value', async () => {
        const page = await newE2EPage({
            html: `
          <rux-input-field></rux-input-field>
        `,
        })
        const input = await page.find('rux-input-field')
        const ruxInput = await page.find('rux-input-field >>> .rux-input')
        const inputEvent = await input.spyOnEvent('rux-input')

        await ruxInput.press('A')

        expect(inputEvent).toHaveReceivedEventTimes(1)
        expect(await input.getProperty('value')).toBe('A')
    })
})
