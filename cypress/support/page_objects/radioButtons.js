/// <reference types = "cypress"/>



let buttonsRadio = "[type='radio']"
let successMessage = 'You have selected'

let sucessMessage = '.text-success'


export class RadioButtons{

    selectYesRadioButton(radioBtns){
        cy.get(buttonsRadio).then(btns=>{
            cy.wrap(btns).eq(radioBtns).check({force:true})
            .should('be.checked')

            
        })
        
        
    }

}

export const radioButtons = new RadioButtons()