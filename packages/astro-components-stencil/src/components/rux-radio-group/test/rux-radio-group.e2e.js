describe('Radio Group', () => {
    it('renders', () => {
        cy.visitStory('forms-radio-group--default-story')
        cy.get('rux-radio-group').should('have.class', 'hydrated')
    })
})

describe('Radio Group with Form', () => {
    beforeEach(() => {
        cy.visitForm('radio')
    })

    it('first radio is slected by default', () => {
        cy.get('#ruxRadioDefaultOne')
            .shadow()
            .find('input')
            .should('be.checked')
    })

    it('submits the correct value when using a form', () => {
        cy.get('#ruxRadioBlue').shadow().find('input').click({ force: true })
        cy.get('#nativeRadioBlue').click()
        cy.get('#form').submit()
        //Assert only two values were submitted.
        cy.get('#log').children().its('length').should('eq', 2)

        cy.get('#log').contains('ruxColor:blue')
        cy.get('#log').contains('nativeColor:blue')
    })

    it('does not allow input if disabled', () => {
        cy.get('#ruxRadioPurpleDisabled')
            .shadow()
            .find('input')
            .should('be.disabled')
        cy.get('#ruxRadioPurpleDisabled')
            .shadow()
            .find('input')
            .click({ force: true })
        cy.get('#ruxRadioPurpleDisabled')
            .shadow()
            .find('input')
            .should('not.be', 'checked')
        cy.get('#ruxRadioPurpleDisabled')
            .shadow()
            .find('input')
            .then(($input) => {
                $input.checked = false
            })

        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxColor:purple')
    })

    it('does not submit value if disabled', () => {
        cy.get('#ruxRadioRed2').shadow().find('input').should('be.disabled')
        cy.get('#ruxRadioRed2')
            .shadow()
            .find('input')
            .should('not.be', 'checked')
        cy.get('#ruxRadioRed2')
            .shadow()
            .find('input')
            .then(($input) => {
                $input.checked = false
            })

        cy.get('#form-checked-disabled').submit()
        cy.get('#log').should('not.contain', 'ruxColor:red')
    })
})
