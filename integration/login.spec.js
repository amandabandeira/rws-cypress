/// <reference types="cypress"/>    

import login from '../support/pages/login/index'

context('Login',()=>{
    it('Realizar login com sucesso',()=>{
      login.realizarLogin();
      login.preencherFormulario();
      login.submeterFormulario();
    
    });
});