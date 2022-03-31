describe('Input Field with Form', () => {
    const testString = 'Hello World'

    beforeEach(() => {
        cy.visitComponent('rux-input')
        // makes sure form was clicked before submitting
        // submitting form directly via .submit() sometimes fails
        cy.get('#form').click()
    })

    it('renders', () => {
        cy.get('rux-input').should('have.class', 'hydrated')
    })

    it('submits the correct value when using a form', () => {
        cy.get('#ruxInput').shadow().find('input').type(testString)
        cy.get('#nativeInput').type(testString)

        cy.get('#formSubmitBtn').click()

        cy.get('#log').contains(`ruxInput:${testString}`)
        cy.get('#log').contains(`nativeInput:${testString}`)
    })

    it('does not submit disabled even with value', () => {
        cy.get('#ruxInput2')
            .shadow()
            .find('input')
            .should('have.value', testString)

        cy.get('#nativeInput2').should('have.value', testString)

        cy.get('#ruxInput2').should('have.attr', 'disabled')
        cy.get('#ruxInput2').shadow().find('input').should('be.disabled')
        cy.get('#nativeInput2').should('be.disabled')

        cy.get('#formSubmitBtn').click()

        cy.get('#log').should('not.contain', `ruxInput2:${testString}`)
        cy.get('#log').should('not.contain', `nativeInput2:${testString}`)
    })

    it('does not submit a value if input is cleared', () => {
        cy.get('#ruxInput')
            .shadow()
            .find('input')
            .type(testString)
            .should('have.value', testString)
        cy.get('#nativeInput').type(testString).should('have.value', testString)

        cy.get('#ruxInput').shadow().find('input').clear()
        cy.get('#nativeInput').clear()

        cy.get('#formSubmitBtn').click()
        cy.get('#log').should('not.contain', `ruxInput:${testString}`)
        cy.get('#log').should('not.contain', `nativeInput:${testString}`)
    })

    it('passes correct label', () => {
        cy.get('#ruxInput')
            .shadow()
            .find('.rux-input-label')
            .contains('Input Field')
    })

    it('prepends aesthetics to lable if required', () => {
        cy.get('#ruxInput3')
            .shadow()
            .find('.rux-input-label .rux-input-label__asterisk')
            .contains('*')
    })

    it('prepends help text if attribute set', () => {
        cy.get('#ruxInput3')
            .shadow()
            .find('.rux-help-text')
            .contains('Test Help Text')
    })
    it('adds rux-icon if type is password', () => {
        cy.get('#ruxInput4').shadow().find('rux-icon').should('exist')
    })
    it('changes icon when icon is clicked', () => {
        cy.get('#ruxInput4').shadow().find('rux-icon').click({ force: true })
        cy.get('#ruxInput4')
            .shadow()
            .find('rux-icon')
            .shadow()
            .find('rux-icon-visibility-off')
            .should('exist')
    })
    it('cannot have its value changed if readonly is true', () => {
        cy.get('#readonly')
            .shadow()
            .find('input')
            .should('have.attr', 'readonly')
    })
    it('applies spellcheck prop to shadow input', () => {
        cy.get('#spellcheck')
            .shadow()
            .find('input')
            .should('have.attr', 'spellcheck')
    })
    it('applies autocomplete prop to shadow input', () => {
        cy.get('#autocomplete')
            .shadow()
            .find('input')
            .should('have.attr', 'autocomplete')
    })
    it('changes autocomplete to false if type is password', () => {
        cy.get('#autocomplete-to-off')
            .shadow()
            .find('input')
            .invoke('attr', 'autocomplete')
            .should('eq', 'off')
    })
    it('submits the correct value in type date', () => {
        cy.get('#date-type').shadow().find('input').type('2022-10-05')
        cy.get('#formSubmitBtn').click()
        cy.get('#log').should('contain', 'date-type:2022-10-05')
    })
    it('submits the correct value in type datetime-local', () => {
        cy.get('#datetime-local')
            .shadow()
            .find('input')
            .type('2022-10-05T13:25')
        cy.get('#formSubmitBtn').click()
        cy.get('#log').should('contain', 'datetime-local:2022-10-05T13:25')
    })
})
