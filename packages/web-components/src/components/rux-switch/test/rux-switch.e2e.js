describe('Switch with Form', () => {
    beforeEach(() => {
        cy.visitComponent('rux-switch')
    })

    it('renders', () => {
        cy.get('rux-switch').should('have.class', 'hydrated')
    })

    it('submits the correct select value when using a form', () => {
        cy.get('#ruxSwitch').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox').click()
        cy.get('#form').submit()
        cy.get('#log').contains('ruxSwitch:foo')
        cy.get('#log').contains('nativeCheckbox:foo')
    })

    it('defaults to unchecked', () => {
        cy.get('#ruxSwitch').shadow().find('input').should('not.be', 'checked')
        cy.get('#nativeCheckbox').should('not.be', 'checked')
    })

    it('does not submit any value if not checked', () => {
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxSwitch')
        cy.get('#log').should('not.contain', 'nativeCheckbox')
    })

    it('submits a value of "on" if no value is provided', () => {
        cy.get('#ruxSwitch2').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox2').click()
        cy.get('#form-no-value').submit()
        cy.get('#log').contains('ruxSwitch:on')
        cy.get('#log').contains('nativeCheckbox:on')
    })

    it('does not allow input if disabled', () => {
        cy.get('#ruxSwitchDisabled')
            .shadow()
            .find('input')
            .should('be.disabled')
        cy.get('#ruxSwitchDisabled')
            .shadow()
            .find('input')
            .click({ force: true })
        cy.get('#ruxSwitchDisabled')
            .shadow()
            .find('input')
            .should('not.be', 'checked')
        cy.get('#nativeCheckbox2').click()
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxSwitchDisabled')
    })

    it('does not submit a value if checked and then unchecked', () => {
        cy.get('#ruxSwitch').shadow().find('input').click({ force: true })
        cy.get('#ruxSwitch').shadow().find('input').click({ force: true })
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxSwitch')
    })
})
