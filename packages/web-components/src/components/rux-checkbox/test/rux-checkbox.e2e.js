describe('Checkbox', () => {
    beforeEach(() => {
        cy.visitStory('components-checkbox--default-story')
    })
    it('renders', () => {
        cy.get('rux-checkbox').should('have.class', 'hydrated')
    })
})

describe('Checkbox with Form', () => {
    beforeEach(() => {
        cy.visitForm('checkbox')
    })
    it('submits the correct select value when using a form', () => {
        cy.get('#ruxCheckbox').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox').click()
        cy.get('#form').submit()
        cy.get('#log').contains('ruxCheckbox:foo')
        cy.get('#log').contains('nativeCheckbox:foo')
    })

    it('defaults to unchecked', () => {
        cy.get('#ruxCheckbox')
            .shadow()
            .find('input')
            .should('not.be', 'checked')
        cy.get('#nativeCheckbox').should('not.be', 'checked')
    })

    it('does not submit any value if not checked', () => {
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxCheckbox')
        cy.get('#log').should('not.contain', 'nativeCheckbox')
    })

    it('submits a value of "on" if no value is provided', () => {
        cy.get('#ruxCheckbox2').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox2').click()
        cy.get('#form-no-value').submit()
        cy.get('#log').contains('ruxCheckbox:on')
        cy.get('#log').contains('nativeCheckbox:on')
    })

    it('does not allow input if disabled', () => {
        cy.get('#ruxCheckboxDisabled')
            .shadow()
            .find('input')
            .should('be.disabled')
        cy.get('#ruxCheckboxDisabled')
            .shadow()
            .find('input')
            .click({ force: true })
        cy.get('#ruxCheckboxDisabled')
            .shadow()
            .find('input')
            .should('not.be', 'checked')
        cy.get('#nativeCheckbox2').click()
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxCheckboxDisabled')
    })

    it('does not submit a value if checked and then unchecked', () => {
        cy.get('#ruxCheckbox').shadow().find('input').click({ force: true })
        cy.get('#ruxCheckbox').shadow().find('input').click({ force: true })
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxCheckbox')
    })

    it('does not submit any value if indeterminate', () => {
        cy.get('#ruxCheckbox')
            .invoke('prop', 'checked', 'true')
            .should('have.attr', 'checked', 'checked')
            .invoke('prop', 'indeterminate', 'true')
        cy.get('#log').should('not.contain', 'ruxCheckbox')
    })

    it('should be checked when clicking an unchecked indeterminate checkbox', () => {
        cy.get('#ruxCheckbox').invoke('prop', 'indeterminate', 'true')
        cy.get('#ruxCheckbox').shadow().find('input').click({ force: true })
        cy.get('#ruxCheckbox')
            .should('have.attr', 'checked', 'checked')
            .should('not.have.attr', 'indeterminate')
    })

    it('imperatively change checked and indeterminate properly', () => {
        cy.get('#ruxCheckbox').invoke('prop', 'indeterminate', 'true')
        cy.get('#ruxCheckbox')
            .shadow()
            .find('input')
            .should('have.prop', 'indeterminate', true)
        cy.get('#ruxCheckbox')
            .invoke('prop', 'checked', 'true')
            .should('have.attr', 'checked', 'checked')
            .invoke('prop', 'indeterminate', 'false')
            .should('not.have.attr', 'indeterminate')
        cy.get('#ruxCheckbox')
            .shadow()
            .find('input')
            .should('have.prop', 'indeterminate', false)
            .should('have.prop', 'checked', true)
    })
})
