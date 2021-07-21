
const faker = require('faker')


const el = require('../cadastro/elements').ELEMENTS 

class Cadastro{

    acessarFormularioCadastro(){
        cy.visit('register')
    }

    preecherFormulario(){
        cy.get(el.inputNome).type(faker.name.firstName() + faker.name.lastName())
        cy.get(el.inputEmail).type(faker.internet.email())
        cy.get(el.inputSenha).type('12345678')   
    }

    submeterPublicacao(){
        cy.get(el.buttonSubmit).click()
    }
}

export default new Articles();