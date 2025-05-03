import { newSpecPage } from '@stencil/core/testing'
import { RuxTleInput } from '../rux-tle-input'

describe('rux-tle-input', () => {
    // Sample valid TLE
    const validTLE =
        '1 25544U 98067A   23212.48826229  .00015266  00000-0  28485-3 0  9990\n2 25544  51.6462  39.4487 0001320  84.1403  23.1898 15.49760304407907'

    // Example Alpha-5 format TLE
    const alpha5TLE =
        '1 A0001U 22001A   23220.12345678  .00000000  00000-0  10000-4 0  9990\n2 A0001  51.6400  30.0000 0000000   0.0000 360.0000 15.50000000    10'

    it('builds', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input></rux-tle-input>`,
        })
        expect(page.root).toBeTruthy()
    })

    it('renders with a label', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input label="Satellite TLE"></rux-tle-input>`,
        })
        const label = page.root?.shadowRoot?.querySelector('label')
        expect(label?.textContent).toContain('Satellite TLE')
    })

    it('should set the id attribute on the textarea and on the label', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input label="Satellite TLE"></rux-tle-input>`,
        })
        const textarea = page.root?.shadowRoot?.querySelector('textarea')
        const label = page.root?.shadowRoot?.querySelector('label')

        const textareaId = textarea?.id
        expect(textareaId).toBeTruthy()
        expect(label?.getAttribute('for')).toBe(textareaId)
    })

    it('renders with a value', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input value="${validTLE}"></rux-tle-input>`,
        })
        const textarea = page.root?.shadowRoot?.querySelector('textarea')
        expect(textarea?.value).toBe(validTLE)
    })

    it('validates a valid TLE', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input></rux-tle-input>`,
        })

        // Directly call the component method
        const component = page.rootInstance as RuxTleInput
        component.value = validTLE

        // Force rerender
        await page.waitForChanges()

        // Use the exposed method to validate
        const isValid = await component.validateTle()
        expect(isValid).toBe(true)

        // Check that the validation state is also updated internally
        // @ts-ignore - accessing private state
        expect(component.isValid).toBe(true)
    })

    it('validates an Alpha-5 format TLE', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input></rux-tle-input>`,
        })

        // Directly call the component method
        const component = page.rootInstance as RuxTleInput
        component.value = alpha5TLE

        // Force rerender
        await page.waitForChanges()

        // Use the exposed method to validate
        const validationResult = await component.validateTle()
        expect(validationResult.valid).toBe(true)

        // Check that the validation state is also updated internally
        // @ts-ignore - accessing private state
        expect(component.isValid).toBe(true)
    })

    it('extracts satellite info from Alpha-5 format TLE', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input label="Extended Catalog TLE" value="${alpha5TLE}"></rux-tle-input>`,
        })

        // Allow time for extraction to occur
        await page.waitForChanges()

        const label = page.root?.shadowRoot?.querySelector('label span slot')
        expect(label?.textContent).toContain('Extended Catalog TLE')
        expect(label?.textContent).toContain('Satellite #A0001')
    })

    it('invalidates incorrect TLE formats', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input></rux-tle-input>`,
        })

        // Directly call the component method
        const component = page.rootInstance as RuxTleInput
        component.value = 'This is not a valid TLE format'

        // Force rerender
        await page.waitForChanges()

        // Use the exposed method to validate
        const isValid = await component.validateTle()
        expect(isValid).toBe(false)

        // Check that the validation state is also updated internally
        // @ts-ignore - accessing private state
        expect(component.isValid).toBe(false)
    })

    it('extracts satellite info from valid TLE', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input label="ISS TLE" value="${validTLE}"></rux-tle-input>`,
        })

        // Allow time for extraction to occur
        await page.waitForChanges()

        const label = page.root?.shadowRoot?.querySelector('label span slot')
        expect(label?.textContent).toContain('ISS TLE')
        expect(label?.textContent).toContain('Satellite #25544')
    })

    it('selects all text on focus', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input value="${validTLE}"></rux-tle-input>`,
        })

        const component = page.rootInstance as RuxTleInput

        // Mock the select function on the textarea element
        const mockSelect = jest.fn()
        // @ts-ignore - setting up mock
        component.textareaEl = { select: mockSelect }

        // Simulate focus event
        // @ts-ignore - accessing private method
        component._onFocus()

        // Check if select was called
        expect(mockSelect).toHaveBeenCalled()
    })

    it('should emit ruxchange event on change', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input></rux-tle-input>`,
        })

        const textarea = page.root?.shadowRoot?.querySelector('textarea')
        const ruxChangeSpy = jest.fn()

        page.root?.addEventListener('ruxchange', ruxChangeSpy)

        // Simulate typing in the textarea
        textarea?.dispatchEvent(new Event('change'))

        expect(ruxChangeSpy).toHaveBeenCalled()
    })

    it('should be disabled with the disabled attribute', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input disabled></rux-tle-input>`,
        })

        const textarea = page.root?.shadowRoot?.querySelector('textarea')
        expect(textarea?.hasAttribute('disabled')).toBe(true)
    })

    it('should be readonly with the readonly attribute', async () => {
        const page = await newSpecPage({
            components: [RuxTleInput],
            html: `<rux-tle-input readonly></rux-tle-input>`,
        })

        const textarea = page.root?.shadowRoot?.querySelector('textarea')
        expect(textarea?.hasAttribute('readonly')).toBe(true)
    })
})
