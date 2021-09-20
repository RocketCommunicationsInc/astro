describe('Input Field', () => {
    beforeEach(() => {
        cy.visitStory('forms-input-field--default-story')
    })
    it('renders', () => {
        cy.get('rux-input-field').should('have.class', 'hydrated')
    })
})

describe('Input Field with Form', () => {
    const testString = 'Hello World'

    beforeEach(() => {
        cy.visitForm('input-field')
        // makes sure form was clicked before submitting
        // submitting form directly via .submit() sometimes fails
        cy.get('#form').click()
    })

    it('submits the correct value when using a form', () => {
        cy.get('#ruxInput').shadow().find('input').type(testString)
        cy.get('#nativeInput').type(testString)

        cy.get('#formSubmitBtn').click()

        cy.get('#log').children().its('length').should('eq', 4)

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

        cy.get('#log').children().its('length').should('eq', 4)

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
})
