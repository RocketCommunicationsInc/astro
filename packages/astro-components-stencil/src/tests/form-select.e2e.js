describe('Select with Form', () => {
    beforeEach(() => {
        cy.visitForm('select')
    })
    it('should submit the correct value when selecting an option', () => {
        cy.get('#ruxSelect')
            .find('select')
            .select('blue')
            .should('have.value', 'blue')
        cy.get('#form').submit()
        cy.get('#log').contains('bestThing:blue')
    })

    it('should submit the correct value when typing an option after focus', () => {
        cy.get('#ruxSelect').find('select').realPress('Tab').realType('r')
        cy.get('#ruxSelect').find('select').type('{enter}')
        cy.get('#log').should('contain', 'bestThing:red')
    })

    it('should submit the correct value when selecting by arrow keys after focus', () => {
        cy.get('#ruxSelect')
            .find('select')
            .realPress('Tab')
            .realPress('ArrowDown', { delay: 200 })
            .realType('b')
        cy.get('#ruxSelect').find('select').type('{enter}')
        cy.get('#log').should('contain', 'bestThing:blue')
    })

    it('should default to the option with no value', () => {
        cy.get('#ruxSelect').find('select').should('have.value', '')
    })

    it('should be disabled if disabled attribute is true', () => {
        cy.get('#ruxSelect')
            .get('rux-select')
            .then(($select) => {
                $select[0].setAttribute('disabled', true)
            })
        cy.get('#ruxSelect').find('select').should('be.disabled')
    })

    it('should not submit a value if disabled', () => {
        cy.get('#ruxSelect')
            .get('rux-select')
            .then(($select) => {
                $select[0].setAttribute('disabled', true)
            })
        cy.get('#ruxSelect').find('select').select('green', { force: true })
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'bestThing:green')
    })

    //only required while shadow dom is disabled for rux-select
    it('should show native validation message if required and submitted with no selection', () => {
        cy.get('#ruxSelect').then(($ruxSelect) => {
            $ruxSelect[0].setAttribute('required', true)
        })
        cy.get('[type="submit"]').realClick()
        cy.get('#ruxSelect').find('select:invalid').should('have.length', 1)
        cy.get('#ruxSelect')
            .find('select')
            .then(($select) => {
                expect($select[0].validationMessage).to.eq(
                    'Please select an item in the list.'
                )
            })
    })
})
