describe('Input Field with Form', () => {
  beforeEach(() => {
      cy.visit('localhost:4444/tests/pages/form-input-field.html')
  })

  it('submits the correct select value when using a form', async () => {
      cy.get('#ruxInput').shadow().find('.rux-input').type('Foo')
      cy.get('#nativeInput').type('Foo')
      cy.get('#form').submit()
      cy.get('#log').contains('ruxInput:foo')
      cy.get('#log').contains('nativeInput:foo')
  })

  // it('does not allow input if disabled', () => {

  // });
})
