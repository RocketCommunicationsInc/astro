describe('Select with Form', () => {
    beforeEach(() => {
        cy.visitComponent('rux-select')
    })

    it('renders', () => {
        cy.get('#ruxSelect').should('have.class', 'hydrated')
    })

    it('syncs value to select element', () => {
        cy.get('#ruxSelect').invoke('prop', 'value', 'blue')
        cy.get('#ruxSelect')
            .shadow()
            .find('select')
            .should('have.value', 'blue')
    })

    it('syncs value from select element', () => {
        cy.get('#ruxSelect').shadow().find('select').select('green')
        cy.get('#ruxSelect').should('have.value', 'green')
    })

    it('should submit the correct value when selecting an option', () => {
        cy.get('#ruxSelect')
            .shadow()
            .find('select')
            .select('blue')
            .should('have.value', 'blue')

        /**
         * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__intercept/cypress/integration/form-spec.js
         * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__intercept/form.html
         * Intercept the form submission
         */
        cy.intercept(
            {
                method: 'POST',
                pathname: '/form',
            },
            (req) => {
                req.redirect('/test')
            }
        ).as('submitForm')

        cy.get('#formSubmitBtn').click()
        cy.location('pathname').should('equal', '/test')

        cy.wait('@submitForm')
            .its('request')
            .then(({ headers, body }) => {
                expect(body, 'request body').to.be.a('string')
                expect(body).to.equal('bestThing=blue')
            })
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

        cy.intercept(
            {
                method: 'POST',
                pathname: '/form',
            },
            (req) => {
                req.redirect('/test')
            }
        ).as('submitForm')

        cy.get('#formSubmitBtn').click()

        cy.wait('@submitForm')
            .its('request')
            .then(({ headers, body }) => {
                expect(body, 'request body').to.be.a('string')
                expect(body).to.equal('')
            })
    })

    /**
     * Multi Select
     */

    it('syncs multiple values from select element', () => {
        cy.get('#ruxMultiSelect')
            .shadow()
            .find('select')
            .select(['green', 'red'])
        cy.get('#ruxMultiSelect')
            .invoke('val')
            .should(($els) => {
                expect($els).to.deep.eq(['red', 'green'])
            })
    })

    it('syncs multiple values to select element', () => {
        cy.get('#ruxMultiSelect').invoke('prop', 'value', ['red', 'blue'])
        cy.get('#ruxMultiSelect')
            .shadow()
            .find('select')
            .should(($el) => {
                const options = [...$el[0].selectedOptions].map(
                    (el) => el.value
                )
                expect(options).to.deep.eq(['red', 'blue'])
            })
    })

    it('should submit the correct value when selecting multiple options', () => {
        cy.get('#ruxMultiSelect')
            .shadow()
            .find('select')
            .select(['red', 'blue'])

        /**
         * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__intercept/cypress/integration/form-spec.js
         * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__intercept/form.html
         * Intercept the form submission
         */
        cy.intercept(
            {
                method: 'POST',
                pathname: '/form',
            },
            (req) => {
                req.redirect('/test')
            }
        ).as('submitForm')

        cy.get('#multiSelectSubmitBtn').click()
        cy.location('pathname').should('equal', '/test')

        cy.wait('@submitForm')
            .its('request')
            .then(({ headers, body }) => {
                expect(body, 'request body').to.be.a('string')
                expect(body).to.equal('bestThing=red&bestThing=blue')
            })
    })

    // #TODO this test causes tons of flake when run in CI/CD. Fix as part of ASTRO-2235

    // it('should submit the correct value when typing an option after focus', () => {
    //     cy.get('#ruxSelect')
    //         .shadow()
    //         .find('select')
    //         .realPress('Tab')
    //         .realType('r')
    //     cy.get('#formSubmitBtn').click()

    //     cy.get('#log').should('contain', 'bestThing:red')
    // })

    // #TODO this test causes tons of flake when run in CI/CD. Fix as part of ASTRO-2235

    // it('should submit the correct value when selecting by arrow keys after focus', () => {
    //     cy.get('#ruxSelect')
    //         .shadow()
    //         .find('select')
    //         .realPress('Tab')
    //         .realPress('ArrowDown', { delay: 200 })
    //         .realType('b')
    //     cy.get('#formSubmitBtn').click()
    //     cy.get('#log').should('contain', 'bestThing:blue')
    // })
})
