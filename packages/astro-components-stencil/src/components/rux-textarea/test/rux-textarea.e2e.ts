import { newE2EPage } from '@stencil/core/testing'

describe('rux-textarea', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-textarea></rux-textarea>')

        const element = await page.find('rux-textarea')
        expect(element).toHaveClass('hydrated')
    })

    it('should emit input event and sync value', async () => {
        const page = await newE2EPage({
            html: `
        <rux-textarea></rux-textarea>
      `,
        })
        const input = await page.find('rux-textarea')
        const ruxInput = await page.find('rux-textarea >>> .rux-textarea')

        const inputEvent = await input.spyOnEvent('rux-input')

        await ruxInput.press('A')

        expect(inputEvent).toHaveReceivedEventTimes(1)
        expect(await input.getProperty('value')).toBe('A')
    })
})
