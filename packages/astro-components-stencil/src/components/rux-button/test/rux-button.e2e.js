describe('Button', () => {
    beforeEach(() => {
        cy.visitStory('components-button--default-story')
    })
    it('renders', () => {
        cy.get('rux-button').should('have.class', 'hydrated')
    })
})

describe('Button with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-button.html')
    })
    it('submits the correct select value when using a form', () => {
        cy.get('rux-button').shadow().find('button').click({ force: true })
        cy.get('#log').contains('myname:mark')
    })
})
