describe('Select with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-select.html')
    })
    it('submits the correct select value when using a form', async () => {
        cy.get('rux-select .rux-select').select('blue')
        cy.get('#form').submit()
        cy.get('#log').contains('bestThing:blue')
    })

    // it('does not allow input if disabled', () => {

    // });
})
