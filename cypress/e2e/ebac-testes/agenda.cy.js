/// <reference types="cypress" />

describe('Testes de inclusão, alteração de remoção de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um novo contato', () => {
        cy.get('input[type="text"]').type('Migue')
        cy.get('input[type="email"]').type('miguel@leugim')
        cy.get('input[type="tel"]').type('12345678')
        cy.get('.adicionar').click()
    })

    it('Deve alterar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').type('l')
        cy.get('input[type="email"]').type('.com')
        cy.get('input[type="tel"]').type('90')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})