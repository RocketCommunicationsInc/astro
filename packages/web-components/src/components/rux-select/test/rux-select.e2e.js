describe('Select with Form', () => {
    beforeEach(() => {
        cy.visitComponent('rux-select')
    })

    it('renders', () => {
        cy.get('rux-select').should('have.class', 'hydrated')
    })

    it('syncs value to select element', () => {
        cy.get('rux-select').invoke('prop', 'value', 'blue')
        cy.get('rux-select')
            .shadow()
            .find('select')
            .should('have.value', 'blue')
    })

    it('syncs value from select element', () => {
        cy.get('rux-select').shadow().find('select').select('green')
        cy.get('rux-select').should('have.value', 'green')
    })
    it('should submit the correct value when selecting an option', () => {
        cy.get('#ruxSelect')
            .shadow()
            .find('select')
            .select('blue')
            .should('have.value', 'blue')
        cy.get('#formSubmitBtn').click()
        cy.get('#log').contains('bestThing:blue')
    })

    it('should submit the correct value when typing an option after focus', () => {
        cy.get('#ruxSelect')
            .shadow()
            .find('select')
            .realPress('Tab')
            .realType('r')
        cy.get('#formSubmitBtn').click()

        cy.get('#log').should('contain', 'bestThing:red')
    })

    it('should submit the correct value when selecting by arrow keys after focus', () => {
        cy.get('#ruxSelect')
            .shadow()
            .find('select')
            .realPress('Tab')
            .realPress('ArrowDown', { delay: 200 })
            .realType('b')
        cy.get('#formSubmitBtn').click()
        cy.get('#log').should('contain', 'bestThing:blue')
    })

    it('should default to the option with no value', () => {
        cy.get('#ruxSelect').shadow().find('select').should('have.value', '')
    })

    it('should be disabled if disabled attribute is true', () => {
        cy.get('#ruxSelect')
            .get('rux-select')
            .then(($select) => {
                $select[0].setAttribute('disabled', true)
            })
        cy.get('#ruxSelect').shadow().find('select').should('be.disabled')
    })

    it('should not submit a value if disabled', () => {
        cy.get('#ruxSelect')
            .get('rux-select')
            .then(($select) => {
                $select[0].setAttribute('disabled', true)
            })
        cy.get('#ruxSelect')
            .shadow()
            .find('select')
            .select('green', { force: true })
        cy.get('#formSubmitBtn').click()
        cy.get('#log').should('not.contain', 'bestThing:green')
    })
})
