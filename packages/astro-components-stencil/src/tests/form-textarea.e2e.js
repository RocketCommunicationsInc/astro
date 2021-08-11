describe('Text Area with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-textarea.html')
    })
    it('submits the correct value when using a form', () => {
        cy.get('#form').submit()
        cy.get('#log').contains('test1:TextArea Test 1')
        cy.get('#log').contains('native:Native Text Area')
    })
    it('submits correct value after typing into it', () => {
        cy.get('#noval').shadow().find('textarea').type('Eyes Up')
        cy.get('#form').submit()
        cy.get('#log').contains('noval:Eyes Up')
    })
    //Native textarea does not submit a value if disabled
    it('does not submit value if disabled', () => {
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'Disabled')
    })
    it('renders error text correctly', () => {
        cy.get('#errorText')
            .shadow()
            .find('.rux-error-text')
            .should('contain.text', 'ERROR')
    })
    it('renders help text correctly', () => {
        cy.get('#helpText')
            .shadow()
            .find('.rux-help-text')
            .should('contain.text', 'HELP')
    })
    it('renders error text over help text if both are passed in', () => {
        cy.get('#bothText')
            .shadow()
            .find('.rux-error-text')
            .should('contain.text', 'PLZ YES')
        cy.get('#bothText').shadow().find('.rux-help-text').should('not.exist')
    })
})
