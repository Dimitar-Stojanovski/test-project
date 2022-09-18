
let addNewRecordBtn='#addNewRecordButton'
let firstNamePlshld= '#firstName'
let lastNamePlshd ='[placeholder="Last Name"]'
let emailPlshld = '#userEmail'
let agePlshd = '#age'
let salaryPlshld = '#salary'
let departmentPlshld = '#department'
let submitButton = '[type="submit"]'
let tableRow = '.rt-tr -even'
let rowValue = '.rt-td'



export class WebTables{

    clickOnAddNewRecordBtn(){
       
        cy.get(addNewRecordBtn).click()
    }

    enterFirstName(firstName){
        cy.get(firstNamePlshld).type(firstName)
    }

    enterLastName(lastName){
        cy.get(lastNamePlshd).type(lastName)
    }

    enterEmail(email){
        cy.get(emailPlshld).type(email)
    }

    enterAge(age){
        cy.get(agePlshd).type(age)
    }

    enterSalary(salary){
        cy.get(salaryPlshld).type(salary)
    }

    enterDepartment(department){
        cy.get(departmentPlshld).type(department)
    }

    clickSubmitBtn(){
        cy.get(submitButton).click()
    }

    verifyElementsInTable(){
        
       
            
    }






}
export const webTables= new WebTables() 